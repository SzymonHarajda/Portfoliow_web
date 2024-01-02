import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="https://github.com/SzymonHarajda">
          <i className="ci ci-github ci-2x"></i>
          </a>
          <a href="https://linkedin.com/in/szymon-harajda-75137b1b0/">
          <i className="ci ci-linkedin ci-2x"></i>
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
