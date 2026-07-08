import "./index.css";
import { useState, useRef } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

function GetInTouch() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    treatment: "",
    interest: "",
    message: "",
    honeypot: "" // hidden anti-bot field
  });

  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  // Sanitize input to prevent XSS
  const sanitizeInput = (input) => {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML.trim();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: sanitizeInput(value) }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^(?:\+61\d{9}|04\d{8})$/;
    return regex.test(phone);
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      toast.error("Please enter your first name.");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email address.");
      return false;
    }
    if (!validateEmail(formData.email.trim())) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number.");
      return false;
    }
    if (!validatePhone(formData.phone.trim())) {
      toast.error("Please enter a valid phone number (+61XXXXXXXXX or 04XXXXXXXX).");
      return false;
    }
    // Honeypot bot check
    if (formData.honeypot !== "") {
      console.warn("Bot detected. Submission ignored.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      await axios.post("http://localhost:8080/get-in-touch-contact", formData);
      toast.success("Thank you for reaching out! We will get back to you soon.");
      formRef.current.reset();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        treatment: "",
        interest: "",
        message: "",
        honeypot: ""
      });
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="get-in-touch-component">
      <div className="get-in-touch-content">
        <h2>GET IN TOUCH</h2>
        <form ref={formRef} className="floating-form" onSubmit={handleSubmit} noValidate autoComplete="off">
          {/* Honeypot anti-bot field */}
          <input
            type="text"
            name="honeypot"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
            onChange={handleChange}
          />

          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              required
              onChange={handleChange}
              maxLength={40}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              maxLength={40}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            onChange={handleChange}
            maxLength={100}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number* (e.g., +61 XXXXXXXXX or 04XXXXXXXX)"
            required
            onChange={handleChange}
            maxLength={20}
          />

          <div className="treatment-form-component">
            <label htmlFor="treatment">What Treatment Are You Interested In?</label>
            <select name="treatment" onChange={handleChange}>
              <option value="">Please Select</option>
              <option value="Bleeding Gums">Bleeding Gums</option>
              <option value="Broken Tooth">Broken Tooth</option>
              <option value="Dental Implant">Dental Implant</option>
              <option value="Examination / Full Check Up">Examination / Full Check Up</option>
              <option value="Problem With Bridge">Problem With Bridge</option>
              <option value="Problem With Crown / Cap">Problem With Crown / Cap</option>
              <option value="Problem With Filling">Problem With Filling</option>
              <option value="Problem With Wisdom Tooth">Problem With Wisdom Tooth</option>
              <option value="Toothache">Toothache</option>
              <option value="Invisalign Consultation">Invisalign Consultation</option>
              <option value="Oral Hygiene Visit">Oral Hygiene Visit</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="preference-form-component">
            <label htmlFor="interest">I'd Like To</label>
            <select name="interest" onChange={handleChange}>
              <option value="">Please Select</option>
              <option value="Get more information">Get more information</option>
              <option value="Book a consult">Book a consult</option>
              <option value="Apply for a job">Apply for a job</option>
              <option value="I'm an existing patient">I'm an existing patient</option>
              <option value="Something else">Something else</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Let Us Know How We Can Assist You?"
            onChange={handleChange}
            maxLength={500}
          ></textarea>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`submit-button ${isLoading ? "disabled" : ""}`}
            aria-busy={isLoading}
          >
            {isLoading ? "SENDING..." : "GET IN TOUCH"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
