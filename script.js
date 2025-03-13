function startCelebration() {
    document.querySelector(".start-container").classList.add("hidden"); // Hide Start Button
    document.getElementById("celebration").classList.remove("hidden"); // Show Celebration Content
    setTimeout(() => {
        document.getElementById("cut-cake-btn").classList.remove("hidden"); // Show Cut Cake Button after 2s
    }, 2000);
}

function cutCake() {
    document.getElementById("cake").src = "cut-cake.png"; // Change to Cut Cake Image
    document.getElementById("cut-cake-btn").classList.add("hidden");
    setTimeout(() => {
        document.getElementById("surprise-btn").classList.remove("hidden"); // Show Surprise Button after 1s
    }, 1000);
}
