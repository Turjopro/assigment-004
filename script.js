
// dashboard--------->>>>>

const total = document.getElementById('total');
const countInt = document.getElementById('countInt');
const countRej = document.getElementById('countRej');

const allBtn = document.getElementById('all-btnn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');

const  allJobSection = document.getElementById('all-job');

// calculation section ------>>>>

function calculateCount() {

    const allJobs = document.querySelectorAll('.job');
    const interviewJobs = document.querySelectorAll('.job[data-status="Interview"]');
    const rejectedJobs = document.querySelectorAll('.job[data-status="Rejected"]');

    total.innerText = allJobs.length;
    countInt.innerText = interviewJobs.length;
    countRej.innerText = rejectedJobs.length;
}

calculateCount();