'use strict';

function getValue(){
  $('form').submit(event => {
    event.preventDefault();
    const numDogPics = $('.numOfDogPic').val()
    console.log(numDogPics);
    return numDogPics;
  });
}

function appendFetchHTML(){

  let fetchLink = 'https://dog.ceo/api/breeds/image/random';
  let newFetchLink = `${fetchLink}/${getValue()}`;
  console.log('getValue()');
  console.log(newFetchLink);
  return newFetchLink;
}

function getDogImage() {
  
  fetch(appendFetchHTML())
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $('.results').removeClass('hidden');
}


/*function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getValue();
    getDogImage();
  });
} */

// $(function() {
//   console.log('App loaded! Waiting for submit!');
//   watchForm();
// });

getValue();
$(getValue);
getDogImage();
appendFetchHTML();
