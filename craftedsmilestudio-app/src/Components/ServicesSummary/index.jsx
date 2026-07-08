import "./index.css";
import features from "../../utils/servicesSummaryData";

function ServicesSummary() {
  

  return (
    <div className="services-summary-container">
      <div className="services-summary-content">
        <div className="services-summary-text-container">
          <h2>OUR SERVICES</h2>
          <p>DISCOVER THE DIFFERENCE OUR TEAM CAN MAKE FOR YOUR WITH OUR DENTAL SERVICES</p>
        </div>
        <div className="services-summary-features">
            {features.map((feature, idx) => (
                <div className="services-summary-box" key={idx}>
                    <img src={feature.image} alt={feature.title} />
                    <h3>{feature.title}</h3>
                    <p className="services-summary-description">{feature.content}</p>
                    <div className="services-summary-learn-more">
                      <a href={feature.path}>LEARN MORE →</a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSummary;
