import React, { useState } from "react";
import TicketBooking from "./Components/TicketBooking";
import AttendeeDetails from "./Components/AttendeeDetails";
import TicketConfirmation from "./Components/TicketConfirmation";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [ticketData, setTicketData] = useState(null);

  const handleBookingNext = (ticketType, ticketCount) => {
    setTicketData({ ticketType, ticketCount });
    setStep(2);
  };

  const handleAttendeeNext = (attendeeData) => {
    setTicketData((prev) => ({ ...prev, ...attendeeData }));
    setStep(3);
  };

  return (
    <div className="app">
      {step === 1 && <TicketBooking onNext={handleBookingNext} />}
      {step === 2 && <AttendeeDetails onNext={handleAttendeeNext} />}
      {step === 3 && <TicketConfirmation ticket={ticketData} />}
    </div>
  );
}

export default App;
