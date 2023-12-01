import React from "react";

function Archive(props) {
  function handleClick() {
    props.onArchive(props.id);
  }
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><i className="fa-solid fa-trash fa-lg" style={{ color: "#f0bc00" }}></i></button> 
    </div>
  );
}

export default Archive;

