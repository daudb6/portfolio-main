// Get the main container element
const container = document.getElementById('projects-container');
document.addEventListener('DOMContentLoaded', () => {
  const layout = document.querySelector('.special-layout');
  const close = document.querySelector('.show'); // Button to close the popup
  
  // Close popup when close button is clicked
  close.addEventListener('click', () => {
    layout.style.display = 'none'; // Hide the popup
  });
});

// Function to show the popup and populate it with project data
// Function to show the popup and populate it with project data
function showPopup(project) {
  const layout = document.querySelector('.special-layout');
  layout.style.display = 'block'; // Display the popup

  // Populate popup content with project data
  const popupTitle = layout.querySelector('.heading');
  const popupCanopy = layout.querySelector('.inner-intro .intro:nth-child(1)');
  const popupRole = layout.querySelector('.inner-intro .intro:nth-child(2)');
  const popupYear = layout.querySelector('.inner-intro .intro:nth-child(3)');
  const popupDescription = layout.querySelector('.inner-paragraph .text-content');
  const popupImage = layout.querySelector('.inner-img');

  // Set project data to the popup
  popupTitle.textContent = project.title; // Set project title
  popupCanopy.textContent = project.canopy; // Set canopy text
  popupRole.textContent = project.role; // Set role
  popupYear.textContent = project.year; // Set year
  popupDescription.textContent = project.description; // Set description
  popupImage.src = project.image; // Set image source

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


// Data for the cards
const projects = [
  {
    title: 'Tonic',
    canopy: 'CANOPY',
    role: 'Front End Dev',
    year: '2017',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: 'assets/project.png'
  },
  {
    title: 'Weather',
    canopy: 'Weather App',
    role: 'Back End Dev',
    year: '2018',
    description: 'Exploring the depths of design in different project formats.',
    languages: ['HTML', 'CSS', 'React'],
    image: 'assets/Weather.png'
  },
  {
    title: 'Calculator',
    canopy: 'App',
    role: 'Front End Dev',
    year: '2019',
    description: 'Exploring the depths of design in different project formats.',
    languages: ['HTML', 'CSS', 'Ruby', 'React'],
    image: 'assets/Calculator.png'
  },
  // Add more projects here if needed
];

// Loop through each project to create cards
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

  // Dot image between specs
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

  // Create "See Project" button
  let button = document.createElement('button');
  button.classList.add('button', 's-btn');
  button.textContent = 'See Project';

  // Add click event listener to the button to show the popup
  button.addEventListener('click', () => showPopup(project));

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














































//ForEachloop
// projects.forEach((project) => {
//   const card = `
//     <div class="card flex">
//       <div class="img-container">
//         <img class="img" src="${project.image}" alt="${project.title} image">
//       </div>
//       <div class="card-content flex">
//         <div class="card-info">
//           <h3>${project.title}</h3>
//           <div class="card-content-specs">
//             <p>${project.canopy}</p>
//             <img src="assets/dot.png" alt="dot"/>
//             <p>${project.role}</p>
//             <img src="assets/dot.png" alt="dot"/>
//             <p>${project.year}</p>
//           </div>
//         </div>
//         <p class="paragraph">${project.description}</p>
//         <div class="languages">
//           ${project.languages.map(lang => `<p class="lang">${lang}</p>`).join('')}
//         </div>
//         <button class="button">See Project</button>
//       </div>
//     </div>
//   `;

//   container.innerHTML += card;
// });

