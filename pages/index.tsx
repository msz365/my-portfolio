import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 backdrop-filter-blur"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        A self-motivated IT professional interested in a number of front-end and back-end technologies. 
        My core area of interest is React and other frameworks built on top of it specifically NextJS. I have also built a couple of NodeJS APIs to connect to for more advanced applications. 
        I have made some basic to intermediate projects to showcase while working on more complex ones to add to this portfolio soon.<br />
        It&apos;s been a great learning experience and I hope to continue to enhance my skillset to provide value in a professional setting.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-200 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-semibold tracking-wide">
          What I Offer
        </h6>
        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={service.id}
              className="col-span-2 p-2 bg-gray-300 rounded-lg dark:bg-dark-200 md:col-span-1"
            >
              <ServiceCard service={service} key={service.id} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
