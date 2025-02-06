import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/snigdha-kumar-90445b298/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/snigdhaydv27" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/snigdha_ydv/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
