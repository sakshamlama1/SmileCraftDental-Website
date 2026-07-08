import "./index.css";

function Hero({ title, subheading, media, isLandingPage = false }) {
  return (
    <section className={`hero ${isLandingPage ? "hero-landing" : "hero-subpage"}`}>
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="clinic-name">{title}</h1>
          <p className="tagline">{subheading}</p>
          <div className="cta-buttons">
            <a
              href="https://booking.au.hsone.app/soe/new/%20?pid=AUETL01"
              className="btn-primary"
            >
              BOOK AN APPOINTMENT
            </a>
            <a href="tel:+61480026382" className="btn-secondary">
              CALL: 0480026382
            </a>
          </div>
        </div>

        {media && (
          <div className="hero-right">
            <img src={media} alt="Happy dental patient" className="hero-img" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
