# Spatio-temporal visualization of massive web map logs, revised from Aperture Tile-Based Visual Analytics(https://github.com/unchartedsoftware/aperture-tiles).
## - **What's new?**<br>

**1.Data Preprocessing(/logDataPreprocessing):**<br>
- Worm discernment from massive web map logs. Code: IpFrequency.scala, a Spark Program build by SBT.

**2. FrontEnd(/WebMapLogHeatMap):**<br>
- Add webmap Service case WMTS.
- Control for spatio-temporal query.
- Worm IP (illeage) treeMap visualization.

**3. Support for Spatio-temporal HBASE:**<br>
- Spatio-temporal DataBase Support.
- Support tens of millions records.

## - **Want to know more details?**<br>
Look https://www.shushili.cn/wordpress/?cat=5 for more details.

## - **Visualization**<br>
![image](https://github.com/RilaShu/spatio-temporal-visualization-of-massive-web-map-logs/raw/master/images/spatio-temporal-query.png)<br>
![image](https://github.com/RilaShu/spatio-temporal-visualization-of-massive-web-map-logs/raw/master/images/human.png)<br>
![image](https://github.com/RilaShu/spatio-temporal-visualization-of-massive-web-map-logs/raw/master/images/worm-IP.png)<br>
