import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const submitNote =async (event)=> {
    event.preventDefault();
    props.onAdd(note);
    const{title,content}=note;
    
    const res=await fetch('https://keeperapp-a2c53-default-rtdb.firebaseio.com/googlekeep.json',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        title,
        content
      })
    })
    setNote({
      title: "",
      content: ""
    });
    
    
  }

  return (
    <div>
      <form className="create-note" method="POST">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
         rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
