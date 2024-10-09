import { useState, useEffect } from "react";

function Navbar() {
  // State to manage the menu visibility
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
        setIsMenuOpen(false); // Close the mobile menu on larger screens
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
    <div>
      <header className="flex justify-between items-center p-4 ">
        {/* Site Name */}
        <h3 className="font-bold text-lg">Site Name</h3>

        {/* Hamburger Menu (visible on small screens) */}
        <button className="text-3xl md:hidden" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>

        {/* Menu Links (visible on larger screens, hidden on smaller) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 absolute md:static top-16 right-0 w-full md:w-auto  md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <a className="block md:inline-block page-link mb-2 md:mb-0" href="">
            Page 1
          </a>
          <a className="block md:inline-block page-link mb-2 md:mb-0" href="">
            Page 2
          </a>
          <a className="block md:inline-block page-link mb-2 md:mb-0" href="">
            Page 3
          </a>
          <button className="block md:inline-block custom-button">
            Button
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
