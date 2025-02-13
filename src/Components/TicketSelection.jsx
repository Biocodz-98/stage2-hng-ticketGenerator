import React, { useState } from "react";

function TicketSelection({ onNext }) {
  const [selectedTicket, setSelectedTicket] = useState("");

  const handleNext = () => {
    if (selectedTicket) {
      onNext({ ticketType: selectedTicket });
    } else {
      alert("Please select a ticket type");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Ticket Selection</h2>
      <div className="ticket-options">
        <button onClick={() => setSelectedTicket("Regular")}>Regular</button>
        <button onClick={() => setSelectedTicket("VIP")}>VIP</button>
        <button onClick={() => setSelectedTicket("VVIP")}>VVIP</button>
      </div>
      <div className="button-container">
        <button className="next-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default TicketSelection;
