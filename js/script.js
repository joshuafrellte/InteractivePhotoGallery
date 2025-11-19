function upDate(previewPic) {
    displayBox = document.getElementById('display_box');
    displayBox.innerHTML = previewPic.alt;
    displayBox.style.backgroundImage = "url('"+previewPic.src+"')";
    displayBox.style.backgroundSize = "cover";
    displayBox.style.borderColor = "white";
    displayBox.style.boxShadow = "0 0 20px white";
    displayBox.style.animation = "none";
    displayBox.style.transition = "0.15s ease";
    displayBox.style.transform = "scale(1.1)";
}

function unDo() {
    displayBox = document.getElementById('display_box');
    displayBox.innerHTML = "Hover over an image below to display here";
    displayBox.style.backgroundImage = "linear-gradient(to bottom right, black, white)";
    displayBox.style.borderColor = "black";
    displayBox.style.boxShadow = "0 0 20px black";
    displayBox.style.animation = "2s breathe ease-out alternate infinite";
    displayBox.style.transform = "scale(1.0)";
}

function assignTabIndex() {
    images = document.querySelectorAll('img');
    for (let i=0; i<images.length; i++) {
        images[i].setAttribute('tabindex',i);
        console.log(images[i].alt+" tab index is set");
    }
}

assignTabIndex()