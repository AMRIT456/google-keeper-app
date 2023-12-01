import React from "react";

function Remainder(props) {
  function handleClick() {
    props.onDeleteremainder(props.id);
  }
  function handlearchive(){
    props.onarchiveremainder(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><i className="fa-solid fa-trash fa-lg" style={{ color: "#f0bc00" }}></i></button>
      <button onClick={handlearchive}><i className="fa-solid fa-box-archive fa-lg" style={{ color: "#f0bc00" }}></i></button>
    </div>
  );
}

export default Remainder;

