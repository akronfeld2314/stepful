"use client"

import { User } from "@/app/page";
import { Select } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { ChangeEvent } from "react";
import "./UserSelector.css";

type UserSelectorProps = {
  users: User[],
  currentUser: User;
  setCurrentUser: (user: User) => void,
}

type OptionsMap = {[key: string]: DefaultOptionType[]}

export function UserSelector({users, currentUser, setCurrentUser}: UserSelectorProps) {
  let optionsMap: OptionsMap = {
    coach: [],
    student: [],
  };

  users.forEach((user) => {
    let option = {
      value: user.id,
      label: user.name,
    }
    if (user.type == "coach") {
      optionsMap.coach.push(option)
    } else {
      optionsMap.student.push(option);
    }
  });

  function onRadioChange(e: ChangeEvent<HTMLInputElement>) {
    let type = e.target.value;
    let userId = optionsMap[type][0].value;
    let newUser = users.find((user) => (user.id===userId));
    if (newUser) {
      setCurrentUser(newUser);
    } else {
      throw Error
    }
  }

  return (
    <div className="user-selector">
      <div className="radio">
        <div>
          <input type="radio" name="type" value="student" onChange={onRadioChange} defaultChecked={currentUser.type==='student'}/>
          <label>Student</label>
        </div>
        <div>
          <input type="radio" name="type" value="coach" onChange={onRadioChange} defaultChecked={currentUser.type==='coach'}/>
          <label>Coach</label>
        </div>
      </div>
      <div className="select">
        <Select options={optionsMap[currentUser.type]} value={currentUser.id}></Select>
      </div>
    </div>
    
  )
}