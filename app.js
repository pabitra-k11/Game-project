let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","purple"];
let h3=document.querySelector("h3");


let started = false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started..");
        started=true;
    }
    levelUp();
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
      btn.classList.remove("flash");
    },250);


}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function (){
      btn.classList.remove("userFlash");
    },250);


}
function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`level:${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);

}
function checkAns(idx){
   
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(function(){
                levelUp();

            },1000)
        }

    }else{
        h3.innerHTML=`Game over your score was<b> ${level}</b> !<br> press any key to start`;
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
    }
}


function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}