import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SZYMON HARAJDA</motion.h2>
          <motion.h1 variants={textVariants}>
          React developer
          </motion.h1>
          <motion.ul>
          <motion.p variants={textVariants}> Technical skills</motion.p>
          <i className="ci ci-reactjs ci-2x"></i>
          <i className="ci ci-js ci-2x"></i>
          <i className="ci ci-node ci-2x"></i>
          <i className="ci ci-postgresql ci-2x"></i>
          <i className="ci ci-html ci-2x"></i>
          <i className="ci ci-css ci-2x"></i>
          <i className="ci ci-bootstrap ci-2x"></i>
          <i className="ci ci-tailwind ci-2x"></i>
          </motion.ul>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="#Portfolio">See the Latest Works</a> 
            </motion.button>
            <motion.button variants={textVariants}><a href="#Contact">Contact Me</a> </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        React Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
