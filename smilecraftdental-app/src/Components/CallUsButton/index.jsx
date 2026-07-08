import './index.css';  // Importing the CSS for the button


function CallUsButton({ isMobileHeader = false }) {
  return (
    <div className="call-us-button-container">
      {isMobileHeader ? (
        <a href="tel:+61265558989" className="header-call-link">
          CALL: (02) 6555 8989
        </a>
      ) : (
        <a href="tel:+61265558989" className="normal-call-link">
          CALL: (02) 6555 8989
        </a>
      )}
    </div>
  );
}
export default CallUsButton;
