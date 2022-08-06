(function () {
    const slides = [
        `<img src="img/carrousel/перші психологічні посиденьки.2003-2004 рр..jpg" class="d-block w-100" alt="...">`,
        `<img src="img/carrousel/IMG-a53d7d0477fe80188145d1de5aa51341-V.jpg" class="d-block w-100" alt="...">`,
        `<img src="img/carrousel/IMG-dccd74095fb80b4daa035a268950d646-V.jpg" class="d-block w-100" alt="...">`,
        `<img src="img/carrousel/IMG-ec1b8412fbc47bb92660f1a4fa1c0345-V.jpg" class="d-block w-100" alt="...">`,
        `<img src="img/carrousel/вручення диплому навчаючого психотерапевта.jpg" class="d-block w-100" alt="...">`,
        `<img src="img/carrousel/16.jpg" class="d-block w-100" alt="...">`,
        `<img src="img/carrousel/IMG-030b4141ba1524d0d94e9513f1f53125-V.jpg" class="d-block w-100" alt="...">`,
        `<img src="img/events/17.jpg" class="d-block w-100" alt="...">`,
        `<img src="img/events/20190915_150409.jpg" class="d-block w-100" alt="...">`,
        `<img src="img/events/image-0-02-04-df5e5e10c6d0c57ad2e51986bba92b230710a1f9c12272e4440d9e288cd6f247-V.jpg" class="d-block w-100" alt="...">`,
        `<img src="img/events/image-0-02-04-4d6993c4262619b01df17d221bafc81b2861757b0bee8b4d91b60d5d615ceb72-V.jpg" class="d-block w-100" alt="...">`,
        `<img src="img/events/IMG_20200802_193736.jpg" class="d-block w-100" alt="...">`,
        `<img src="img/carrousel/IMG_20200801_154134.jpg" class="d-block w-100" alt="...">`,
    ]

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector(`.carousel .slide`);
        slideContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length -1;
        showCurrentSlide();
    }

    setInterval(nextSlide, 1000);

    document.querySelector(`.carousel .carousel-next`).addEventListener(`click`, nextSlide);
    document.querySelector(`.carousel .carousel-prev`).addEventListener(`click`, prevSlide);

    showCurrentSlide();

})();