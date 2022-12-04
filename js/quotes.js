//https://en.wikipedia.org/wiki/AFI%27s_100_Years...100_Movie_Quotes

const quotes = [
    {
      quote: "Frankly, my dear, I don't give a damn.", 
      character: "Rhett Butler - Gone with the Wind(1939)",
    },

    {
      quote: "I'm gonna make him an offer he can't refuse.",
      character: "Vito Corleone - The Godfather(1972)",
    },

    {
      quote: "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
      character: "Terry malloy - On the Waterfront(1954)",
    },

    {
      quote:"Toto, I've a feeling we're not in Kansas anymore.",
      character:"Dorothy Gale - The Wizard of Oz(1939)",
    },

    {
      quote: "Here's looking at you, kid.",
      character: "Rick Blaine - Casablanca(1942)",
    },
    
    {
      quote:"Go ahead, make my day.",
      character:"Harry Callahan - Sudden Impact(1983)",
    },
    {
      quote:"All right, Mr. DeMille, I'm ready for my close-up.",
      character: "Norma Desmond - Sunset Boulevard(1950)",
    },

    {
      quote:"May the Force be with you.",
      character :"Han Solo - Star Wars(1977)",
    },

    {
      quote:"Fasten your seatbelts. It's going to be a bumpy night.",
      character: "Margo Channing - All About Eve(1950)"
    },

    {
      quote: "You talkin' to me?",
      character: "Travis Bickle - Taxi Driver(1976)"
    },

    {
      quote:"What we've got here is failure to communicate.",
      character: "Captain - Cool Hand Luke(1967)"
    },
    {
      quote:"I love the smell of napalm in the morning.",
      character : "Lt.Col.Bill Kilgore - Apocalypse Now(1979)"
    },
    {
      quote:"Love means never having to say you're sorry.",
      character : "Jennifer Cavalleri,Oliver Barrett IV - Love Story(1970)"
    },
    {
      quote:"The stuff that dreams are made of.",
      character: "Sam Spade - The Maltese Falcon(1941)"
    },
    {
      quote:"E.T. phone home.",
      character: "E.T - E.T the Extra-Terrestrial(1982)"
    },
    {
      quote:"They call me Mister Tibbs!",
      character: "Virgil Tibbs - In the Heat of the Night(1967)"
    },
    

   
  ];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote= quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `>> ${todaysQuote.character}`;