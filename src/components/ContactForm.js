import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/10cf45d0-c415-11ed-aae2-49fd856067b7";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div className="submittedDiv">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={FORM_ENDPOINT}
      method="POST"
      target="_blank"
    >
      <input
        type="text"
        placeholder="What is your name?"
        name="name"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="What is your email?"
        required
      />
      <label>
        Write You Message here
        <textarea name="message" required></textarea>
      </label>
      <button type="submit" className="blueButton">
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
