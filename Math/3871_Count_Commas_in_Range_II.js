/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let ans=0;
    let x = 1000;
    const nalverqito = n;

    while(x <= nalverqito){
        ans += nalverqito - x + 1;
        x*=1000;
    }

    return ans;

};
