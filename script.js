
let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// total count dashboard section
const allJobCardsSection = document.getElementById('allJobCards')

function calculateTotalCount() {
  totalCount.innerText = allJobCardsSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateTotalCount()


