import React, { useState,useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./notesss";
import CreateArea from "./CreateArea";
import Sidebar from "./sidebar";
import CreateRemainder from "./CreateRemainder";
import Remainder from "./remainder";
import Archive from "./Archive";
function App() {
  const [notes, setNotes] = useState([]);
  const [remaindernotes,setremaindernotes]=useState([]);
  const [archivenotes,setarchivenotes]=useState([]);
  const [searchTerm,setsearchTerm]=useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [selectedSection, setSelectedSection] = useState('notes');
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://keeperapp-a2c53-default-rtdb.firebaseio.com/remainderdb.json"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        if (data) {
          const remainderList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setremaindernotes(remainderList);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://keeperapp-a2c53-default-rtdb.firebaseio.com/archivedb.json"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        if (data) {
          const archivelist = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setarchivenotes(archivelist);
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
  function addRemainder(newRemainder) {
    setremaindernotes(prevRemainder => {
      return [...prevRemainder, newRemainder];
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
  const deleteRemainder = async (id) => {
    try {
      const reminderIdToDelete = remaindernotes[id].id;
      const response = await fetch(
        `https://keeperapp-a2c53-default-rtdb.firebaseio.com/remainderdb/${reminderIdToDelete}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      setremaindernotes((prevRemainder) => {
        return prevRemainder.filter((remanderitem) => remanderitem.id !== reminderIdToDelete);
      });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };
  const deletearchive=async(id)=>{
    try {
      const archiveIdtoDelete = archivenotes[id].id;
      const response = await fetch(
        `https://keeperapp-a2c53-default-rtdb.firebaseio.com/archivedb/${archiveIdtoDelete}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      setarchivenotes((prevarchive) => {
        return prevarchive.filter((archiveItem) => archiveItem.id !== archiveIdtoDelete);
      });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };
  const archiveNote=async(id)=>{
    const archive=notes[id];
    const{title,content}=archive;
    
    const res=await fetch('https://keeperapp-a2c53-default-rtdb.firebaseio.com/archivedb.json',{
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
  setarchivenotes(prevarchive=>{
    return [...prevarchive,archive];
  })
  deleteNote(id);
}

  const archiveRemainder=async(id)=>{
    const archive=remaindernotes[id];
    const{title,content}=archive;
    
    const res=await fetch('https://keeperapp-a2c53-default-rtdb.firebaseio.com/archivedb.json',{
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
  setarchivenotes(prevarchive=>{
    return [...prevarchive,archive];
  })
  deleteRemainder(id);
  }
  const serachNote = (value)=>{
    setsearchTerm(value);
    if(selectedSection==="notes"){
      if(searchTerm===""){
        setFilteredNotes(notes);
        return;
      }
      const filterbysearch=notes.filter((item)=>{
        if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return item;
        }
      })
      setFilteredNotes(filterbysearch);
      
   }else if(selectedSection==="remainders"){
    if(searchTerm===""){
      setFilteredNotes(remaindernotes);
      return;
    }
    const filterbysearch=remaindernotes.filter((item)=>{
      if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
        return item;
      }
    })
    setFilteredNotes(filterbysearch);
   }
   else if(selectedSection==="archive"){
    if(searchTerm===""){
      setFilteredNotes(archivenotes);
      return;
    }
    const filterbysearch=archivenotes.filter((item)=>{
      if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
        return item;
      }
    })
    setFilteredNotes(filterbysearch);
   }
   
  };
  const appStyle = {
    display: "flex",
    justifyContent: "space-evenly", 
    height: "40vh", 
    padding: "10px", 
  };

  const createAreaWrapperStyle = {
    flex: "1", 
    justifyContent: "center", // Center content horizontally
  };
  const sectionselection=(value)=>{
    setSelectedSection(value);
  }
  return (
    <div>
      <Header onSearch={serachNote} />
      <div style={appStyle}>
        <Sidebar onsection={sectionselection}/>
        <div style={createAreaWrapperStyle}>
        {
          selectedSection === 'notes' ? (
            <CreateArea onAdd={addNote} />
          ) : selectedSection === 'remainders' ? (
            <CreateRemainder onAddRemainder={addRemainder} />
          ) : null
        }
        </div>
      </div>
      
      {selectedSection === 'notes' &&(filteredNotes.length > 0 ? filteredNotes : notes).map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onarchive={archiveNote}
          />
        );
      })}
       {selectedSection === 'remainders' && (filteredNotes.length > 0 ? filteredNotes : remaindernotes).map((remaindernoteitem, index) => {
        return (
          <Remainder
            key={index}
            id={index}
            title={remaindernoteitem.title}
            content={remaindernoteitem.content}
            onDeleteremainder={deleteRemainder}
            onarchiveremainder={archiveRemainder}
          />
        );
      })}
      {selectedSection === 'archive' && (filteredNotes.length > 0 ? filteredNotes : archivenotes).map((archivenoteitem, index) => {
        return (
          <Archive
            key={index}
            id={index}
            title={archivenoteitem.title}
            content={archivenoteitem.content}
            onArchive={deletearchive}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
