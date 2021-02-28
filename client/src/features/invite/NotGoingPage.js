import React, { useEffect } from "react";
import axios from "axios";

export default function NotGoingPage() {
  useEffect(() => {
    axios.get("/not-going").then((resp) => {
      console.log(resp.data);
    });
  }, []);

  function notGoing() {
    axios.post("/mark-invite", { id: 1, name: "a" });
  }
  return (
    <div>
      <button onClick={() => notGoing()}></button>
    </div>
  );
}
