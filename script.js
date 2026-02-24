
// dashboard--------->>>>>

const total = document.getElementById('total');
const countInt = document.getElementById('countInt');
const countRej = document.getElementById('countRej');
const availableCount = document.getElementById('available-count');

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

// Interview button ---------->>>>>


const interviewButtons = document.querySelectorAll('.interview-btn');

for (let i = 0; i < interviewButtons.length; i++) {

    interviewButtons[i].addEventListener('click', function () {

        const jobCard = this.closest('.job');
        const status = jobCard.querySelector('.status');

        if (jobCard.dataset.status === "Interview") {
            return;
        }

        jobCard.dataset.status = "Interview";

        status.innerText = "Interview";
        status.classList.remove('text-red-500');
        status.classList.add('text-green-600');

        calculateCount();
        
        
    });

}

// rejected button --------->>>>>>


const rejectedButtons = document.querySelectorAll('.rejected-btn');

for (let i = 0; i < rejectedButtons.length; i++) {

    rejectedButtons[i].addEventListener('click', function () {

        const jobCard = this.closest('.job');
        const status = jobCard.querySelector('.status');

        if (jobCard.dataset.status === "Rejected") {
            return;
        }

        jobCard.dataset.status = "Rejected";

        status.innerText = "Rejected";
        status.classList.remove('text-green-600');
        status.classList.add('text-red-500');

        calculateCount();
        
    });

}


// Delete BUtton ------>>>>


const deleteButtons = document.querySelectorAll('.btn-dlt');

for (let i = 0; i < deleteButtons.length; i++) {

    deleteButtons[i].addEventListener('click', function () {

        const jobCard = this.closest('.job');
        jobCard.remove();

        calculateCount();
        
    });

}
 // TAb toggle----->>>

 function toggleStyle(id) {

    allBtn.classList.remove('bg-blue-500', 'text-white');
    interviewBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedBtn.classList.remove('bg-blue-500', 'text-white');

    const activeBtn = document.getElementById(id);
    activeBtn.classList.add('bg-blue-500', 'text-white');

    const allJobs = document.querySelectorAll('.job');
    const visibleJobs = document.querySelectorAll('.job:not([style*="display: none"])');

    availableCount.innerText = `Showing ${visibleJobs.length} of ${allJobs.length} jobs`;
}

// Filter Tab ----->>>>

allBtn.addEventListener('click', function () {

    

    const jobs = document.querySelectorAll('.job');

    for (let i = 0; i < jobs.length; i++) {
        jobs[i].style.display = 'flex';
    }
    toggleStyle('all-btnn');
});
interviewBtn.addEventListener('click', function () {

   
    const jobs = document.querySelectorAll('.job');

    for (let i = 0; i < jobs.length; i++) {

        if (jobs[i].dataset.status === "Interview") {
            jobs[i].style.display = 'flex';
        } else {
            jobs[i].style.display = 'none';
        }
    }
     toggleStyle('interview-btn');

});


rejectedBtn.addEventListener('click', function () {

    toggleStyle('rejected-btn');

    const jobs = document.querySelectorAll('.job');

    for (let i = 0; i < jobs.length; i++) {

        if (jobs[i].dataset.status === "Rejected") {
            jobs[i].style.display = 'flex';
        } else {
            jobs[i].style.display = 'none';
        }
    }
});
toggleStyle("all-btnn");