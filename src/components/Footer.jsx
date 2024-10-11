import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="p-8 ">
      <div className="border-line"></div>
      <footer className="footer">
        <div className="flex flex-col justify-between">
          <h3 className="title text-center lg:text-left ">Web Reskilling</h3>

          <div className=" social-icons ">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>

        <div className="footer-urls">
          <div>
            <h4 className="font-bold mb-2">Things </h4>
            <h4 className="mb-2">Link</h4>
            <h4 className="mb-2">Link </h4>
            <h4 className="mb-2">Link </h4>
          </div>
          <div>
            <h4 className="font-bold mb-2">Things 2</h4>
            <h4 className="mb-2">Link </h4>
            <h4 className="mb-2">Link</h4>
            <h4 className="mb-2">Link </h4>
          </div>
          <div>
            <h4 className="font-bold mb-2">Things 3</h4>
            <h4 className="mb-2">Link</h4>
            <h4 className="mb-2">Link</h4>
            <h4 className="mb-2">Link</h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
