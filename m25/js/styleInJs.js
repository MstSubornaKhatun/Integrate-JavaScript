const sections = document.querySelectorAll('section');
// console.log(sections); //NodeList(3) [section, section.fruits-container, section]
for (const section of sections){
    // console.log(section)
    section.style.border = '3px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';

}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow'


// style.css er modhe theke class use kore o bg change korte paro
const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center')
placesContainer.classList.remove('large-text')