module.exports = function reverse (n) {
 
    let strN = String(Math.abs(n));
    let strNReverse = '';

    for(let i = strN.length - 1; i >= 0; i --)
    {
        strNReverse+= strN[i];
    }
    return Number(strNReverse);
}
