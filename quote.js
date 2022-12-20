function getQuote(){
let myPromise = new Promise (function(myResolve,myReject){
    let url="https://api.quotable.io/random"
    fetch(url).then((res)=>res.json()).then((data)=>myResolve(data));
});
console.log(myPromise)
myPromise.then((data)=>{
    document.getElementById("quote").innerHTML = data.content;
    document.getElementById("author").innerHTML = ` - ${data.author}`;
})
}