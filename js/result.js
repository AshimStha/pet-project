window.onload = function () {
  // fetch the data from the local storage
  var playerList = localStorage.getItem("listOfPlayers").split(",");
  var totalTeams = localStorage.getItem("totalTeams");

  // fetch the result element
  var result = document.getElementById("result");

  // create a function to shuffle the array
  function shuffleArray() {
    for (let i = 0; i < totalTeams; i++) {
      // generate the index to break the array
      var index = (playerList.length / totalTeams) * (i + 1);

      // create an div element for each team
      var div = document.createElement("div");

      // add the class to the div element for CSS
      div.classList.add(`team_container_${i + 1}`);

      // create a paragraph element for each team
      div.innerHTML = ` <p class="team_heading">Team ${i + 1}</p>`;

      // add the div element to the result element
      result.appendChild(div);

      // create an ul element for each team
      var ul = document.createElement("ul");

      // add the class to the ul element for CSS
      ul.classList.add("team_listing");

      // add the ul element to the div element
      for (let j = totalTeams * i; j < index; j++) {
        // create an li element for each player
        var li = document.createElement("li");
        // add the class to the li element for CSS
        li.classList.add("team_listing_item");
        // add the li element to the ul element
        li.innerHTML = playerList[j];
        // add the li element to the ul element
        ul.appendChild(li);
      }
      // add the ul element to the div element
      div.appendChild(ul);
    }
  }
  // call the function
  shuffleArray();
};
