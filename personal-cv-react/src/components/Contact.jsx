import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Form submitted successfully!");
    alert("Thank you! Your message has been received.");

  
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="card">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Message"
          value={message}                  
          onChange={(e) => setMessage(e.target.value)} 
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;