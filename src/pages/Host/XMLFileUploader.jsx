
import React, { useState } from 'react';

export default function XMLFileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // You can perform file upload logic here, for example, sending the file to a server.
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Here you can use APIs like FormData to send the file to the server
    } else {
      alert('No file selected!')
      console.error('No file selected.');
    }
  };

  return (
    <div>
      <h2>XML File Uploader</h2>
      <input type="file" accept=".xml" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}