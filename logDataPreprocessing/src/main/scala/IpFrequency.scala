import org.apache.spark._
import org.apache.spark.storage.StorageLevel

//args(0) sparkMaster
//args(1) FileInPath
//args(2) HumanFileOutPath
//args(3) RobotFileOutPath
//args(4) Ip
//args(5) Lng
//args(6) Lat
//args(7) Threshold
object IpFrequency {
  def main(args: Array[String]) {
    // Set Spark Configration & Context
    val conf = new SparkConf().setAppName("HumanRobot").setMaster(args(0))
    val spark = new SparkContext(conf)
    // read data from system file or hdfs
    // args(1) as path, FileIn as lines
    val lines = spark.textFile(args(1))
    // Get Ip Frequence and cache them
    val nIp = args(4).toInt
    val Ips = lines.map(line => line.split(",")(nIp))
    val IpPair = Ips.map(Ips => (Ips, 1))
    // cache() IpCount
    val IpCount = IpPair.reduceByKey((x, y) => x + y).persist(StorageLevel.MEMORY_ONLY)
    // Output TOP50
    val IpTop = IpCount.sortBy(_._2,false).take(200)
    val IpTopOutput = spark.parallelize(IpTop.map(x => x._1 + "," + x._2))
    IpTopOutput.saveAsTextFile("E://IPTop50")
    // Get Lat,Lng & filter
    val nLng = args(5).toInt
    val nLat = args(6).toInt
    val Ip_LatLng = lines.map(line => (line.split(",")(nIp), line.split(",")(nLng) + "," + line.split(",")(nLat))).filter{case(x,y)=>
      (y.split(",")(1).toDouble < 90.0 && y.split(",")(1).toDouble > -90.0)}.persist(StorageLevel.MEMORY_AND_DISK)
    //Count filter & Join
    val numPartitions = 4
    val CountThreshold = args(7).toInt
    val RobotJoin = Ip_LatLng.join(IpCount.filter{case(x,y)=>y>CountThreshold})
    val RobotOut = RobotJoin.map( x => x._1 + "," + x._2._1)
    RobotOut.repartition(numPartitions).saveAsTextFile(args(3))
    val HumanJoin = Ip_LatLng.join(IpCount.filter{case(x,y)=>y<CountThreshold})
    val HumanOut = HumanJoin.map( x => x._1 + "," + x._2._1)
    HumanOut.repartition(numPartitions).saveAsTextFile(args(2))
    //stop
    spark.stop()
  }
}
