// Creating the base content
const rootDiv = document.createElement("div");
const countdownDiv = document.createElement("div");
const headerText = document.createElement("h1");
const countdownText = document.createElement("h2");

rootDiv.id = "rootDiv";
countdownDiv.id = "countdownDiv";
headerText.id = "headerText";
countdownText.id = "countdownText"

headerText.innerHTML = "It's the final countdown!";

document.body.appendChild(rootDiv);
rootDiv.appendChild(headerText);
rootDiv.appendChild(countdownDiv);



// Creating the countdown
function countdown(){
  let countDownDate = new Date("Sep 23, 2022 17:00:00").getTime();
  
  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
      
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    countdownText.innerHTML = "Countdown to the Front End: <br>" + "<span id= 'countdownTxt'>" +  days + "d " + hours + "h " + minutes + "m " + seconds + "s " + "</span>";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      h3.innerHTML = "Countdown is over! Issa is now a Front End Developer";
    }
  }, 1000);

  countdownDiv.appendChild(countdownText)
}

countdown()