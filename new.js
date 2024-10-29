const container = document.getElementById('projects-container');
document.addEventListener('DOMContentLoaded', () => {
  const layout = document.querySelector('.special-layout');
  const close = document.querySelector('.show'); // Button to close the popup
  const button = document.querySelector('.s-btn'); // Button to show the popup
  // console.log(layout)
  
  // Show popup on button click
  container.addEventListener('click', () => {
    layout.style.display = 'block'; // Display the popup
  });
  
  // Close popup when close button is clicked
  close.addEventListener('click', () => {
    layout.style.display = 'none'; // Hide the popup
  });
});



// console.log(layout)

// Data for the cards
const projects = [
  {
    title: 'Tonic',
    canopy: 'CANOPY',
    role: 'Front End Dev',
    year: '2017',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['HTML', 'CSS', 'JavaScript','Bootstrap'],
    image: 'assets/project.png'
  },
  {
    title: 'Weather',
    canopy: 'weather App',
    role: 'Back End Dev',
    year: '2018',
    description: 'Exploring the depths of design in different project formats.',
    languages: ['HTML', 'CSS', 'react'],
    image: 'assets/Weather.png'
  },
  {
    title: 'Calculator',
    canopy: 'App',
    role: 'Front End Dev',
    year: '2019',
    description: 'Exploring the depths of design in different project formats.',
    languages: ['HTML', 'CSS', 'Ruby','react'],
    image: 'assets/Calculator.png'
  },
  // Add more projects here if needed
];



// Loop through each project
projects.forEach((project) => {
  // Create the card container
  let card = document.createElement('div');
  card.classList.add('card', 'flex');

  // Create image container
  let imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  // Create image element
  let img = document.createElement('img');
  img.classList.add('img');
  img.src = project.image;
  img.alt = `${project.title} image`;
  imgContainer.appendChild(img); 

  // Create card content container
  let cardContent = document.createElement('div');
  cardContent.classList.add('card-content', 'flex');

  // Create card info container
  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  // Create project title
  let title = document.createElement('h3');
  title.textContent = project.title;
  cardInfo.appendChild(title); 

  // Create the card content specs (canopy, role, year)
  let specs = document.createElement('div');
  specs.classList.add('card-content-specs');

  // Canopy (e.g., 'CANOPY')
  let canopy = document.createElement('p');
  canopy.textContent = project.canopy;
  specs.appendChild(canopy);

  // Dot image between specs (repeated twice)
  let dot1 = document.createElement('img');
  dot1.src = 'assets/dot.png';
  dot1.alt = 'dot';
  specs.appendChild(dot1);

  // Role (e.g., 'Back End Dev')
  let role = document.createElement('p');
  role.textContent = project.role;
  specs.appendChild(role);

  let dot2 = document.createElement('img');
  dot2.src = 'assets/dot.png';
  dot2.alt = 'dot';
  specs.appendChild(dot2);

  // Year (e.g., '2015')
  let year = document.createElement('p');
  year.textContent = project.year;
  specs.appendChild(year);

  cardInfo.appendChild(specs); // Append specs to card info

  // Description
  let description = document.createElement('p');
  description.classList.add('paragraph');
  description.textContent = project.description;

  // Languages container
  let languagesContainer = document.createElement('div');
  languagesContainer.classList.add('languages');

  // Loop through languages and create <p> tags for each language
  project.languages.forEach(lang => {
    let langElement = document.createElement('p');
    langElement.classList.add('lang');
    langElement.textContent = lang;
    languagesContainer.appendChild(langElement);
  });

  // Create button
  let button = document.createElement('button');
  button.classList.add('button','s-btn');
  button.textContent = 'See Project';

  // Append elements to card content
  cardContent.appendChild(cardInfo);
  cardContent.appendChild(description);
  cardContent.appendChild(languagesContainer);
  cardContent.appendChild(button);

  // Append imgContainer and cardContent to the card
  card.appendChild(imgContainer);
  card.appendChild(cardContent);

  // Append the complete card to the main container
  container.appendChild(card);

});


 // Show popup function to populate the popup with project data
 function showPopup(project) {
  layout.style.display = 'block'; // Display the popup

  // Populate popup content with project data
  const popupTitle = layout.querySelector('.heading');
  const popupCanopy = layout.querySelector('.inner-intro p:nth-child(1)');
  const popupRole = layout.querySelector('.inner-intro p:nth-child(2)');
  const popupYear = layout.querySelector('.inner-intro p:nth-child(3)');
  const popupDescription = layout.querySelector('.inner-paragraph .text-content');
  const popupImage = layout.querySelector('.inner-img');

  popupTitle.textContent = project.title;
  popupCanopy.textContent = project.canopy;
  popupRole.textContent = project.role;
  popupYear.textContent = project.year;
  popupDescription.textContent = project.description;
  popupImage.src = project.image;

  // Update languages in the popup
  const languagesContainer = layout.querySelector('.inner-contact .languages');
  languagesContainer.innerHTML = ''; // Clear existing languages
  project.languages.forEach(lang => {
    let langElement = document.createElement('p');
    langElement.classList.add('lang');
    langElement.textContent = lang;
    languagesContainer.appendChild(langElement);
  });
}

