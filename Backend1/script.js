alert('raand');
//foreach map filter indexOf
var arr=[1,2,3,4];
arr.forEach(function(val){
    console.log(val + "hello");

})

//map is used when u want to create an array from the exisiting array
var ans=arr.map(function(val){
    return val*5;
})
console.log(ans);

var ans1=arr.filter(function(val){
    if(val>=3){
        return true;
    }else{
        return false;
    }
})
console.log(ans1);

var ans2=arr.find(function(val){
    if(val==2){
        return val;
    }
})
console.log(ans2);

arr.indexOf(2)
var a="vishal"
var obj={
    name:a,
    age:'12'
}
Object.freeze(obj);

console.log(obj.name)
console.log(obj.age);

async function fetchdata(){
    var blob=await fetch(`https://randomuser.me/api/`);
    var ans= await blob.json();
    console.log(ans);
}
fetchdata();