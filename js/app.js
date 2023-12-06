// When the page loads
window.onload = function () {
  // Creating a form handler
  var formHandle = document.forms.team_form;

  // Fetching the form elements

  // For the number of players
  var playerNumber = formHandle.team_number;
  // For player names input
  var playerNames = formHandle.team_players;

  // Players list
  var playersList = document.getElementById("players_list");

  // The add player button
  var addPlayerBtn = document.getElementById("name_submit_btn");

  // When the add player button is clicked, call AddPlayers()
  addPlayerBtn.onclick = AddPlayers;

  // When the form is submitted, call processForm()
  formHandle.onsubmit = processForm;

  // Defining processForm()
  function processForm() {
    // Preventing the form from being submitted
    return false;
  }

  // Function to add players
  function AddPlayers() {
    if (playerNames.value == "" || playerNames.value == null) {
      alert("Please enter a valid player name!");
    } else if (
      playerNumber.value == "" ||
      playerNumber.value == null ||
      playerNumber.value == 0
    ) {
      alert("Please enter a valid number of players!");
    } else if (playerNumber.value < 4) {
      alert("There should be at least 4 players!");
    } else if (playerNumber.value > 8) {
      alert("The total players can not be more than 8!");
    } else if (playersList.children.length >= playerNumber.value) {
      alert("You have reached the maximum number of players!");
    } else {
      // Create a new list item
      var li = document.createElement("li");

      // Add the player name to the list item
      li.innerHTML = playerNames.value;

      // Add the list item to the players list
      playersList.appendChild(li);

      li.classList.add("players_list_item");

      // Clear the player name input
      playerNames.value = "";
    }
  }
};
