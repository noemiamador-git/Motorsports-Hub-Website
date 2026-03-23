const headlineTitle = document.getElementById('headline-title');
const headlineButton = document.getElementById('headline-button');

const headlines = [
  'Race-week buzz starts now',
  'Pit strategy could decide the podium',
  'Rookies are pushing the veterans hard',
  'Street circuits promise zero-margin drama'
];

let currentHeadline = 0;

headlineButton?.addEventListener('click', () => {
  currentHeadline = (currentHeadline + 1) % headlines.length;
  headlineTitle.textContent = headlines[currentHeadline];
});
