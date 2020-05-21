export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.sladeindex = 1;
    }
    showSlides(n) {
        if (n > this.slides.length) {
            this.slideindex = 1;
        }
        if (n < 1) {
            this.slideindex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.style.display - 'none';
        });

        this.slides[this.slideindex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideindex += n);
    }


    render() {
        console.log(this.page, this.slides)
    }
}