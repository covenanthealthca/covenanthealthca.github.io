function ExecuteScript(strId)
{
  switch (strId)
  {
      case "690Zu54fDlD":
        Script1();
        break;
      case "6YG4GqbmQwr":
        Script2();
        break;
  }
}

function Script1()
{
  let currentTime = new Date();

// Months as text
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


// Set Date STyle
let monthm = month[currentTime.getMonth()];
let day = currentTime.getDate();
let year = currentTime.getFullYear();

// Putting it together
let dateString = monthm + " " + day + "," + " " + year;

//Pushing data as a variable into Storyline
let player = GetPlayer();
player.SetVar("todaysdate", dateString);
}

function Script2()
{
  window.print();
}

