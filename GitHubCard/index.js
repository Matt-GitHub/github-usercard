axios
  .get("https://api.github.com/users/Matt-GitHub")
  .then(response => {
    let dataInput = document.querySelector(".cards");
    dataInput.appendChild(cardCreator(response.data));
    console.log(response);
  })
  .catch(error => {
    console.log("Something is not working" + " " + error);
  });

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
let cardCreator = object => {
  // ** Create Div Element to Append Data Elements
  let card = document.querySelector(".card");

  // ** User Name
  // create element
  let cardName = document.createElement("h1");
  // add class

  // append to div

  // ** GitHub Profile name

  // ** Link to Profile

  // ** Location

  // ** Image

  //** Followers

  // ** Following

  // ** User Bio

  // ! Return Card !!!!
  return card;
};
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
