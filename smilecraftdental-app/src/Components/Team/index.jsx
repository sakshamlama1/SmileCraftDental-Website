import teamMembers from "../../utils/teamMembers";
import "./index.css";

function Team() {
  const { dentists } = teamMembers;

  return (
    <div className="team-container">
      <div className="team-content">
        {/* Dentists Section */}
        <div className="team-text-container">
          <h2>MEET OUR DENTISTS</h2>
          <p>EXPERIENCED, CARING, AND COMMITTED TO PROVIDING EXCEPTIONAL DENTAL CARE EVERY STEP OF THE WAY</p>
        </div>
        <div className="team-features dentists-section">
          {dentists.map((member, index) => (
            <div className="team-member-box" key={index}>
              <div className="team-member">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  {member.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Staff Section */}
        {/* <div className="team-text-container" style={{ marginTop: "4rem" }}>
          <h2>MEET OUR SUPPORT STAFF</h2>
          <p>OUR FRIENDLY SUPPORT STAFF HELP MAKE EVERY VISIT SMOOTH AND COMFORTABLE</p>
        </div>
        <div className="team-features staff-section">
          {supportStaff.map((member, index) => (
            <div className="team-member-box staff-box" key={index}>
              <div className="team-member staff-member">
                <div className="team-image-wrapper staff-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info staff-info">
                  <h3>{member.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Team;
