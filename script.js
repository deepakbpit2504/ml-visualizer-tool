let currentLevel=0,currentQ=0;

// AUTH
function signup(){
localStorage.setItem(user.value,pass.value);
msg.innerText="Signup done";
}

function login(){
if(localStorage.getItem(user.value)===pass.value){
window.location.href="explore.html";
}else msg.innerText="Wrong";
}

// LEVELS
const levels=[
{
content:`
<div class="split">
<div class="left">
<img src="https://picsum.photos/500/300?1">
</div>
<div class="right">
<iframe src="https://www.youtube.com/embed/ukzFI9rgwfU"></iframe>
</div>
</div>`
},
{
content:`
<div class="split">
<div class="left">
<img src="https://picsum.photos/500/300?2">
</div>
<div class="right">
<iframe src="https://www.youtube.com/embed/Cr6VqTRO1v0"></iframe>
</div>
</div>`
}
];

function showLevel(){
if(document.getElementById("content"))
content.innerHTML=levels[currentLevel].content;
}

function next(){currentLevel++;showLevel();}
function prev(){currentLevel--;showLevel();}

window.onload=showLevel;

// QUIZ
const quiz=[
{q:"ML stands for?",o:["Machine Learning","Mega Logic"],a:0},
{q:"Clustering?",o:["Supervised","Unsupervised"],a:1}
];

function renderQuiz(){
let q=quiz[currentQ];
quizBox.innerHTML=`<h3>${q.q}</h3>`;
q.o.forEach((opt,i)=>{
let b=document.createElement("button");
b.innerText=opt;
b.onclick=()=>alert(i===q.a?"Correct":"Wrong");
quizBox.appendChild(b);
});
}

function nextQ(){
currentQ++;
renderQuiz();
}

window.onload=renderQuiz;

// DASHBOARD
function renderChart(){
let ctx=document.getElementById("chart");
if(!ctx) return;

new Chart(ctx,{
type:'bar',
data:{labels:["Progress"],datasets:[{data:[currentLevel+1]}]}
});
}

window.onload=renderChart;