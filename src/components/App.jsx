import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./notesss";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://keeperapp-a2c53-default-rtdb.firebaseio.com/googlekeep.json"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        if (data) {
          const notesList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setNotes(notesList);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  const deleteNote = async (id) => {
    try {
      const noteIdToDelete = notes[id].id;
      const response = await fetch(
        `https://keeperapp-a2c53-default-rtdb.firebaseio.com/googlekeep/${noteIdToDelete}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      setNotes((prevNotes) => {
        return prevNotes.filter((noteItem) => noteItem.id !== noteIdToDelete);
      });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
