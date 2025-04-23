const array=['sanup','divakaran','kakkayur','kerala'];

const getId = document.getElementById('hello');
console.log("getId-->",getId);

let index=0;
getId.onclick=()=>{
    if(index===array.length){
        index=0;
        getId.innerHTML=array[index];
        index= (index+1);
    }else{
    console.log("hey");
    getId.innerHTML=array[index];
    index= (index+1);
    }
}
