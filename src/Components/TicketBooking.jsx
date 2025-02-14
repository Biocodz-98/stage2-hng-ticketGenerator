import React, { useState } from "react";

const TicketBooking = ({ onNext }) => {
  const [ticketType, setTicketType] = useState("Free");
  const [ticketCount, setTicketCount] = useState(1);

  return (
    <div className="container">
      <h2>Ticket Selection</h2>
      <label>Select Ticket Type:</label>
      <select value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
        <option value="Free">Free - Regular Access</option>
        <option value="VIP">$150 - VIP Access</option>
        <option value="VVIP">$250 - VVIP Access</option>
      </select>

      <label>Number of Tickets:</label>
      <input
        type="number"
        min="1"
        value={ticketCount}
        onChange={(e) => setTicketCount(e.target.value)}
      />

      <button onClick={() => onNext(ticketType, ticketCount)}>Next</button>
    </div>
  );
};

export default TicketBooking;
