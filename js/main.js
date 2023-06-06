const dateControl = document.querySelector('input[type="date"]');
//const date = document.getElementById('datePicker').valueAsDate = new Date();
const container = document.querySelector(".article2");
let currentDate = document.querySelector('.current-date');

async function getData() {
  // grab calender value
  
  // fetch api
  let url = "http://calapi.inadiutorium.cz/calenders/general-en/today";
  let response = await fetch(url);
  let calender = await response.json();
  try {
    const dateElement = document.createElement("h2");
    const seasonElement = document.createElement("p");
    const seasonWeekElement = document.createElement("p");
    const celebrationsTitle1Element = document.createElement("p");
    const celebrationsColor1Element = document.createElement("p");
    const celebrationsTitle2Element = document.createElement("p");
    const celebrationsColor2Element = document.createElement("p");
    const weekdayElement = document.createElement("p"); 
    // convert JSON data into objects
    let dateData = await calender.date;
    let seasonData = await calender.season;
    let seasonWeekData = await calender.season_week;
    let celebrationsTitle1Data = await calender.celebrations[0].title;
    let celebrationsColor1Data = await calender.celebrations[0].colour;
    let celebrationsTitle2Data = await calender.celebrations[1].title;
    let celebrationsColor2Data = await calender.celebrations[1].colour;
    let weekdayData = await calender.weekday;
    // give the html elements' text content the JSON objects
    dateElement.textContent = dateData;
    seasonElement.textContent= seasonData;
    seasonWeekElement.textContent = seasonWeekData;
    celebrationsTitle1Element.textContent = celebrationsTitle1Data;
    celebrationsColor1Element.textContent = celebrationsColor1Data;
    celebrationsTitle2Element.textContent = celebrationsTitle2Data;
    celebrationsColor2Element.textContent = celebrationsColor2Data;
    weekdayElement.textContent = weekdayData;


    // make reference to the html containers where the info 
    // will be displayed
    container.innerHTML = " ";
    container.appendChild(dateElement);
    container.appendChild(seasonElement);
    container.appendChild(seasonWeekElement);
    container.appendChild(celebrationsTitle1Element);
    container.appendChild(celebrationsColor1Element);
    container.appendChild(celebrationsTitle2Element);
    container.appendChild(celebrationsColor2Element);
    container.appendChild(weekdayElement);

    
  } catch {
    err => console.error("Oops!", err.message);
  }
}

// To do: grab calender value and pass it into the API url