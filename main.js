// Start Code
// 24 July 2020
// Al Nahian | https://alnahian2003

// seletct input fields and other id
const name = document.getElementById("name"),
  number = document.getElementById("number"),
  from = document.getElementById("from"),
  to = document.getElementById("to"),
  date = document.getElementById("date"),
  bookingButton = document.querySelector(".btn"),
  passengerList = document.getElementById("passenger-list");

// Add eventlistener
bookingButton.addEventListener("click", function (e) {
  e.preventDefault();

  // If fields are empty, alert will be shown
  if (
    name.value == "" &&
    number.value == "" &&
    from.value == "" &&
    to.value == "" &&
    date.value == ""
  ) {
    alert("You can't leave fields empty.");
  }
  //   Else, the result will work
  else {
    //   create new table row to show data
    const newRow = document.createElement("tr");

    // Create new passenger name
    const newName = document.createElement("th");
    newName.innerHTML = name.value;
    newRow.appendChild(newName);

    // Create new passenger phone number
    const newNumber = document.createElement("th");
    newNumber.innerHTML = number.value;
    newRow.appendChild(newNumber);

    // Create new from where
    const newFrom = document.createElement("th");
    newFrom.innerHTML = from.value;
    newRow.appendChild(newFrom);

    // Create new to where
    const newTo = document.createElement("th");
    newTo.innerHTML = to.value;
    newRow.appendChild(newTo);

    // Create new date of journey
    const newDate = document.createElement("th");
    newDate.innerHTML = date.value;
    newRow.appendChild(newDate);

    passengerList.appendChild(newRow);
  }
});

//special thanks to JS Bangladesh
