const images = [
    "wallpaper.png",
    "wallpaper2.png",
    "wallpaper3.jpg",
    "wallpaper4.jpg",
    "wallpaper5.jpg",
    "wallpaper6.jpg",
    "wallpaper7.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bg = document.createElement("img");
bg.src = `img/${chosenImage}`;

document.body.appendChild(bg);

