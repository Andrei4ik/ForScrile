import { getParis } from "./GetPairs";

function resultsMatched(arr, sum,expectedArr){
    let res = getParis(arr,sum);
    return res.result.sort(res.result.flat()) === expectedArr.sort(expectedArr.flat());
}

console.log(resultsMatched([1,3,4,2,6,0,0,1],4,[[0,4],[3,1]]))
