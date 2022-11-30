import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computing for Business</h5>
            <p className="font-semibold">Aston University, Birmingham, UK</p>
            {/* <p className="my-3">
              I am currently working as a freelancer on various frontend and
              backend projects.
            </p> */}
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Web Application Developer</h5>
            {/* <p className="font-semibold">Fiver</p> */}
            <p className="my-3">
              I am currently working on two products of my own, a full-stack e-commerce platform and an LMS. Both products will use NextJs as a frontend with Material UI for theming and styles. Back-end will be NodeJS with express and MongoDB. JWT for authentication and some cloud services like SES and S3.  
            </p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.id} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.id} />
            ))}
          </div>
        </div>
      </div>
      {/* Language & tool */}
    </motion.div>
  );
};

export default resume;
