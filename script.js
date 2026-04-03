let currentLevel=0;
let currentQ=0;

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
content:`<h3>ML Basics</h3>
<div class="split">
<div class="left"><img src="images/ml.jpg"></div>
<div class="right"><iframe src="https://www.youtube.com/embed/ukzFI9rgwfU"></iframe></div>
</div>`
},
{
content:`<h3>Types</h3>
<div class="split">
<div class="left"><img src="images/types.png"></div>
<div class="right"><iframe src="https://www.youtube.com/embed/Cr6VqTRO1v0"></iframe></div>
</div>`
},
{
content:`<h3>Linear Regression</h3>
<div class="split">
<div class="left"><img src="images/linear.jpg"></div>
<div class="right"><iframe src="https://www.youtube.com/embed/nk2CQITm_eo"></iframe></div>
</div>`
},
{
content:`<h3>Logistic Regression</h3>
<div class="split">
<div class="left"><img src="images/logistic.png"></div>
<div class="right"><iframe src="https://www.youtube.com/embed/zM4VZR0px8E"></iframe></div>
</div>`
},
{
content:`<h3>Evaluation</h3>
<div class="split">
<div class="left"><img src="images/confusion.png"></div>
<div class="right"><iframe src="https://www.youtube.com/embed/85dtiMz9tSo"></iframe></div>
</div>`
},
{
content:`<h3>Overfitting</h3>
<div class="split">
<div class="left"><img src="images/overfit.png"></div>
<div class="right"><iframe src="https://www.youtube.com/embed/EehRcPo1WPs"></iframe></div>
</div>`
},
{
content:`<h3>Clustering</h3>
<div class="split">
<div class="left"><img src="images/cluster.webp"></div>
<div class="right"><iframe src="https://www.youtube.com/embed/4b5d3muPQmA"></iframe></div>
</div>`
},
{
content:`<h3>Neural Networks</h3>
<div class="split">
<div class="left"><img src="images/nn.png"></div>
<div class="right"><iframe src="https://www.youtube.com/embed/aircAruvnKk"></iframe></div>
</div>`
}
];

function showLevel(){
let el=document.getElementById("content");
if(el) el.innerHTML=levels[currentLevel].content;
localStorage.setItem("progress",currentLevel);
}

function next(){
if(currentLevel<levels.length-1){currentLevel++;showLevel();}
}

function prev(){
if(currentLevel>0){currentLevel--;showLevel();}
}

// QUIZ
const quiz=[
{q:"ML stands for?",o:["Machine Learning","Mega Logic"],a:0},
{q:"Clustering?",o:["Supervised","Unsupervised"],a:1},
{q:"Regression predicts?",o:["Numbers","Classes"],a:0},
{q:"Overfitting?",o:["Memorizing","Learning"],a:0},
{q:"K-means?",o:["Clustering","Sorting"],a:0},
{q:"Neural nets?",o:["Brain","CPU"],a:0},
{q:"Accuracy?",o:["Correct","Speed"],a:0},
{q:"Deep learning?",o:["Neural nets","Trees"],a:0},
{q:"Spam detection?",o:["Classification","Regression"],a:0},
{q:"Supervised uses?",o:["Labeled","Random"],a:0}
];

function renderQuiz(){
let box=document.getElementById("quizBox");
if(!box) return;

let q=quiz[currentQ];
box.innerHTML=`<h3>${q.q}</h3>`;

q.o.forEach((opt,i)=>{
let b=document.createElement("button");
b.innerText=opt;
b.onclick=()=>alert(i===q.a?"Correct":"Wrong");
box.appendChild(b);
});
}

function nextQ(){
if(currentQ<quiz.length-1){currentQ++;renderQuiz();}
else{alert("Quiz done");currentQ=0;}
}

// DASHBOARD
function renderChart(){
let ctx=document.getElementById("chart");
if(!ctx) return;

let progress=localStorage.getItem("progress")||0;

new Chart(ctx,{
type:'bar',
data:{labels:["Progress"],datasets:[{data:[parseInt(progress)+1]}]}
});
}

// LOAD
window.addEventListener("load",()=>{
showLevel();
renderQuiz();
renderChart();
});