import React from "react";
import HelloForm from "@/components/HelloForm";
import AudioForm from "@/components/AudioForm";

export default function UploadPage() {
  return (
    <div className="container w-full mx-auto p-4">
      <HelloForm />
      <AudioForm />
    </div>
  );
}
