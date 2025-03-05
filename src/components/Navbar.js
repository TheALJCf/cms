import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">ALJCF</h1>
      <div>
        <Link className="mx-2" to="/">Home</Link>
        <Link className="mx-2" to="/about">About</Link>
        <Link className="mx-2" to="/services">Services</Link>
        <Link className="mx-2" to="/events">Events</Link>
        <Link className="mx-2" to="/contact">Contact</Link>
        <Link className="mx-2" to="/give">Give</Link>
      </div>
    </nav>
  );
}
export default Navbar;