// When the page loads
window.onload = function () {
  // fetch the data from the local storage
  var formHandle = document.forms.team_form;

  // Clearing the local storage
  localStorage.removeItem("listOfPlayers");
  localStorage.removeItem("totalTeams");

  // Fetching the error message elements
  var teamNumberErrorMessage = document.getElementById(
    "team_number_error_message"
  );
  var nameErrorMessage = document.getElementById("name_error_message");
  var teamsErrorMessage = document.getElementById("teams_error_message");
  var submitPlayerName = document.getElementById("name_submit_btn");
  var playersList = document.getElementById("players_list");
  var listOfPlayers = [];

  // Execute the function when the form is submitted
  formHandle.onsubmit = processForm;

  // Validation for the number of teams
  submitPlayerName.addEventListener("click", function () {
    if (formHandle.team_players.value === "") {
      nameErrorMessage.style.display = "block";
      nameErrorMessage.innerHTML = "Please enter a name";
      return false;
    }

    // Check if the number of players is greater than the number of teams
    if (listOfPlayers.length >= formHandle.total_team_members.value) {
      nameErrorMessage.style.display = "block";
      nameErrorMessage.innerHTML =
        "You have reached the maximum number of players";
      return false;
    }

    // add the player name to the array
    listOfPlayers.push(formHandle.team_players.value);
    // create a local storage item
    localStorage.setItem("listOfPlayers", listOfPlayers);
    // execute the function to create the list of players
    createPlayerList(formHandle.team_players.value);
  });

  // function to process the form
  function processForm() {
    // validation for the fields
    if (formHandle.total_team_members.value <= 0) {
      teamNumberErrorMessage.style.display = "block";
      teamNumberErrorMessage.innerHTML = "Please enter a number greater than 0";
      return false;
    }

    if (formHandle.total_team_members.value < 4) {
      teamNumberErrorMessage.style.display = "block";
      teamNumberErrorMessage.innerHTML = "Please enter a number greater than 3";
      return false;
    }

    if (formHandle.total_team_members.value % 2 !== 0) {
      teamNumberErrorMessage.style.display = "block";
      teamNumberErrorMessage.innerHTML = "Please enter an even number";
      return false;
    }

    if (formHandle.team_players.value === "") {
      nameErrorMessage.style.display = "block";
      nameErrorMessage.innerHTML = "Please enter a name";
      return false;
    }

    if (formHandle.number_of_teams.value === "x") {
      teamsErrorMessage.style.display = "block";
      teamsErrorMessage.innerHTML = "Please select a number of teams";
      return false;
    }

    localStorage.setItem("totalTeams", formHandle.number_of_teams.value);
    window.location.href = "result.html";

    return false;
  }

  // function to create the list of players
  function createPlayerList(value) {
    console.log(value);
    // Creating a new list item
    var li = document.createElement("li");

    // Adding the player name to the list item
    li.innerHTML = value;

    // Adding the list item to the players list
    playersList.appendChild(li);

    // Adding the class to the list item element for CSS
    li.classList.add("players_list_item");

    // Creating a new span element with the close button
    var span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
    span.classList.add("remove");
  }
};
