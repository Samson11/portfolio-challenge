class Portfolio extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <section class="portfolio section" id="portfolio">
        <h2 class="section__title">Portfolio</h2>
        <span class="section__subtitle">Most recent Work</span>
    
        <div class="portfolio__container container swiper-container">
          <div class="swiper-wrapper">
            <div class="portfolio__content grid swiper-slide">
              <img src="./img/portfolio1.jpg" alt="" class="portfolio__img">
    
              <div class="portfolio__data">
                <h3 class="portfolio__title">Modern Website</h3>
                <p class="portfolio__description">Website adaptable to all devices, with ui components and animated
                  interactions.</p>
                <a href="#" class="button button--flex button--small portfolio__button">
                  Demo
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
    
            <div class="portfolio__content grid swiper-slide">
              <img src="./img/portfolio2.jpg" alt="" class="portfolio__img">
    
              <div class="portfolio__data">
                <h3 class="portfolio__title">Brand Design</h3>
                <p class="portfolio__description">Website adaptable to all devices, with ui components and animated
                  interactions.</p>
                <a href="#" class="button button--flex button--small portfolio__button">
                  Demo
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
    
            <div class="portfolio__content grid swiper-slide">
              <img src="./img/portfolio3.jpg" alt="" class="portfolio__img">
    
              <div class="portfolio__data">
                <h3 class="portfolio__title">Online Store</h3>
                <p class="portfolio__description">Website adaptable to all devices, with ui components and animated
                  interactions.</p>
                <a href="#" class="button button--flex button--small portfolio__button">
                  Demo
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
    
          </div>
    
          <div class="swiper-button-next">
            <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div class="swiper-button-prev">
            <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </section>    
        `;
    }
}

customElements.define('s-portfolio', Portfolio)