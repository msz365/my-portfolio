import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Link from 'next/link'

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div  >
      <Image
        src="https://mcusercontent.com/0531ef863c590393c7849acde/images/0be3b314-377c-967f-7d28-2d256f290ad8.jpg"
        alt="Mohammad Suleman Zia Avatar"
        className="mx-auto rounded-full"
        width="150"
        height="150"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Suleman </span>Zia
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Application Developer
      </p>
   
        {/* <a
          href="/assets/suleman-zia-resume.pdf"
        download="suleman-zia-resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a> */}
    
      {/* Social Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <Link href="https://github.com/msz365?tab=repositories"  passHref>
        <a target="_blank" rel="noreferrer" >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        </Link>
        <Link href="https://www.linkedin.com/in/mohammad-suleman-zia-64129039/" passHref>
        <a>
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        </Link>
        <Link href="https://wa.me/923215261765?text=I%20would%20like%20more%20information" passHref>
        
        <a target="_blank" rel="noreferrer" >
          <AiOutlineWhatsApp className="w-8 h-8 cursor-pointer" />
        </a>
        </Link>
      </div>

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Lahore, Pakistan</span>
        </div>
        <p className="my-2">msz365@hotmail.com</p>
        <p className="my-2">+92 (0) 321 526 1765</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue to-green focus:outline-none"
        onClick={() => window.open("mailto:msz365@hotmail.com")}
      >
        Email Me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue to-green focus:outline-none"
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
