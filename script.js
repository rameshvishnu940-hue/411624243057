console.log("hello vish")
const a=1;
const b=2;
console.log(a)
const str ="vish";
console.log(str)
const fruits=["apple","banana","orange","grapes"]
console.log(fruits[0])
fruits[1]="orange"
console.log(fruits[1])
const arr =["mona","vishnu","madhu","rashu"]
console.log(arr)
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
const f=document.getElementById("ptag")
f.innerHTML="this is my fourth cls"
function dom(){
    console.log("i am writing")
}
const input=document.getElementById("eventListener")
const output = document.getElementById("ptag")
input.addEventListener("input",()=>{
    output.textContent=input.value
})


const x = document.createElement("h1")
x.textContent="New paragraph";
document.body.appendChild(x);
x.remove()