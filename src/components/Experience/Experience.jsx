import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import CountUp from 'react-countup';
const Experience = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}><CountUp start={0} end={4} duration={2}/>+</div>
        <span  style={{color: darkMode?'white':''}}>years Experience </span>
        <span> as a developer</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}><CountUp start={0} end={20} duration={3}/>+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}><CountUp start={0} end={0} duration={2}/>+</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
