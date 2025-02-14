import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dmsh96ix1/upload";
const CLOUDINARY_UPLOAD_PRESET = "HngCloudinary";

const AttendeeDetails = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatar: "",
  });
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: async (acceptedFiles) => {
      setIsUploading(true);
      const file = acceptedFiles[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "HngCloudinary");

      try {
        const response = await axios.post(CLOUDINARY_URL, formData);
        setFormData((prev) => ({ ...prev, avatar: response.data.secure_url }));
      } catch (error) {
        setError("Image upload failed!");
      } finally {
        setIsUploading(false);
      }
    },
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.avatar) {
      setError("All fields are required!");
      return;
    }
    onNext(formData);
  };

  return (
    <div className="container">
      <h2>Attendee Details</h2>
      {error && <p className="error">{error}</p>}

      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {isUploading ? <p>Uploading...</p> : <p>Drag & drop or click to upload</p>}
      </div>

      <button onClick={handleSubmit}>Get My Free Ticket</button>
    </div>
  );
};

export default AttendeeDetails;
