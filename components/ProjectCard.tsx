import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInUp, stagger } from "../animations";
import { IProject } from "../types";
import { motion } from "framer-motion";
import Link from 'next/link'

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setshowDetail: (id: null | number) => void;
}> = ({
  project: {
    id,
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  showDetail,
  setshowDetail,
}) => {
  return (
    <div className="shadow-md">
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setshowDetail(id)}
        width="300"
        height="150"
        layout="responsive"
      />
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setshowDetail(true)}
      /> */}
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 md:p-10 shadow-custom-light dark:shadow-custom-dark">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-400"
            >
              <Image
                src={image_path}
                alt={name}
                className=""
                width="300"
                height="150"
                layout="responsive"
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeInUp}
            >
              <Link  href={github_url} passHref>
              <a
               
                target="_blank"
                rel="noreferrer"
                className="flex px-4 py-2 space-x-3 bg-gray-200 item-center dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              </Link>
              <Link href={deployed_url}>  
              <a
                
                target="_blank"
                rel="noreferrer"
                className="flex px-4 py-2 space-x-3 bg-gray-200 item-center dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              className="flex-wrap mt-5 space-x-2 text-sm tracking-wider"
              variants={fadeInUp}
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setshowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
