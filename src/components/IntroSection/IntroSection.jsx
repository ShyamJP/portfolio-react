import './IntroSection.css';

export const IntroSection = () => {
  const knowMore = (e, target) => {
    const element = document.getElementById(target);
    if (target) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="main-intro">
      <video className="background-video" src="test.mp4" autoPlay muted loop />
      <div className="main-info">
        <h1 className="main-heading">Hello, I'm Parthiv...!</h1>
        <p className="main-desc">
          A Full Stack Web Developer & Open Source Contributor. Currently
          working with MERN stack, Prisma and Docker.
        </p>
        <div className="btn-container">
          <a href="./resume.docx" className="btn active" download>
            Download Resume
          </a>
          <a
            href="#"
            className="btn outline"
            onClick={(e) => {
              knowMore(e, 'projects');
            }}
          >
            Know More &darr;
          </a>
        </div>
      </div>
    </section>
  );
};
