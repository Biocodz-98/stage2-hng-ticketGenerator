import React, { useState } from "react";
import TicketSelection from "./Components/TicketSelection";
import AttendeeDetails from "./Components/AttendeeDetails";
import TicketConfirmation from "./Components/TicketConfirmation";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ticketType: "",
    name: "",
    email: "",
    specialRequest: "",
    uploadedImage: "",
  });

  // Go to Next Step
  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  // Go to Previous Step
  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="app-container">
      {step === 1 && <TicketSelection onNext={handleNext} />}
      {step === 2 && <AttendeeDetails onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <TicketConfirmation formData={formData} onBack={handleBack} />}
    </div>
  );
}

export default App;
