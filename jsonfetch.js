
const req= '{"quotes":[{"high":"1.8638","open":"1.8629","bid":"1.8629","currencyPairCode":"GBPNZD","ask":"1.8646","low":"1.8547"},{"high":"85.45","open":"85.41","bid":"85.28","currencyPairCode":"CADJPY","ask":"85.33","low":"85.26"},{"high":"1.7478","open":"1.7465","bid":"1.7474","currencyPairCode":"GBPAUD","ask":"1.7483","low":"1.7446"},{"high":"83.07","open":"83.04","bid":"82.90","currencyPairCode":"AUDJPY","ask":"82.93","low":"82.86"},{"high":"1.0667","open":"1.0662","bid":"1.0657","currencyPairCode":"AUDNZD","ask":"1.0667","low":"1.0634"},{"high":"1.5141","open":"1.5125","bid":"1.5134","currencyPairCode":"EURCAD","ask":"1.5141","low":"1.5114"},{"high":"1.1400","open":"1.1392","bid":"1.1389","currencyPairCode":"EURUSD","ask":"1.1390","low":"1.1383"},{"high":"77.87","open":"77.81","bid":"77.74","currencyPairCode":"NZDJPY","ask":"77.80","low":"77.69"},{"high":"1.3291","open":"1.3275","bid":"1.3288","currencyPairCode":"USDCAD","ask":"1.3294","low":"1.3269"},{"high":"0.8914","open":"0.8903","bid":"0.8908","currencyPairCode":"EURGBP","ask":"0.8912","low":"0.8882"},{"high":"1.2789","open":"1.2781","bid":"1.2781","currencyPairCode":"GBPUSD","ask":"1.2784","low":"1.2770"},{"high":"8.230","open":"8.228","bid":"8.220","currencyPairCode":"ZARJPY","ask":"8.370","low":"8.214"},{"high":"1.1354","open":"1.1341","bid":"1.1350","currencyPairCode":"EURCHF","ask":"1.1355","low":"1.1333"},{"high":"113.92","open":"113.89","bid":"113.73","currencyPairCode":"CHFJPY","ask":"113.78","low":"113.68"},{"high":"0.7324","open":"0.7317","bid":"0.7312","currencyPairCode":"AUDUSD","ask":"0.7314","low":"0.7309"},{"high":"0.9968","open":"0.9948","bid":"0.9965","currencyPairCode":"USDCHF","ask":"0.9969","low":"0.9935"},{"high":"129.28","open":"129.27","bid":"129.13","currencyPairCode":"EURJPY","ask":"129.15","low":"129.04"},{"high":"1.2741","open":"1.2717","bid":"1.2737","currencyPairCode":"GBPCHF","ask":"1.2746","low":"1.2705"},{"high":"1.6609","open":"1.6602","bid":"1.6599","currencyPairCode":"EURNZD","ask":"1.6611","low":"1.6541"},{"high":"0.6867","open":"0.6857","bid":"0.6855","currencyPairCode":"NZDUSD","ask":"0.6861","low":"0.6852"},{"high":"113.47","open":"113.47","bid":"113.38","currencyPairCode":"USDJPY","ask":"113.39","low":"113.31"},{"high":"1.5574","open":"1.5561","bid":"1.5569","currencyPairCode":"EURAUD","ask":"1.5577","low":"1.5547"},{"high":"0.7294","open":"0.7280","bid":"0.7286","currencyPairCode":"AUDCHF","ask":"0.7292","low":"0.7273"},{"high":"145.06","open":"145.06","bid":"144.92","currencyPairCode":"GBPJPY","ask":"144.95","low":"144.77"}]}'
const result = JSON.parse(req).quotes


const sortedResult = result.sort((a, b) => {
    if (parseInt(parseFloat(a.high) * 1000) > parseInt(parseFloat(b.high))) {
        return 1
    }
    else {
        return -1
    }
})

const temp = sortedResult.map(obj => {
    const hoge = {
        currencyPairCode: obj.currencyPairCode,
        high: obj.high
    }
    return `${hoge.currencyPairCode} : ${hoge.high}`
})

console.log(temp.join('\n'))
