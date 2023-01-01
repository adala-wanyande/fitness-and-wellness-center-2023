document.addEventListener('DOMContentLoaded', function() {
    quoteText = document.getElementById("quote-text");
    quoteAuthor = document.getElementById("quote-author");
    quoteCategory = document.getElementById("quote-category")
    getGeneralQuoteOfTheDay();
    //getFitnessQuoteOfTheDay();
})

const getGeneralQuoteOfTheDay = () => {
    return fetch("https://type.fit/api/quotes")
    .then((resp) => resp.json())
    .then((quotes) => {
        // console.log(quotes)
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
        document.getElementById("quote-container").remove();
        document.getElementById("loaded-quote").style.display = "block"; 
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

