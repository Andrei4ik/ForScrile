let arroy = [];
let sum =  Math.floor(Math.random()*10);
for(let i = 0;i < 10;i++){
        arroy[i] = Math.floor(Math.random()*10);
    }

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

//export default getParis();

console.log(getParis(arroy,sum));
