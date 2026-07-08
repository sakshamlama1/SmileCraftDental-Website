import './index.css';  // Importing the CSS for the button


function CallUsButton({ isMobileHeader = false }) {
  return (
    <div className="call-us-button-container">
      {isMobileHeader ? (
        <a href="tel:+61480026382" className="header-call-link">
          CALL: 0480026382
        </a>
      ) : (
        <a href="tel:+61480026382" className="normal-call-link">
          CALL: 0480026382
        </a>
      )}
    </div>
  );
}
export default CallUsButton;
