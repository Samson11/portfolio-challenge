class About extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="about section" id="about">
        <h2 class="section__title">About Me</h2>
        <span class="section__subtitle">My introduction</span>
      </section>
      <div class="about__container container grid">
        <img src="img/about.jpg" alt="" class="about__img">
        <div class="about__data">
          <p class="about__description">Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / UX design, delivering quality work.</p>
          <div class="about__info">
            <div>
              <span class="about__info-title">08+</span>
              <span class="about__info-name">Years <br> experience</span>
            </div>
  
            <div>
              <span class="about__info-title">20+</span>
              <span class="about__info-name">Completed <br> project</span>
            </div>
  
            <div>
              <span class="about__info-title">05+</span>
              <span class="about__info-name">Companies <br> worked</span>
            </div>
          </div>
  
          <div class="about__buttons">
            <a download="" href="assets/cv.docx" class="button button--flex">
              Download CV<i class="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
        `;
    }
}

customElements.define('s-about', About)