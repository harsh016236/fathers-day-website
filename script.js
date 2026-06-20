const wishes = [
    "Happy Father's Day! Thank you for your endless love, guidance, and support.",
    "Dad, your strength and kindness inspire me every day. Happy Father's Day!",
    "A father is someone who turns ordinary moments into lifelong memories.",
    "Thank you for always believing in me, even when I doubted myself. Happy Father's Day!",
    "Your wisdom, patience, and love have shaped who I am today.",
    "To the world's greatest dad: your love is the foundation of our family."
];

const jokes = [
    "Why don't eggs tell jokes? They'd crack each other up!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why can't you trust stairs? They're always up to something!"
];

const wishBtn = document.getElementById("wishBtn");
const jokeBtn = document.getElementById("jokeBtn");

if (wishBtn) {
    wishBtn.addEventListener("click", () => {
        const randomWish =
            wishes[Math.floor(Math.random() * wishes.length)];

        document.getElementById("wishText").textContent = randomWish;
    });
}

if (jokeBtn) {
    jokeBtn.addEventListener("click", () => {
        const randomJoke =
            jokes[Math.floor(Math.random() * jokes.length)];

        document.getElementById("jokeText").textContent = randomJoke;
    });
}