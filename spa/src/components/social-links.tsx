import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  { link: "#", icon: <FaFacebookF /> },
  { link: "#", icon: <FaTwitter /> },
  { link: "#", icon: <FaLinkedinIn /> },
  { link: "#", icon: <FaInstagram /> },
];

function SocialLinks(props) {
  return (
    <ul className="social-links flex flex-wrap gap-3">
      {socialLinks.map((socialLink) => (
        <li>
          <a
            href={socialLink.link}
            className="inline-block px-2 transition-opacity hover:opacity-60"
          >
            {socialLink.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
