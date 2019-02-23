# -*- coding: UTF-8 -*-
# @author: RilaShu 18/04/03

# { name: 'nodeA', value: 10,children: [    {name: 'nodeAa', value: 4}, {name: 'nodeAb',value: 6} ]},
if __name__ == '__main__':
    debug = False
    fIn = open('part-00000','r')
    fOut = open('out.txt','w')
    #
    n5W = 0
    s5W = ",children: ["
    n1W = 0
    s1W = ",children: ["
    n5K = 0
    s5K = ",children: ["
    n2K = 0
    s2K = ",children: ["
    n1K = 0
    s1K = ",children: ["
    nOther = 0
    sOther = ",children: ["
    #
    line = fIn.readline()
    while line:
        IP = line.split(',',2)[0]
        nCount = int(line.split(',',2)[1])
        if nCount >=50000 :
            s5W = s5W + "{name: '" + IP + "', value:" + str(nCount) + "},"
            n5W += nCount
        elif nCount<50000 and nCount>=10000:
            s1W = s1W + "{name: '" + IP + "', value:" + str(nCount) + "},"
            n1W += nCount
        elif nCount<10000 and nCount>=5000:
            s5K = s5K + "{name: '" + IP + "', value:" + str(nCount) + "},"
            n5K += nCount
        elif nCount<5000 and nCount>=2000:
            s2K = s2K + "{name: '" + IP + "', value:" + str(nCount) + "},"
            n2K += nCount 
        elif nCount<2000 and nCount>=1000:
            s1K = s1K + "{name: '" + IP + "', value:" + str(nCount) + "},"
            n1K += nCount 
        else:
            sOther = sOther + "{name: '" + IP + "', value:" + str(nCount) + "},"
            nOther += nCount
        line = fIn.readline()
    s5W = "{ name: '大于5万', value:" + str(n5W) + s5W + "]},\n"
    s1W = "{ name: '大于1万', value:" + str(n1W) + s1W + "]},\n"
    s5K = "{ name: '大于5千', value:" + str(n5K) + s5K + "]},\n"
    s2K = "{ name: '大于2千', value:" + str(n2K) + s2K + "]},\n"
    s1K = "{ name: '大于1千', value:" + str(n1K) + s1K + "]},\n"
    sOther = "{ name: '其他', value:" + str(nOther) + sOther + "]},\n"
    fOut.write(s5W+s1W+s5K+s2K+s1K+sOther)
    fIn.close()
    fOut.close()