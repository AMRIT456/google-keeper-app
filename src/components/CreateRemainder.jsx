import React, { useState } from "react";

function CreateRemainder(props) {
  const [remaindernote, setRemaindernote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setRemaindernote(prevremaindernote => {
      return {
        ...prevremaindernote,
        [name]: value
      };
    });
  }

  const submitNote =async (event)=> {
    event.preventDefault();
    props.onAddRemainder(remaindernote);
    const{title,content}=remaindernote;
    
    const res=await fetch('https://keeperapp-a2c53-default-rtdb.firebaseio.com/remainderdb.json',{
      
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        title,
        content
      })
    })
    console.log(res);
    setRemaindernote({
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
          value={remaindernote.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={remaindernote.content}
          placeholder="Take a remaindernote..."
         rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateRemainder;
