import React, { useEffect } from "react";
import axios from "axios";

export default function GoingPage() {
  useEffect(() => {
    axios.get("/going").then((resp) => {
      console.log(resp.data);
    });
  }, []);

  function Going() {
    axios.post("/mark-invite", { id: 1, name: "a" });
  }
  return (
    <div>
      <button onClick={() => Going()}></button>
    </div>
  );
}
