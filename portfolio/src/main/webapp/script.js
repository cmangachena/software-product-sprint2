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
