
let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// total count dashboard section
const allJobCardsSection = document.getElementById('allJobCards')
const mainContainer = document.querySelector('main')

function calculateTotalCount() {
  totalCount.innerText = allJobCardsSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateTotalCount()


// button toggole structure

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
}