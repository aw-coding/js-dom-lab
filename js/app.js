document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const title = document.querySelector('#new-item-form');
  title.addEventListener('submit', getTitle)
  //document.getElementById('reading-list').reset()


})



const getTitle = (event) => {
  event.preventDefault();
  const newListItem = document.createElement('li');
  newListItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
  newListItem.classList.add('books');
  const list = document.querySelector('ul');
  list.appendChild(newListItem);
  document.getElementById('new-item-form').reset();


  //const resultTitle = document.querySelector('#reading-list');
  //newListItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
}




// const handleFormSubmit = (event) => {
//   event.preventDefault();
//   const resultParagraph = document.querySelector('#form-result');
//   resultParagraph.textContent = `Your name: ${event.target.first_name.value} ${event.target.last_name.value}`



// document.addEventListener( 'DOMContentLoaded', () => {
//   const title = document.querySelector('h1'); // returns first h1 tag fond in html and saves to title
//   title.textContent = "JavaScript says hello world";

//   const pTag = document.querySelector('#welcome-paragraph');
//   pTag.textContent = "Something else";

//   const redElement = document.querySelector('li.red');
//   redElement.textContent = "RED!!!";
//   redElement.classList.add('bold'); // adding a CSS class
//   redElement.classList.remove('bold');

//   const allLiElements = document.querySelectorAll('li'); // returns all li elements found in html. Result is an array of objects
//   console.dir(allLiElements);

//   // Creating elements
//   // 1. Create the element
//   const newListItem = document.createElement('li');

//   // 2. Modify the element
//   newListItem.textContent = "Purple";
//   newListItem.classList.add('purple');

//   // 3. Append the element to the DOM
//   const list = document.querySelector ('ul');
//   list.appendChild(newListItem);

// });