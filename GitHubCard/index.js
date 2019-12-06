axios
  .get("https://api.github.com/users/Matt-GitHub")
  .then(response => {
    console.log(response);
    let cardsDiv = document.querySelector(".cards");
    cardsDiv.appendChild(cardCreator(response.data));

    // ** get followers data in data {followers_url}
    return response.data.followers_url;
  })
  .then(followers_url => followerData(followers_url))
  .catch(error => {
    console.log("Something is not working" + " " + error);
  });

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards

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
let cardCreator = object => {
  // ** card div
  let card = document.createElement("div");
  card.classList.add("card");
  // ** Image
  let image = document.createElement("img");
  image.src = object.avatar_url;
  image.setAttribute("alt", `Image of ${object.name}`);
  card.appendChild(image);
  // ** Card-Info Div
  let cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  card.appendChild(cardInfo);
  // ** User Name
  let cardName = document.createElement("h3");
  cardName.classList.add("name");
  cardName.textContent = object.name;
  cardInfo.appendChild(cardName);
  // ** GitHub Profile name
  let profileName = document.createElement("p");
  profileName.classList.add("username");
  profileName.textContent = object.login;
  cardInfo.appendChild(profileName);
  // ** Location
  let location = document.createElement("p");
  location.textContent = `Location: ${object.location}`;
  cardInfo.appendChild(location);
  // ** Link to Profile
  let profileLink = document.createElement("p");
  profileLink.textContent = "Profile: ";
  let anchorLink = document.createElement("a");
  anchorLink.href = object.html_url;
  anchorLink.textContent = object.html_url;
  anchorLink.setAttribute("target", "_blank");
  cardInfo.appendChild(profileLink);
  profileLink.appendChild(anchorLink);
  //** Followers
  let followers = document.createElement("p");
  followers.textContent = `Followers: ${object.followers}`;
  cardInfo.appendChild(followers);
  // ** Following
  let following = document.createElement("p");
  following.textContent = `Following: ${object.following}`;
  cardInfo.appendChild(following);
  // ** User Bio
  let bio = document.createElement("p");
  bio.textContent = `Bio: ${object.bio}`;
  cardInfo.appendChild(bio);

  // ! Return Card !!!!
  return card;
};

// ! USE LET NOT CONST
let followersArray = [];

let followerData = followers_url => {
  // ** get followers
  axios
    .get(followers_url)
    .then(response => {
      // ! map data to work with for each
      followersArray = response.data.map(follower => follower.login);

      // ** for each
      followersArray.forEach(follower => {
        axios.get(`https://api.github.com/users/${follower}`).then(user => {
          document.querySelector(".cards").appendChild(cardCreator(user.data));
        });
      });
    })
    .catch(error => {
      console.log("something went terribly wrong" + " " + error);
    });
};
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
