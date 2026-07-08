import "./index.css";

function WhyChooseUs() {
  const features = [
    {
      title: "Experienced & Patient-Focused Dental Team",
      content:
        "Our skilled dentists provide trusted, gentle care backed by experience, ensuring every treatment is delivered with precision, compassion, and your long-term oral health in mind.",
    },
    {
      title: "Advanced Digital & Modern Dental Technology",
      content:
        "We use modern digital dentistry to improve accuracy, comfort, and predictability — supporting treatments such as Digital Smile Design, Invisalign, and same-day crowns.",
    },
    {
      title: "Personalised Treatment Planning & Clear Communication",
      content:
        "Every smile is unique. We take the time to understand your goals, explain your options clearly, and tailor treatments to suit your needs and expectations.",
    },
    {
      title: "Quick & Easy Health Fund Claims and Flexible Payment Options",
      content:
        "We offer on-the-spot health fund claims and flexible payment solutions, making quality dental care more accessible and stress-free.",
    },
  ];

  return (
    <div className="why-choose-us-container">
      <div className="why-choose-us-content">
        <div className="why-choose-us-text-container">
          <h2>WHY CHOOSE US?</h2>
          <p>WHY CHOOSE SMILE CRAFT DENTAL FOR ALL YOUR DENTAL NEEDS</p>
        </div>

        <div className="why-choose-us-features">
          {features.map((feature, idx) => (
            <div className="feature-box" key={idx}>
              <h3>{feature.title}</h3>
              <p>{feature.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
