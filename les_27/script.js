

const slides = [
  "https://picsum.photos/id/10/2500/1667",
  "https://picsum.photos/id/11/2500/1667",
  "https://picsum.photos/id/12/2500/1667",
  "https://picsum.photos/id/13/2500/1667",
];

const image = document.querySelector("#slide");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const currentValue = document.querySelector("#value");
const dots = document.querySelector("#dots");

let currentSlideIndex = 0;

image.setAttribute("src", slides[currentSlideIndex]);
currentValue.textContent = currentSlideIndex;

const handlePrevBtnClick = () => {
  if(currentSlideIndex > 0) {
  currentSlideIndex = currentSlideIndex - 1;
 currentValue.textContent = currentSlideIndex;
image.setAttribute("src", slides[currentSlideIndex]);
}};

prevBtn.addEventListener("click", handlePrevBtnClick);

const handleNextBtnClick = () => {
  if(currentSlideIndex < slides.length - 1) {
     currentSlideIndex = currentSlideIndex + 1;
 currentValue.textContent = currentSlideIndex;
 image.setAttribute("src", slides[currentSlideIndex]);
  };
 
};

nextBtn.addEventListener("click", handleNextBtnClick);
for(let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  dot.insertAdjacentHTML ('beforeend', `<li><span class="dot"></span></li>`);
}