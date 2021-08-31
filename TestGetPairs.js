//import getParis from "./GetPairs.js";   

function resultsMatched(arr, sum,expectedArr){

    function getParis(arr,sum){
        arr.forEach(n => {
            const pair = arr.find(m => m.length === 1 && m[0] + n === sum);
            if (pair) {
              pair.push(n);
            } else {
              arr.push([n]);
            }
          });
          
         let result = arr.filter(n => n.length === 2);
          arr.splice(10,10);   
          let resultobj;
    
          return resultobj ={
            sum:sum,
            input:arr,
            result:result}
    }    
    
    let c = 0;
    let res = getParis(arr,sum);
    let arr1 = res.result.flat();
    let arr2 = expectedArr.flat()

    arr1.sort(); 
    arr2.sort();

    for(i = 0; i < arr2.length; i++)
    if(arr2[i] == arr1[i]){
       c++;
    }
    if(c==arr2.length)
        bull=true;
    else
        bull=false;

    return resobj= {
        bull:bull,
        arr1:arr1,
        arr2:arr2
    }
}

console.log(resultsMatched([1,2,1,2],3,[[2,1],[2,1]]))
