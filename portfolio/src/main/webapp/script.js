// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
  
// Allows comments to be displayed everytime the page loads
window.onload = function() {
  addComments();
};

// Adds map to page
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -19.0154, lng: 29.1549},
    zoom: 0
  });

// Adds motihari  marker to page
var motihari = {lat: 26.6438, lng: 84.9040};
var marker = new google.maps.Marker({
  position: motihari,
  map: map
});

// Adds ithaca marker to page
var ithaca = {lat: 42.4440, lng: -76.5019};
var marker = new google.maps.Marker({
    position: ithaca,
    map: map
});

// Adds monroeville marker to page
var monroeville = {lat: 31.5279, lng: 87.3247};
var marker = new google.maps.Marker({
    position: monroeville,
    map: map
})
}
/**
 * Adds a random quote to the page.
 */
function addRandomQuote() {
    const quotes =
      ['If you want to wear the crown, bear the crown', 'Do to others as you would have them do unto you', 'We only live once!', 'Live to love', 'It is better to regret doing, than to regret because of not doing'];

    // Pick a random quote.
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    // Add it to the page.
    const quotesContainer = document.getElementById('quote-container');
    quotesContainer.innerText = quote;

}
async function addComments(){

   // Sends a request to /my-data-url 
   fetch('/data')
   // Parses the response as JSON  
.then(response => response.json()) 
  // References the fields in the object 
.then((comments) => { 
  console.log(comments);

  const commentsContainer = document.getElementById('comments');
  
  commentsContainer.innerHTML = comments.join("<br>");
});
}
