document.addEventListener('DOMContentLoaded', function() {
    quoteText = document.getElementById("quote-text");
    quoteAuthor = document.getElementById("quote-author");
    quoteCategory = document.getElementById("quote-category")
    getGeneralQuoteOfTheDay();
    // getFitnessQuoteOfTheDay();
})

const getGeneralQuoteOfTheDay = () => {
    return fetch("https://type.fit/api/quotes")
    .then((resp) => resp.json())
    .then((quotes) => {
        console.log(quotes)
        document.getElementById("quote-container").remove();
        document.getElementById("loaded-quote").style.display = "block";
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = quote.author;
        quoteCategory.textContent = 'General';
    })
}

const getFitnessQuoteOfTheDay = () => {
    return fetch("https://api.api-ninjas.com/v1/quotes?category=fitness", {
        method: 'GET',
        headers: {
            'X-Api-Key': 'c7Yrix0LyEQkLPN5bZxSpQ==GXsNsdfwhFNUQMcq',
            'Content-Type': "application/json", 
            Accept: "application/json" ,
        },
    })
    .then((resp) => resp.json())
    .then((quote) => {
        console.log(quote)
        // document.getElementById("quote-container").remove();
        // document.getElementById("loaded-quote").style.display = "block"; 
        quoteText.textContent = quote[0].quote;
        quoteAuthor.textContent = quote[0].author;
        quoteCategory.textContent = quote[0].category;
    });
}

const randomizeQuoteOfTheDay = () => {
    return fetch("https://type.fit/api/quotes")
    .then((resp) => resp.json())
    .then((quotes) => {
        // console.log(quotes)
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = quote.author;
        quoteCategory.textContent = 'General';
    })
}

const addFootballSessionClicked = () => {
    document.getElementById("addFootballSession").focus();
    document.getElementById("homeContent").style.display = 'none';
    document.getElementById("addFootballSessionTabContent").style.display = 'block';
}

const addWorkoutSessionClicked = () => {
    document.getElementById("addWorkoutSession").focus();
    document.getElementById("homeContent").style.display = 'none';
    // const nodeList = document.querySelectorAll(".secondary-tab");
    // for (let i = 0; i < nodeList.length; i++) {
        // nodeList[i].style.display = "none";
    // }
    document.getElementById("addWorkoutSessionTabContent").style.display = 'block';
}

const loadHomeContent = () => {
    document.getElementById("homeButton").focus();
    const nodeList = document.querySelectorAll(".secondary-tab");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.display = "none";
    }
    document.getElementById("homepage").style.display = "block";
}

// import Datepicker from 'flowbite-datepicker/Datepicker';
// const datepickerEl = document.getElementById('datepickerId');
// new Datepicker(datepickerEl, {
//     // options
// }); 

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
    document.getElementById("homepage").style.display = "none";
  }