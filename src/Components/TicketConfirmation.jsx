import React from "react";

const TicketConfirmation = ({ ticket }) => {
  return (
    <div className="container">
      <h2>Your Ticket is Booked!</h2>
      <div className="ticket">
        <img src={ticket.avatar} alt="Avatar" />
        <h3>{ticket.name}</h3>
        <p>{ticket.email}</p>
      </div>
      <button onClick={() => window.print()}>Download Ticket</button>
    </div>
  );
};

export default TicketConfirmation;
