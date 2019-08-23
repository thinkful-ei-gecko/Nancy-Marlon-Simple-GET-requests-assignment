'use strict';

function getDogImage(breed) {
//https://dog.ceo/api/breed/hound/images/random
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error (response.statusText);
    })
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Enter a valid dog breed'));
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

function watchForm() {
  $('#doggoBreedInput').submit(event => {
    event.preventDefault();
    let breedInput = $('.doggoBreed').val().toLowerCase();
    console.log(breedInput);
    getDogImage(breedInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
