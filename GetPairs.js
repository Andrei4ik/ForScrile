let arroy = [];
let sum =  Math.floor(Math.random()*10);
for(let i = 0;i < 10;i++){
        arroy[i] = Math.floor(Math.random()*10);
    }

    function getParis(arr,sum){
    arroy.forEach(n => {
        const pair = arroy.find(m => m.length === 1 && m[0] + n === sum);
        if (pair) {
          pair.push(n);
        } else {
          arroy.push([n]);
        }
      });
      
      result = arroy.filter(n => n.length === 2);
      arroy.splice(10,10);   

      return resultobj ={
        sum:sum,
        input:arroy,
        result:result}
}    

export default getParis(arr,sum);

console.log(getParis(arroy,sum));
