import React from "react";
import train from "./train.svg";
function Footer() {
    return (
        <div style={{backgroundColor: '#d8b4fe', marginTop: '60px'}}>
        <div className="container py-5">
  <footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
    <p className="col-md-4 mb-0 text-body-secondary">&copy; 2023 EnTrack, Inc</p>

    <div className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img src={train} alt="a train" style={{margin: '15px'}}/>
    </div>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="/prices" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </footer>
</div>
</div>
    );
}

export default Footer;