import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "E-commerce application",
    img: "../../shop.png",
    desc: "Built a comprehensive e-commerce app similar to Shopify using React, Redux, React Hooks, React Router, GraphQL, Context API, Firebase, Redux-Saga, and Stripe. Full-stack development in the MERN stack, utilizing Firebase for seamless integration. Access to the complete codebase provided for portfolio enhancement.",
    url: "",
  },
  {
    id: 2,
    title: "Face detection",
    img: "https://developers.google.com/static/ml-kit/vision/face-detection/images/face_detection2x.png?hl=pl",
    desc: "This React-based web app analyzes images, detects faces using the Clarifai API, and tracks the analyzed image count. Featuring user authentication for log-in and registration, it ensures progress preservation. The visually appealing interface includes animated particle effects. This project highlights proficiency in React, interaction with external APIs, and serves as a valuable portfolio piece, showcasing advanced programming skills and creative UI design.",
    url: "https://szymonharajda.github.io/smartbrain-front-end",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.url}>See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
