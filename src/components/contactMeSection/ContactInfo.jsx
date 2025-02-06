import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="snigdhak.ug23.cs@nitp.ac.in" Image={HiOutlineMail} />
      <SingleInfo text="+91 7779890355" Image={FiPhone} />
      <SingleInfo text="Patna, Bihar" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
