import React, { Component } from 'react';
import classes from "./work.module.css";
import box1 from "../images/box1.png";
import box2 from "../images/box2.png";
import box3 from "../images/box3.png";
import SkillsBox from "../components/skills/SkillsBox";
import Card from "../components/Card";
function Work() {
  return (
    <Card>
      <div className={classes.title}>My Skills</div>
      <div className={classes.container}>
        <SkillsBox
          img={box1}
          title="HTML & CSS"
          description="Member of the freeCodeCamp community, I picked up those awesome skills throught self-driven learning. I consolidated those skills on different online learning platforms like W3Schools, Udemy and YouTube."
        ></SkillsBox>
        <SkillsBox
          img={box2}
          title="JavaScript"
          description="Variables, Data Types, Operators | Control Structures | Functions | Arrays and Iterables | Classes and Object-oriented Programming | Working with the DOM | Working with Events"
        ></SkillsBox>
        <SkillsBox
          img={box3}
          title="Front End Development Libraries"
          description="React | Bootstrap | And a little bit of: jQuery and Sass"
        ></SkillsBox>
      </div>
      
      
    </Card>
  );
}

export default Work;
