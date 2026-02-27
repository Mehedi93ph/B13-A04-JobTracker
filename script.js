
// arrays store job objects
let interviewList = [];
let rejectedList = [];
let currentTab = "all";


// Dom elements
let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allJobCardsSection = document.getElementById('allJobCards')
const mainContainer = document.querySelector('main')
const filteredCard = document.getElementById('filtered-card')
const emptyState = document.getElementById('emptyState')
const tabCount = document.getElementById('tabCount')

// Update count
function calculateTotalCount() {

  // totalCount.innerText = allJobCardsSection.children.length +
  //   interviewList.length + rejectedList.length;

  totalCount.innerText = allJobCardsSection.children.length;

  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;

  // tab wise count
  if (currentTab === "all") {
    tabCount.innerText = allJobCardsSection.children.length + " jobs";
  }

  if (currentTab === "interview") {
    tabCount.innerText = interviewList.length + " jobs";
  }

  if (currentTab === "rejected") {
    tabCount.innerText = rejectedList.length + " jobs";
  }

}

calculateTotalCount();


// Tab toggole
const allFilterTab = document.getElementById('allTab');
const interviewFilterTab = document.getElementById('interviewTab');
const rejectedFilterTab = document.getElementById('rejectedTab');

function changeTab(id) {

  allFilterTab.classList.remove('bg-blue-600', 'text-white')
  interviewFilterTab.classList.remove('bg-blue-600', 'text-white')
  rejectedFilterTab.classList.remove('bg-blue-600', 'text-white')

  allFilterTab.classList.add('bg-gray-200', 'text-black')
  interviewFilterTab.classList.add('bg-gray-200', 'text-black')
  rejectedFilterTab.classList.add('bg-gray-200', 'text-black')

  const selectedTab = document.getElementById(id)

  selectedTab.classList.remove('bg-gray-200', 'text-black')
  selectedTab.classList.add('bg-blue-600', 'text-white')

  filteredCard.innerHTML = ""

  if (id === "allTab") {
    currentTab = "all"
    allJobCardsSection.style.display = "block"
    emptyState.classList.add('hidden')
  }

  if (id === "interviewTab") {
    currentTab = "interview"
    allJobCardsSection.style.display = "none"
    renderInterview()
  }

  if (id === "rejectedTab") {
    currentTab = "rejected"
    allJobCardsSection.style.display = "none"
    renderRejected()
  }

  calculateTotalCount()
}


// Event delegations
mainContainer.addEventListener('click', function (event) {

  if (event.target.classList.contains('interview-btn')) {

    const nparentNode = event.target.closest('.bg-white');

    const companyName = nparentNode.querySelector('.company-name')?.innerText;
    const jobPosition = nparentNode.querySelector('.job-position')?.innerText;
    const salaryInfo = nparentNode.querySelector('.salary-info')?.innerText;
    const jobInfo = nparentNode.querySelector('.job-info')?.innerText;

    const statusSpan = nparentNode.querySelector('.apply-status');

    if (statusSpan) {
      statusSpan.innerText = "INTERVIEW";
      statusSpan.classList.remove('bg-gray-300', 'text-gray-900');
      statusSpan.classList.remove('bg-red-200', 'text-red-900');
      statusSpan.classList.add('bg-green-200', 'text-green-900');
    }

    rejectedList = rejectedList.filter(
      item => item.companyName !== companyName
    );

    const listExist = interviewList.find(
      item => item.companyName === companyName
    )

    if (!listExist) {
      interviewList.push({ companyName, jobPosition, salaryInfo, jobInfo })
    }

    if (currentTab === "interview") renderInterview()
    if (currentTab === "rejected") renderRejected()

    calculateTotalCount()
  }

  if (event.target.classList.contains('rejected-btn')) {

    const nparentNode = event.target.closest('.bg-white');

    const companyName = nparentNode.querySelector('.company-name')?.innerText;
    const jobPosition = nparentNode.querySelector('.job-position')?.innerText;
    const salaryInfo = nparentNode.querySelector('.salary-info')?.innerText;
    const jobInfo = nparentNode.querySelector('.job-info')?.innerText;

    const statusSpan = nparentNode.querySelector('.apply-status');

    if (statusSpan) {
      statusSpan.innerText = "REJECTED";
      statusSpan.classList.remove('bg-gray-300', 'text-gray-900');
      statusSpan.classList.remove('bg-green-200', 'text-green-900');
      statusSpan.classList.add('bg-red-200', 'text-red-900');
    }

    interviewList = interviewList.filter(
      item => item.companyName !== companyName
    );

    const listExist = rejectedList.find(
      item => item.companyName === companyName
    )

    if (!listExist) {
      rejectedList.push({ companyName, jobPosition, salaryInfo, jobInfo })
    }

    if (currentTab === "interview") renderInterview()
    if (currentTab === "rejected") renderRejected()

    calculateTotalCount()
  }


  // *** deletion of cards

  if (event.target.closest('.btn-delete')) {

    const deleteCard = event.target.closest('.bg-white')

    const companyName = deleteCard.querySelector('.company-name')?.innerText;
    interviewList = interviewList.filter(item => item.companyName !== companyName);
    rejectedList = rejectedList.filter(item => item.companyName !== companyName);
    deleteCard?.remove()
    calculateTotalCount()

    if (interviewTab.classList.contains('bg-blue-600')) {
      renderInterview()
    }

    if (rejectedTab.classList.contains('bg-blue-600')) {
      renderRejected()
    }

    if (allTab.classList.contains('bg-blue-600')) {

      if (allJobCardsSection.children.length === 0) {
        emptyState.classList.remove('hidden')
      } else {
        emptyState.classList.add('hidden')
      }
    }
  }
});


// **************** deletion of cards

if (event.target.closest('.btn-delete')) {

  const deleteCard = event.target.closest('.bg-white')

  const companyName =
    deleteCard.querySelector('.company-name')?.innerText;

  interviewList = interviewList.filter(
    item => item.companyName !== companyName
  );

  rejectedList = rejectedList.filter(
    item => item.companyName !== companyName
  );

  deleteCard?.remove()

  calculateTotalCount()
}



// Render interview list

function renderInterview() {

  filteredCard.innerHTML = '';

  if (interviewList.length === 0) {
    emptyState.classList.remove('hidden')
    return;
  }

  emptyState.classList.add('hidden')

  for (let interview of interviewList) {

    let div = document.createElement('div');
    div.className = "bg-white p-6 rounded-lg shadow-sm mb-6 mt-6"

    div.innerHTML = `
      <div class="flex justify-between items-start">
        <div>
          <h3 class="company-name text-lg font-bold text-gray-800">
            ${interview.companyName}
          </h3>
          <p class="job-position text-gray-600 text-sm">
            ${interview.jobPosition}
          </p>
          <p class="salary-info text-gray-400 text-sm mt-1">
            ${interview.salaryInfo}
          </p>
        </div>

        <button class="btn-delete text-gray-400 hover:text-red-500 border-red-300 border-2 rounded-full p-1.5">
           <i class="fa-regular fa-trash-can" style="color: rgb(255, 0, 0);"></i>
        </button>
      </div>

      <span class="apply-status inline-block bg-green-200 text-green-900 text-sm px-3 py-1.5 rounded mt-4">
        INTERVIEW
      </span>

      <p class="job-info text-gray-600 text-sm mt-3">
        ${interview.jobInfo}
      </p>

      <div class="flex gap-3 mt-4">
        <button class="interview-btn px-4 py-2 border border-green-500 text-green-600 rounded-md text-sm">
          INTERVIEW
        </button>
        <button class="rejected-btn px-4 py-2 border border-red-500 text-red-600 rounded-md text-sm">
          REJECTED
        </button>
      </div>
    `
    filteredCard.appendChild(div);
  }
}