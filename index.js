'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
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
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function getValue(){
  $('form').submit(event => {
    event.preventDefault();
    const numDogPics = $('.numOfDogPic').val()
    console.log(numDogPics);
    getDogImage();
  })
}

/*function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getValue();
    getDogImage();
  });
} */

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

getValue()
