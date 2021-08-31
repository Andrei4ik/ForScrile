const arroy = [];
let sum =  Math.floor(Math.random()*10);

function getProfit(arr){
    for(let i = 0;i < 10;i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    let low = 10;
    let big = 0;
    let lowest;
    let biggest;

    for(let i = 0;i<10;i++)
    {
        if(big<arr[i]){
            big = arr[i];
            biggest = i;
        }else if(low>arr[i]){
            low = arr[i];
            lowest = i;
        } 
    }
    let result = [lowest,biggest];

    if(big - low <= 0)
        return resultobj={
        input: arr,
        result: []
        }
    else
        return resultobj={
        input: arr,
        result:result
        }
}

console.log(getProfit(arroy))