const images = Array.from(document.querySelectorAll(".image"));
const overlayImages = Array.from(document.querySelectorAll(".overlay-image"));
const overlayImageContainer = document.querySelector(
  "#overlay-image-container"
);
const overlay = document.querySelector("#overlay");
const displayImage = document.querySelector("#display-image");
const closeBtn = document.querySelector("#close-btn");

let count = 0;

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    open(e);
  });
});

closeBtn.addEventListener("click", () => {
  close();
});

overlayImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    changeImage(e);
  });
});

prev.addEventListener("click", () => {
  previousImage();
});

next.addEventListener("click", () => {
  nextImage();
});

overlay.addEventListener("click", (e) => {
  if (e.target === prev || e.target === next) {
    return;
  } else {
    overlay.style.display = "none";
  }
});

// ============
// Functions

function open(e) {
  overlay.style.display = "flex";
  displayImage.src = e.target.src;
  count = images.indexOf(e.currentTarget);

  document.body.style.overflow = "hidden";
}

function close() {
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
}

function changeImage(e) {
  displayImage.src = e.target.src;
}

function previousImage() {
  if (count === 0) {
    count = images.length - 1;
  } else {
    count--;
  }

  displayImage.src = images[count].src;
}

function nextImage() {
  if (count === images.length - 1) {
    count = 0;
  } else {
    count++;
  }

  displayImage.src = images[count].src;
}
