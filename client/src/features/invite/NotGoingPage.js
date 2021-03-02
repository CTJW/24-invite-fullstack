import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseNotGoing, asyncNotGoing, selectNotGoing } from "./inviteSlice";
import { Link } from "react-router-dom";

export default function NotGoingPage() {
  const notGoing = useSelector(selectNotGoing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncNotGoing);
  }, []);

  return (
    <div>
      <Link className="home" to={"/"}>
        Home
      </Link>
      <div className="listOfNotGoing">
        <ul className="notGoingInfo">
          {notGoing.map((item) => (
            <li className="notGoingList">
              <img className="notGoingImg" src={item.picture} />
              <div className="notGoingCard">
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
