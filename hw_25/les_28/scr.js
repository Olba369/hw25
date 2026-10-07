const slides = [
  "https://picsum.photos/id/10/2500/1667",
  "https://picsum.photos/id/11/2500/1667",
  "https://picsum.photos/id/12/2500/1667",
  "https://picsum.photos/id/13/2500/1667",
];

class Slider {
  constructor(items) {
    this.slides = items;
    this.currentIndex = 0;
    this.imageBox = document.querySelector("#slide");
    this.dotsBox = document.querySelector("#dots");
    this.prevBtn = document.querySelector("#prev-btn");
    this.nextBtn = document.querySelector("#next-btn");
    
    // Вызываем методы через стрелочную функцию с скобками ()
    this.nextBtn.addEventListener("click", () => this.nextSlide());
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    
    this.createDots();
    this.showSlide(); // Отображаем первое изображение при инициализации
  }

  showSlide() {
    this.imageBox.setAttribute("src", this.slides[this.currentIndex]);
    this.updateDots(); // Было updateSlide()
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex = this.currentIndex + 1;
    }
    this.showSlide();   
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex = this.currentIndex - 1;
    }
    this.showSlide();
  }

  createDots() {
    for (let i = 0; i < this.slides.length; i++) {
      const dot = document.createElement("li");
      dot.classList.add("dot-item");
      
      dot.addEventListener("click", () => {
        this.currentIndex = i;
        this.showSlide(); // Показываем выбранный слайд
      });

      dot.innerHTML = `<span class="dot"></span>`; // Убран лишний пробел в < span>
      this.dotsBox.insertAdjacentElement("beforeend", dot);
    } // Убраны лишние `});`
  }

  updateDots() {
    const dots = this.dotsBox.querySelectorAll(".dot-item");
    if (dots.length < 1) return; // Опечатка lemgth -> length

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    dots[this.currentIndex].classList.add("active");
  }
}

// Создаем экземпляр (класс объявлен с заглавной буквы Slider)
const slider = new Slider(slides);