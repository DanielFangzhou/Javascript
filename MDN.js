const canvas=document.querySelector('canvas');
const circles=document.querySelector('input');
// const colors=document.querySelector('#colors');
const context=canvas.getContext("2d");
// context.beginPath();

canvas.width=960;
canvas.height=540;
// context.beginPath();
// context.arc(formX(), formY(), formRadius(), 0, Math.PI*2, true);
// context.fillStyle = c;
// context.fill();
// context.closePath();

// for(let i=0;i<200;i++){
//   console.log(Math.floor((Math.random()*20))+1);

// }

// console.log(circles);

document.querySelector('#circleButt').addEventListener('click', formCircles);
document.querySelector('#reset').addEventListener('click', function (){
  context.fillStyle="#ffffff";  
  context.beginPath();  
  context.fillRect(0,0,canvas.width,canvas.height);  
  context.closePath();
});


function formCircles(){
  
    let num=circles.value;
    if(num!==''){
        // console.log("num"+num);
        for(let i=0;i<num;i++){
          context.beginPath();
          context.arc(formX(), formY(), formRadius(), 0, Math.PI*2, true);
          context.fillStyle = formRGBA();
          context.fill();
        }
    }
}

function formRGBA(){
    let r=Math.floor(Math.random()*255)+1;
    let g=Math.floor(Math.random()*255)+1;
    let b=Math.floor(Math.random()*255)+1;
    let a=Math.floor(Math.random()*5)/5+0.1;
    return 'rgba('+r+','+g+','+b+','+a+')'
}

console.log(formRGBA());

function formX(){
  return Math.floor((Math.random()*canvas.width))+1;
}
function formY(){
  return Math.floor((Math.random()*canvas.height))+1;
}
function formRadius(){
  return Math.floor((Math.random()*75))+1;

}