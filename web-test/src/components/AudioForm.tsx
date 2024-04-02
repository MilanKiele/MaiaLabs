"use client";

import React, { useState, ChangeEvent } from "react";

interface AudioFormProps {}

const AudioForm: React.FC<AudioFormProps> = () => {
  const [inputKey, setInputKey] = useState(Date.now());
  const [file, setFile] = useState<File | null>(null);
  const [receivedFile, setReceivedFile] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (): Promise<void> => {
    if (!file) {
      setError("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/translate", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const data = await response.blob();
      setReceivedFile(URL.createObjectURL(data));
      setError(null);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to upload file");
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      handleFileChanger(event.target.files[0]);
    }
    // Resetting the input to allow uploading the same file again
    setInputKey(Date.now());
  };

  const handleFileChanger = (file: File): void => {
    setFile(file);
    setError(null); // Clearing error message when a new file is selected
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6 m-4">
      <h1 className="text-3xl font-bold mb-4">Upload MP3 and Display</h1>
      <input
        key={inputKey}
        type="file"
        accept=".mp3"
        onChange={handleFileChange}
        className="hidden"
        id="audio-upload"
      />
      <label
        htmlFor="audio-upload"
        className="block cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg text-center mb-4 transition duration-300 hover:bg-blue-600"
      >
        Upload MP3
      </label>
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2 transition duration-300 hover:bg-blue-600"
      >
        Upload
      </button>
      {error && <div className="text-red-500 mt-2">Error: {error}</div>}
      {!file && !receivedFile && (
        <div className="text-gray-500 mt-2">No file selected</div>
      )}
      {receivedFile && (
        <div>
          <h2 className="text-xl font-bold mt-4">Received MP3</h2>
          <audio controls className="my-2">
            <source src={receivedFile} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default AudioForm;
