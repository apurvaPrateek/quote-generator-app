var newTweet = document.querySelector("#new-quote");
var quote = document.querySelector(".quote");
var author = document.querySelector(".author");
var tweet = document.querySelector("#tweet");

tweet.addEventListener("click",()=>{
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}  ${author.textContent}`,"Tweet Window","width=600px, height=600px");
})

const YOUR_API_KEY = "cPFiBGYNoDc99qReEeTqOA==j2sYyJuHsLF2D6SS";

const categories = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communication",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];

function newQuote() {
  // console.log(categories);

  var category = categories[Math.floor(Math.random() * categories.length)];
  fetch("https://api.api-ninjas.com/v1/quotes?category=" + category, {
    method: "GET",
    headers: {
      "X-Api-Key": YOUR_API_KEY,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      quote.innerHTML = data[0].quote;
      author.innerHTML = `<span>-</span> ${data[0].author}`;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

newQuote();
newTweet.addEventListener("click", newQuote);

document.querySelector("button").addEventListener("click", (event) => {
  event.target.classList.add("black-border");
  setTimeout(() => {
    event.target.classList.remove("black-border");
  }, 500);
});
