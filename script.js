const { title } = require("./title");

const mybtn = document.getElementById('mybtn');
console.log('Знайшов заголовок:', title); 
console.log('Знайшов кнопку:', mybtn);
mybtn.addEventListener('click', function() { 
  title.textContent = 'JS працює! 🎉'; 
  title.style.color = 'teal';
   mybtn.textContent = 'Натиснуто ✓'; 
  mybtn.style.background = 'teal';   
mybtn.style.color = 'white'; });
