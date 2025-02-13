import React from "react";

function TicketConfirmation({ formData, onBack }) {
  return (
    <div className="container">
      <h2 className="title">Your Ticket is Booked!</h2>
      <div className="ticket-card">
        {formData.uploadedImage && <img src={formData.uploadedImage} alt="Uploaded" />}
        <h3>{formData.ticketType} Ticket</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Special Request: {formData.specialRequest}</p>
      </div>
      <div className="button-container">
        <button onClick={onBack}>Book Another Ticket</button>
      </div>
    </div>
  );
}

export default TicketConfirmation;
