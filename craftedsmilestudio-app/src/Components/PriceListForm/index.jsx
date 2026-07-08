import "./index.css";
import { useState, useRef } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

// Utility to sanitize input values (basic XSS protection)
const sanitizeInput = (str) => {
  const temp = document.createElement("div");
  temp.textContent = str;
  return temp.innerHTML.trim();
};

function PriceListForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    honeypot: "", // Invisible field to catch bots
  });

  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Sanitize and trim all input
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizeInput(value),
    }));
  };

  const capitaliseFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = (formData) => {
    if (!formData.firstName.trim()) {
      toast.error("Please enter your first name.");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email address.");
      return false;
    }

    if (formData.honeypot !== "") {
      console.warn("Bot detected. Submission ignored.");
      return false;
    }

    if (!validateEmail(formData.email.trim())) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateForm(formData)) {
      setIsLoading(false);
      return;
    }

    try {
      const formattedData = {
        firstName: capitaliseFirstLetter(formData.firstName),
        lastName: capitaliseFirstLetter(formData.lastName),
        email: formData.email.toLowerCase().trim()
      };

      const response = await axios.post("https://craftedsmilestudio.onrender.com/price-list-form", formattedData,
        {
          responseType: "blob"
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Crafted Smiles Studio - Price List.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      
      toast.success("Thank you! The price list is being downloaded and has also been emailed to you.");
      formRef.current.reset();
      setFormData({ firstName: "", lastName: "", email: "", honeypot: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="price-list-form-component">
      <div className="price-list-form-content">
        <form ref={formRef} className="floating-form" onSubmit={handleSubmit} autoComplete="off" noValidate>
          {/* Honeypot Field (Hidden from users) */}
          <input type="text" name="honeypot" style={{ display: "none" }} onChange={handleChange} />

          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              required
              minLength="2"
              maxLength="50"
              onChange={handleChange}
              aria-label="First Name"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              maxLength="50"
              onChange={handleChange}
              aria-label="Last Name"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            maxLength="100"
            onChange={handleChange}
            aria-label="Email Address"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`price-list-submit-button ${isLoading ? "disabled" : ""}`}
            aria-busy={isLoading}
          >
            {isLoading ? "PREPARING YOUR DOWNLOAD..." : "SEND & DOWNLOAD MY PRICE LIST"}
          </button>
        </form>
      </div>
    </div>
  );  
}

export default PriceListForm;
