/* eslint-disable react/prop-types */
import React, { useState} from "react"
import DeleteIcon from "../assets/deleteicon.png"
import checkicon from "../assets/checkicon.png"
import "./todo.css"

export const TodoItem = ({ title, deleteTodo }) => {
    const [check, setcheck] = useState(false);
  const markCompleted = () => {
    setcheck(!check);
  };
  return (
    <div className="todo-item" id="todo-1" style={{backgroundColor: check ? "lightgreen" : "white"}}>
      <p className="todo-task-title">{title}</p> 
      <img className="check-icon" src={checkicon} onClick={markCompleted} />
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
     
    </div>
  )
}