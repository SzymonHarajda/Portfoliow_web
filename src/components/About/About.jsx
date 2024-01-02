import "./About.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>About</motion.b> me
          </h1>
        </div>
      </motion.div>

      <motion.div className="contentContainer" variants={variants}>
        <p>
          I am a motivated and versatile individual, always eager to take on
          new challenges. With a passion for learning, I am dedicated to
          delivering high-quality results. With a positive attitude and a
          growth mindset, I am ready to make a meaningful contribution and
          achieve great things.
        </p>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Zero to Mastery: Compleat Web Developer 2024 - done</h2>
          <p>
          Results-driven Web Developer with expertise in HTML, CSS, and JavaScript (ES6-ES2023), along with proficiency in React and Redux for state management. Skilled in responsive design, Bootstrap 5, and SemanticUI. Experienced in server-side development using Node.js and Express.js, with proficiency in PostgreSQL and SQL. Adept at version control with Git and GitHub, and comfortable in a command line environment. Familiar with RESTful API design, authentication, authorization, scalable infrastructure, security principles, and successful deployment in production environments. 
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Zero to Mastery: Complete React Developer 2024 - in progress</h2>
          <p>
          Completed React coding bootcamp with expertise in Redux, Hooks, GraphQL, ContextAPI, Stripe, and Firebase. Proficient in state management, large-scale application architecture, and React design patterns. Developed leadership skills for guiding projects and making architectural decisions. Extensive knowledge of the latest React features, including Hooks, Context API, Suspense, and React Lazy. Skilled in routing with React Router, converting apps to Progressive Web Apps, and testing with Jest. Experienced in Redux, Redux Thunk, Redux Saga for state management, and handling online payments using the Stripe API. Proficient in writing clean code with ES6-ES10 JavaScript
          </p>
        </motion.div>
        </motion.div>

    </motion.div>
  );
};

export default About;