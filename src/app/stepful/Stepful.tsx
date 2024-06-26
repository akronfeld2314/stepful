"use client"

import { useState } from "react";
import { User } from "../page";
import "./Stepful.css";
import { UserSelector } from "./user-selector/UserSelector";

type StepfulProps = {
  queryUsers: User[]
};

export function Stepful({queryUsers}: StepfulProps) {
  const [users, _setUsers] = useState<User[]>(queryUsers);
  const [currentUser, setCurrentUser] = useState<User>(queryUsers[0]);
  return (
    <div className="stepful">
      <div className="header">
        <UserSelector currentUser={currentUser!} setCurrentUser={setCurrentUser} users={users}></UserSelector>
      </div>
      <div className="content">
        {currentUser!.type === 'coach' ? (<div>COACH STUFF</div>) : (<div>STUDENT STUFF</div>)}
      </div>
    </div>
  );
}