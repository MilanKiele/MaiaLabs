"use client";

import React, { useState } from "react";

export default function HelloForm() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Failed to fetch");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6 m-4">
      <div className="bg-white m-8 p-8">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Say Hello Form
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center"
        >
          <input
            className="border border-gray-300 rounded-l px-4 py-2 w-72 text-black focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-r"
          >
            Say Hello
          </button>
        </form>
        {response && (
          <div className="mt-4 bg-gray-100 rounded px-4 py-2 text-center">
            {response}
          </div>
        )}
      </div>
    </div>
  );
}
