import React ,{useState} from "react";

function Header(props) {
  const [searchVal, setSearchVal] = useState(""); 
  const handleRefresh=()=>{
    window.location.reload();
  }
  const handleInputChange = (e) => {
    
    setSearchVal(e.target.value);
    //console.log(searchVal);
    props.onSearch(searchVal);
    
  }
  return (
    <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex align-items-center justify-content-between ">
       <img className="bi me-2" style={{ width: "50px", height:"50px", marginLeft:"-70px" }} src="/img/keeps.png" alt="" />
        
        <div className="col-1 col-lg-auto me-lg-auto ml-n0 " style={{color:"white"}}>
          <h2>Google Keep</h2>
        </div>

        <div className="form-group has-search me-lg-auto mb-2  mb-md-0" style={{ width: "430px" , marginLeft:"150px" }}>
          <div className="fa fa-search form-control-feedback" type="submit"></div>
          <input type="text" className="form-control" onChange={handleInputChange} placeholder="Search"/>
        </div>
        <div className="nav me-lg-auto mb-2 mb-md-0" onClick={handleRefresh} style={{marginLeft:"60px"}}>
          <i className="fa-solid fa-rotate-right fa-lg" style={{ color: "#ffffff", cursor:"pointer"}}></i>
        </div>
        <div className="nav me-lg-auto mb-2 mb-md-0">
        
        <div className=" hidesetting " data-bs-toggle="dropdown" style={{marginRight:"-40px",marginLeft:"-60px"}} aria-expanded="false"><i className="fa-solid fa-gear fa-lg" style={{ color: "#ffffff",cursor:"pointer" }}></i>
        <ul className="dropdown-menu text-small">
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>Settings</span></li>
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>Enable dark theme</span></li>
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>Send feedback</span></li>
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>Help</span></li>
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>App downloads</span></li>
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>Keyboard shortcuts</span></li>
          </ul>
        </div>
        </div>
        <div className="dropdown hidesetting text-end" style={{marginRight:"-60px", marginLeft:"-120px",}}>
          <span style={{cursor:"pointer"}} className="d-block" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/img/icon.png" alt="mdo" width="48" height="48" className="rounded-circle"/>
          </span>
          
          <ul className="dropdown-menu text-small">
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>New project...</span></li>
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>Settings</span></li>
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>Profile</span></li>
            <li><hr className="dropdown-divider"/></li>
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>Sign out</span></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  );
}

export default Header;
