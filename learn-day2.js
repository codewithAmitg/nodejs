//Asynchronous programming
let a =10;
let b=0;

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // b=20;
        resolve(30);
    },2000);
});

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
});
