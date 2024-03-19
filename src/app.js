const quoteParagraph = document.getElementById("quote");
const authorParagraph = document.getElementById("author");

const generateQuote = () => {
    let random = Math.floor(Math.random() * quotes.length);

    quoteParagraph.innerText = quotes[random].quote;
    authorParagraph.innerText = quotes[random].author;
} 

const quotes = [
    {
        quote: "Believe you can and you are halfway there",
        author: "David",
    },
    {
        quote: "Our lives begin to end the moment we become silent about things that matter",
        author: "Elvis",
    },
    {
        quote: "Passion is energy. Feel the power that comes from focusing on what excites you",
        author: "Derrick",
    },
    {
        quote: "Nyumba yangu haina mlango",
        author: "Yusuf",
    },
    {
        quote: "You only live once",
        author: "Violet",
    },
    {
        quote: "Love always wins",
        author: "Rose",
    },
]