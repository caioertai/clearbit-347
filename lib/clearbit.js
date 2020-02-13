////===== Variable assignments =====
// Default values
const authorization = "Bearer sk_33883e2b8b3066b2216f3dd4aa063ee0";
const baseURL       = "https://person-stream.clearbit.com/"

// HTML Elements
const userForm     = document.querySelector("#clearbitForm");
const userInput    = document.querySelector("#clearbitEmail");
const userName     = document.querySelector("#userName");
const userEmail    = document.querySelector("#userEmail");
const userBio      = document.querySelector("#userBio");
const userLocation = document.querySelector("#userLocation");

////===== Function assigments =====
// Displays data in the HTML
const displayData = (data) => {
  const fullName = data.person.name.fullName;
  const email    = data.person.email;
  const bio      = data.person.bio;
  const location = `${data.person.geo.city} - ${data.person.geo.stateCode} - ${data.person.geo.country}`;

  userName.innerText     = fullName;
  userEmail.innerText    = email;
  userBio.innerText      = bio;
  userLocation.innerText = location;
};

// Fetches (email) info from Clearbit API
const fetchInfo = (email) => {
  fetch(`${baseURL}v2/combined/find?email=${email}`, {
    headers: {
      'Authorization': authorization
    }
  })
    .then(response => response.json())
    .then(displayData)
};

// Assigns the behavior of form
const handleClearbitForm = () => {
  fetchInfo(userInput.value);
};

////===== Function calls =====
// Adds the form behavior
userForm.addEventListener("submit", handleClearbitForm);
