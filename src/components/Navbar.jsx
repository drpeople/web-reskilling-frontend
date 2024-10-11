import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffect to listen to screen resize and reset the menu state
  useEffect(() => {
    const handleResize = () => {
      // Reset the menu when the screen is medium or larger
      if (window.innerWidth >= 768) {
        // Close the mobile menu on larger screens
        setIsMenuOpen(false);
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">Web Reskilling</h3>

        <div className="hidden md:flex space-x-4">
          <a className="page-link" href="">
            Page 1
          </a>
          <a className="page-link" href="">
            Page 2
          </a>
          <a className="page-link" href="">
            Page 3
          </a>
          <button className="custom-button">
            <Link to="/">HOME </Link>
          </button>
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button className="text-3xl md:hidden" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>

      {/* Dropdown Menu (show when the menu is open on small screens) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center space-y-4 mt-4">
          <a className="page-link" href="">
            Page 1
          </a>
          <a className="page-link" href="">
            Page 2
          </a>
          <a className="page-link" href="">
            Page 3
          </a>
          <button className="custom-button">
            <Link to="/"> Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
