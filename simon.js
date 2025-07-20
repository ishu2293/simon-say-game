let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "green", "purple"];
let started = false;
let h3 = document.querySelector("h3");
let btn = document.querySelector(".btn");
let level = 0;
let max = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game started");
        started = true;
        levelup();
    }
    
});

function gameFlash(btn){
      btn.classList.add("flash");
      setTimeout(function(){
        btn.classList.remove("flash");
      },240);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },240);
};

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randidx=Math.floor(Math.random()*4);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);
};

function highest(){
    if(level >= max){
        max = level;
        console.log("Highest score is ${max}");
        let h3 = document.querySelector("#high");
        h3.innerText = `Highest score is: ${max}`;
    }else{
        console.log("not highest");
    }
};

function reset(){
    started==false;
    gameseq = [];
    userseq = [];
    level=0;
};

function checkAns(idx){
    // console.log("current level: ", level);
    if(userseq[idx]=== gameseq[idx]){
       if(userseq.length==gameseq.length){
        setTimeout(levelup, 1000);
       }
    }else{
        console.log("wrong!!");
        h2.innerHTML= `Game over! <b>Your score is ${level}.</b><br> Press any key to start`;
        highest();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = " #ebaabe";
        },150);
       reset();
    }
};
function btnpress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    let usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkAns(userseq.length-1);
};

let btnsAll=document.querySelectorAll(".btn");
for(btn of btnsAll){
    btn.addEventListener("click", btnpress);
};

 