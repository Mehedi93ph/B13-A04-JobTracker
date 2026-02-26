
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
