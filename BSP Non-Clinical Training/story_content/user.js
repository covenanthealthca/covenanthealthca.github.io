function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62fmYqg7vCT":
        Script1();
        break;
      case "65Ntt9g4oNA":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
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

window.Script2 = function()
{
  window.print();
}

};
