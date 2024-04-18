/*
File: updateSessionToken.tsx
Description: This function is needed to update the user auth token!
*/

"use client";

import { useSession } from "next-auth/react";

const useSessionUpdater = () => {
  const { update } = useSession();

  const updateSession = () => {
    update();
  };

  return updateSession;
};

export default useSessionUpdater;

// Example
// import useSessionUpdater from "./useSessionUpdater";
// function MyComponent() {
//   const updateSession = useSessionUpdater();
//   // You can call updateSession whenever you want to update the session
//   const handleUpdateSession = () => {
//     updateSession();
//   };
//   return (
//     <button onClick={handleUpdateSession}>Update Session</button>
//   );
// }
