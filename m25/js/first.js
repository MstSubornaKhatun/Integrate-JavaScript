console.log('first file')


const allLi = document.getElementsByTagName('li');
console.log(allLi); //HTMLCollection(12) [li, li, li, li, li, li, li, li, li, li, li, li]


const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles); // HTMLCollection(3) [h1.section-title, h1.section-title, h1.section-title]

const secondSection = document.getElementById('second-section');
console.log(secondSection); // <section id="second-section">…</section>
secondSection.style.color = 'white';
secondSection.style.backgroundColor = 'tomato';


// document.querySelectorAll
// document.querySelector




