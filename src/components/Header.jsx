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
      <div className="d-flex flex-wrap align-items-center ">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
          <img src="/img/keeps.png" alt="" />
        </a>
        <div className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0">
          <h1>Google Keep</h1>
        </div>

        <div className="form-group has-search nav col-3 col-lg-auto me-lg-auto mb-2  mb-md-0" style={{ width: "500px" }}>
          <div className="fa fa-search form-control-feedback" type="submit"></div>
          <input type="text" className="form-control" onChange={handleInputChange} placeholder="Search"/>
        </div>
        <div className="nav me-lg-auto mb-2 mb-md-0" onClick={handleRefresh}>
          <i className="fa-solid fa-rotate-right fa-lg" style={{ color: "#ffffff", cursor:"pointer"}}></i>
        </div>
        <div className="nav me-lg-auto mb-2 mb-md-0">
        
        <div className="d-block " data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-gear fa-lg" style={{ color: "#ffffff",cursor:"pointer" }}></i></div>
        <ul className="dropdown-menu text-small">
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>Settings</span></li>
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>Enable dark theme</span></li>
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>Send feedback</span></li>
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>Help</span></li>
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>App downloads</span></li>
            <li><span className="dropdown-item" style={{cursor:"pointer"}}>Keyboard shortcuts</span></li>
          </ul>
        </div>
        <div className="dropdown text-end">
          <span style={{cursor:"pointer"}} className="d-block" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/img/unnamed.png" alt="mdo" width="48" height="48" className="rounded-circle"/>
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
