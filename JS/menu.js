const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBtn');

function open() {
  document.getElementById('navLi').style.display = 'block';
}

function close() {
  document.getElementById('navLi').style.display = 'none';
}

document.querySelectorAll('#navLi').forEach((n) => n.addEventListener('click', () => {
  document.getElementById('navLi').style.display = 'none';
}));

hamburger.addEventListener('click', open);
closeBtn.addEventListener('click', close);