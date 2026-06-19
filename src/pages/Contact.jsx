import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("✅ Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSuccess(""), 3000);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        background: "#f3f4f6",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          📩 Contact Us
        </h2>

        {success && (
          <p style={{ color: "green", textAlign: "center" }}>
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          {/* NAME */}
          <div style={{ marginBottom: "12px" }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                border: errors.name ? "1px solid red" : "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
            <small style={{ color: "red" }}>{errors.name}</small>
          </div>

          {/* EMAIL */}
          <div style={{ marginBottom: "12px" }}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                border: errors.email ? "1px solid red" : "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
            <small style={{ color: "red" }}>{errors.email}</small>
          </div>

          {/* MESSAGE */}
          <div style={{ marginBottom: "12px" }}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              style={{
                width: "100%",
                padding: "10px",
                border: errors.message ? "1px solid red" : "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
            <small style={{ color: "red" }}>{errors.message}</small>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;