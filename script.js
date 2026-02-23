let countInting = [];
let countrejing = [];

let total = document.getElementById('total');
let countInt = document.getElementById('countInt');
let countRej = document.getElementById('countRej');

const all-btnn = document.getElementById('all-btnn')
const interview-btn = document.getElementById('interview-btn')
const rejected-btn = document.getElementById('rejected-btn')


const alljobsection = document.getElementById('all-job');
const maincontainer = document.querySelector('main');
console.log(maincontainer)

function calculatecount(){
    total.innerText = alljobsection.children.length
    countInting.innerText = countInt.length
    countrejing.innertext = countRej.length
}
 calculatecount()

 function toggleStyle(id){
    all-btn.classList.remove('bg-blue', ' text-white')
    interview-btn.classList.remove('bg-blue', ' text-white')
    rejected-btn.classList.remove('bg-blue', ' text-white')
 
 }

