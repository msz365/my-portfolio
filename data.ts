import { RiComputerLine } from "react-icons/ri";
import { BiCloudUpload } from "react-icons/bi";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    id: "1",
    Icon: RiComputerLine,
    title: "Front-end Development",
    about:
      "I can build beautiful and scalable SPAs using <b>HTML</b>,<b>CSS</b> and <b>React.js</b> or <b>Next.js</b>",
  },
  {
    id: "2",
    Icon: FaServer,
    title: "Back-end Development",
    about:
      "Handle server-side operations using <b>NodeJs </b> or  <b>Django</b>",
  },
  {
    id: "3",
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop REST APIs using <b>NodeJs (Express)</b> utilizing <b>MongoDB</b> for storage.",
  },
  // {
  //   id: "4",
  //   Icon: MdDeveloperMode,
  //   title: "Competitive Coder",
  //   about: "A daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  // },
  // {
  //   id: "5",
  //   Icon: AiOutlineAntDesign,
  //   title: "UI/UX designer",
  //   about:
  //     "Stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  // },
  {
    id: "6",
    Icon: BiCloudUpload,
    title: "Deployment",
    about:
      "I have deployment experience with various cloud providers like <b>Digital Ocean</b>, <b>Vercel</b>, <b>Netlify</b> etc.",
  },
];

export const languages: Skill[] = [
  {
    id: "1",
    Icon: BsCircleFill,
    name: "NextJS",
    level: "45",
  },
  
  {
    id: "4",
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    id: "5",
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    id: "6",
    Icon: BsCircleFill,
    name: "Material UI",
    level: "80",
  },
 
];

export const tools: Skill[] = [
  {
    id: "1",
    Icon: BsCircleFill,
    name: "Adobe Illustrator",
    level: "85",
  },
  {
    id: "2",
    Icon: BsCircleFill,
    name: "Adobe Photoshop",
    level: "45",
  },
  {
    id: "3",
    Icon: BsCircleFill,
    name: "Figma",
    level: "60",
  },
  
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "COVID Tracker",
    description:
      "A visual Covid tracker with global stats as well as Country wise data. Interactive map and graph to depict the affected countries.",
    image_path: "/images/covid.png",
    deployed_url: "https://covid-19-tracker-76df3.web.app/",
    github_url: "https://github.com/msz365/covid19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI", "REST API"],
  },
  {
    id: 2,
    name: "Amazon Clone",
    image_path: "/images/amazon.png",
    deployed_url: "https://challenge-3186c.web.app/",
    github_url: "https://github.com/msz365/amazon-clone",
    category: ["react", "stripe"],
    description:
      "A clone of Amazon with basic user profile features such as order history & payment gateway integration.",
    key_techs: ["React", "Firebase", "Stripe", "MaterialUI"],
  },

  {
    id: 3,
    name: "Ecommerce Webiste (CommerceJs)",
    image_path: "/images/ecomm.png",
    deployed_url: "https://ecommstore-commercejs.netlify.app/",
    github_url: "https://github.com/msz365/commerjs",
    category: ["commercejs", "stripe", "react"],
    description:
      "A basic ecommerce platform with stripe integration and commercejs backend integration using API.",
    key_techs: ["React", "Redux", "Styled Components", "REST API"],
  },

  {
    id: 4,
    name: "Facebook Clone",
    image_path: "/images/fb.png",
    deployed_url: "https://facebook-clone-e6bba.web.app/",
    github_url: "https://github.com/msz365/facebook-clone",
    category: ["react", "firebase"],
    description:
      "A basic Facebook feed clone using firebase for data retreival and storage and materialUI for layout",
    key_techs: ["React", "Firebase", "MaterialUI"],
  },

  {
    id: 5,
    name: "Slack Clone",
    image_path: "/images/slack.png",
    deployed_url: "https://slack-clone-3d176.web.app/",
    github_url: "https://github.com/msz365/slack-clone",
    category: ["react", "firebase"],
    description:
      "A basic slack clone with google authentication using firebase and slack channel functionality.",
    key_techs: ["React", "Firebase", "MaterialUI"],
  },

  {
    id: 6,
    name: "Whatsapp Clone",
    image_path: "/images/whatsapp.png",
    deployed_url: "https://whatsapp-clone-ece00.web.app/",
    github_url: "https://github.com/msz365/whatsapp-clone",
    category: ["react", "firebase"],
    description:
      "A simple whatsapp clone using firebase authentication and data collection integration.",
    key_techs: ["React", "Firebase", "MaterialUI"],
  },
  {
    id: 7,
    name: "Client Website ",
    image_path: "/images/neotek.png",
    deployed_url: "https://www.neotek.com.pk/",
    github_url: "https://github.com/msz365/neotek-next",
    category: ["next"],
    description:
      "A client website designed and implemented with react later upgraded to nextjs for better SEO",
    key_techs: ["React", "Next", "Styled Components"],
  },
  // {
  //   id: 8,
  //   name: "Clinet Invoicing System",
  //   image_path: "/images/isp.png",
  //   deployed_url: "https://o-my-goal.web.app/",
  //   github_url: "https://github.com/msz365/isp-invoice",
  //   category: ["django"],
  //   description:
  //     "A custom application to generate and maintain a database of clients and their billing for an ISP.",
  //   key_techs: ["Django", "Python", "ChartJS", "Xhtml2pdf", "Bootstrap"],
  // },
  // {
  //   id: 9,
  //   name: "Craigslist Scrapper",
  //   image_path: "/images/craigslist.png",
  //   deployed_url: "https://craigslist-scrapper-msz.herokuapp.com/",
  //   github_url: "https://github.com/msz365/craigslist-scrapper",
  //   category: ["django"],
  //   description:
  //     "A simple webscrapper application to scrape Craigslist using Django",
  //   key_techs: ["Django", "Python", "Webscrapper", "Heroku"],
  // },
];
