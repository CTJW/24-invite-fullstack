import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseGoing, asyncGoing, selectGoing } from "./inviteSlice";
import { Link } from "react-router-dom";

import axios from "axios";

export default function GoingPage() {
  const Going = useSelector(selectGoing);
  const dispatch = useDispatch();
  // console.log(Going);

  useEffect(() => {
    dispatch(asyncGoing);
  }, []);

  return (
    <div>
      <Link className="home" to={"/"}>
        Home
      </Link>
      <div className="listOfGoing">
        <ul className="GoingInfo">
          {Going.map((item) => (
            <li className="GoingList">
              <img className="GoingImg" src={item.picture} />
              <div className="GoingCard">
                <p>
                  Name: {item.name.first} {item.name.last}
                </p>
                <p>Phone: {item.cell}</p>
                <p>Email:{item.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
