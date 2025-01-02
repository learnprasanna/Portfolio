import logo from "../assets/Logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-3">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-14 h-8" src={logo} alt="logo"/> {/* Updated width and height */}
            </div>
            <div className="my-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/b-prasanna-kumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                >
                    <FaLinkedin/>
                </a>
                <a
                    href="https://github.com/learnprasanna"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                >
                    <FaGithub/>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
