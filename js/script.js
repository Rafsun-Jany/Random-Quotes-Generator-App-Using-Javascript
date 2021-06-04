//Array of object to store Quotation data
//It consists tags such as History, Knowledge then 0,1,2 denotes the serial number and inside those objects we have quote,author,year.

const quoteObj = [
  {
    History: {
      0: {
        quote:
          "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
        year: 2000,
      },
      1: {
        quote:
          "It does not matter how slowly you go so long as you do not stop.",
        author: "Confucius",
        year: 1690,
      },
      2: {
        quote:
          "People have an annoying habit of remembering things they shouldn't.",
        author: "Christopher Paolini, Eragon",
        year: 2005,
      },
      3: {
        quote: "When a man learns to love, he must bear the risk of hatred.",
        author: "Uchiha Madara",
        year: 2010,
      },
      4: {
        quote:
          "If history were taught in the form of stories, it would never be forgotten.",
        author: "Rudyard Kipling",
        year: 1981,
      },
    },
  },
  {
    Knowledge: {
      0: {
        quote:
          "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "Eleanor Roosevelt",
        year: 1940,
      },
      1: {
        quote:
          "In the long run, the sharpest weapon of all is a kind and gentle spirit.",
        author: "Anne Frank",
        year: 2002,
      },
      2: {
        quote: "I have no special talent. I am only passionately curious.",
        author: "Albert Einstein",
        year: 1950,
      },
      3: {
        quote:
          "When we strive to become better than we are, everything around us becomes better too.",
        author: "Paolo Coelho",
        year: 1970,
      },
      4: {
        quote:
          "Try not to become a man of success but rather to become a man of value.",
        author: "Albert Einstein",
        year: 1951,
      },
    },
  },
  {
    Study: {
      0: {
        quote:
          "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin",
        year: 1980,
      },
      1: {
        quote:
          "If I have seen further than others, it is by standing upon the shoulders of giants.",
        author: "Isaac Newton",
        year: 1620,
      },
      2: {
        quote:
          "It does not matter where you go and what you study, what matters most is what you share with yourself and the world.",
        author: "Santosh Kalwar",

        year: 1940,
      },
      3: {
        quote:
          "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.",
        author: "John Maxwell",
        year: 1790,
      },
      4: {
        quote:
          "I have failed again and again throughout my life. That’s why I’ve been successful",
        author: "Michael Jordan",
        year: 2002,
      },
    },
  },
  {
    Motivation: {
      0: {
        quote:
          "Life is like a box of chocolates. You never know what you’re going to get.",
        author: "Forrest Gump",
        year: 2006,
      },
      1: {
        quote:
          "Remember that the happiest people are not those getting more, but those giving more.",
        author: "H. Jackson Brown, Jr.",
        year: 2001,
      },
      2: {
        quote:
          "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
        author: "Steve Jobs",
        year: 2005,
      },
      3: {
        quote:
          "Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?",
        author: "Brian Tracy",
        year: 2015,
      },
      4: {
        quote:
          "The Man Who Has Confidence In Himself Gains The Confidence Of Others.",
        author: "Hasidic Proverb",
        year: 1920,
      },
    },
  },
];

// button select
const generateButton = document.querySelector("#btn-generate");
// select div where we want to place our quotation
const mainDiv = document.querySelector(".quote-div");

//random quotation generator function
function generateQuote(event) {
  //to select tags div
  const selectTag = document.querySelector("#tags");
  //to generate random color
  let randColor = Math.floor(Math.random() * 16777215).toString(16);
  //looping through the array of objects
  quoteObj.forEach((element) => {
    if (selectTag.value == Object.keys(element)) {
      const elementKey = Object.keys(element[Object.keys(element)]); //to find keys
      const eachElement = elementKey.length; //length of each individual object
      const randNumber = randomQuote(eachElement); //to generate random number
      const quoteName = document.querySelector("#place-quote");
      const authorName = document.querySelector("#place-name");
      const elementQuote = element[Object.keys(element)][randNumber].quote; //selecting quote inside objects
      const elementAuthor = element[Object.keys(element)][randNumber].author; //selecting author name
      const elementYear = element[Object.keys(element)][randNumber].year; // selection year
      quoteName.textContent = `\"${elementQuote}\"`;
      quoteName.style.color = "#" + randColor; // to style quotes with random color
      authorName.textContent = `-${elementAuthor} (${elementYear}). ${Object.keys(
        element
      )}`;
    }
  });
}

// to generate random number depending on the length of objects
function randomQuote(len) {
  const rand = parseInt(Math.random() * len);
  return rand;
}

// give button a behavoir
generateButton.addEventListener("click", generateQuote);
setInterval(generateQuote, 8000); // quotes will refresh after every 8 seconds
