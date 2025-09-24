import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <a href="#" className="subtitle">AybüBurda</a>
      <div className="nav-menu">
        <div className="nav-links">
          <a href="#why-purpose" className="nav-link">Neden?</a>
          <a href="#how" className="nav-link">Nasıl?</a>
          <a href="#by-what" className="nav-link">Ne İle?</a>
          <a href="#us" className="nav-link">Biz</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
