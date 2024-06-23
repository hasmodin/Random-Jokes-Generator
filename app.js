let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";


let jokesGen = document.querySelector("button");
let h1 = document.querySelector(".jokes");

jokesGen.addEventListener("click", async () => {
    console.log("button was clicked");
    let jokes = await randomJokes();
    // console.log(jokes.joke);
    h1.innerHTML = jokes.joke;
})

async function randomJokes() {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch(err) {
        console.log("Error--", err);
        h1.innerHTML = err;
    }
}