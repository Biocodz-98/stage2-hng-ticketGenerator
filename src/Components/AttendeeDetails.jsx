import React, { useState } from "react";
import axios from "axios";

function AttendeeDetails({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialRequest: "",
    uploadedImage: "",
  });

  const [dragging, setDragging] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      await uploadImage(file);
    }
  };

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "cloudinary_ticketgenerator"); 

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dmsh96ix1/image/upload", 
        formData
      );
      setFormData((prev) => ({
        ...prev,
        uploadedImage: response.data.secure_url,
      }));
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const handleSubmit = () => {
    onNext(formData);
  };

  return (
    <div className="container">
      <h2 className="title">Attendee Details</h2>
      
      <div
        className={`drop-zone ${dragging ? "dragging" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        <p>Drag & drop or click to upload</p>
        <input type="file" onChange={handleFileSelect} />
      </div>

      {formData.uploadedImage && (
        <img src={formData.uploadedImage} alt="Uploaded" className="preview-image" />
      )}

      <input name="name" placeholder="Enter your name" onChange={handleChange} />
      <input name="email" placeholder="Enter your email" onChange={handleChange} />
      <textarea name="specialRequest" placeholder="Special request" onChange={handleChange}></textarea>

      <div className="button-container">
        <button onClick={onBack}>Back</button>
        <button className="next-btn" onClick={handleSubmit}>Get My Free Ticket</button>
      </div>
    </div>
  );
}

export default AttendeeDetails;
