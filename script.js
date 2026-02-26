
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


  
});

