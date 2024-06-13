let currentImage = 1

function switchImage() {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    if (currentImage === 1) {
        image1.style.opacity = 0;
        image2.style.opacity = 1;
        currentImage = 2;
    } else {
        image1.style.opacity = 1;
        image2.style.opacity = 0;
        currentImage = 1;

    }
}

setInterval(switchImage, 3000);