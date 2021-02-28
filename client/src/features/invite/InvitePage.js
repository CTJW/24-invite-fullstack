import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { dispatch } from "./imviteSlice";
import { useSeletor, useDispatch } from "react-redux";

export default function InvitePage() {
  const [invites, setInvites] = useState([]);
  const dispatch = useDispatch();
  // refactor to use slice
  useEffect(() => {
    axios.get("/results").then((resp) => {
      setInvites(resp.data);
      // console.log(resp.data);
    });
  }, []);
  console.log(invites);

  return (
    <div>
      <div className="cardLinks">
        <Link className="goingLink" to={"/going"}>
          <span>Going </span>
        </Link>
      </div>
      <div className="cardLinks">
        <Link className="notGoingLink" to={"/not-going"}>
          {" "}
          <span>Not Going </span>
        </Link>
      </div>
      <div>
        {invites.map((item) => {
          return (
            <div>
              <img src={item.picture.thumbnail} />
              <p>
                {item.name.first}
                {item.name.last}
              </p>
              <p>{item.cell}</p>
              <p>{item.email}</p>
            </div>
          );
        })}
      </div>

      <button></button>
      <button></button>
      {/* <button onClick={() => Invitee()}></button> */}
    </div>
  );
}
