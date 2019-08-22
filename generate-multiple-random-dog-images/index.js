'use strict';

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  
  $('.results').empty();
  //replace the existing image with the new one
  for (let i=0; i < responseJson.message.length; i++){
    $('.results').append(
      `<img src="${responseJson.message[i]}" class="results-img">`
    );

  }
 
  //display the results section
  //$('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const userInput = $('#numOfDogs').val();
    getDogImage(userInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});