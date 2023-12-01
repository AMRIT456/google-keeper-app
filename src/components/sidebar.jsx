import React ,{useState} from "react";
function Sidebar(props){
    const [selectedSection, setSelectedSection] = useState('notes');
    const onsectionclick=(value)=>{
        console.log(value);
        props.onsection(value);
        setSelectedSection(value);
    }
    const sidebarStyle = {
        width: "280px",
        backgroundColor: "#f8e80d",
        padding: "20px",
    };
    
    return(
        <div>
            <div className="d-flex flex-column position-relative flex-shrink-0 p-3 bg-body-tertiary" style={sidebarStyle}>
                
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <div className={` link-body-emphasis ${
                selectedSection === "notes" ? "active-section" : ""
                 }`} >
                    <i className="fa-solid fa-note-sticky fa-lg" onClick={()=>onsectionclick('notes')} style={{color: "#f8e80d", cursor:"pointer"}}></i>
                    &nbsp;&nbsp;Notes
                    </div>
                </li>
                   
                <li>
                    <div className={`link-body-emphasis ${
                selectedSection === "remainders" ? "active-section" : ""
                 }`} >
                    <i className="fa-solid fa-bell fa-lg" onClick={()=>onsectionclick('remainders')} style={{color: "#f8e80d", cursor:"pointer"  }}></i>
                    &nbsp;&nbsp;Reminders
                    </div>
                </li>
                <li>
                    <div className={`link-body-emphasis ${
                selectedSection === "archive" ? "active-section" : ""
                 }`}>
                    <i className="fa-solid fa-box-archive fa-lg" onClick={()=>onsectionclick('archive')} style={{color: "#f8e80d", cursor:"pointer"}}></i>
                    &nbsp;&nbsp;Archive
                    </div>
                </li>
                
                </ul>
                <hr/>
            </div>
        </div>
    )
}
export default Sidebar;