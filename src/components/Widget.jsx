import { FaFacebookSquare,FaInstagram } from "react-icons/fa";

const Widget = () => {
  return (
    <div className="relative w-full h-24 p-2 text-textColor rounded-xl bg-secondary">
      <div >
        <h1 className="text-lg font-semibold flex justify-center">Follow us on</h1>
        <div class="flex justify-center py-2">
            <a href="https://www.facebook.com/iitbdiariesconfession" className="px-2"><FaFacebookSquare className="text-3xl"/></a>
            <a href="https://www.instagram.com/iitbdiariesconfession/" className="px-2"><FaInstagram className="text-3xl"/></a>
        </div>
      </div>
    </div>
  );
};

export default Widget;
