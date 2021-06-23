import React, { Component } from 'react';
import classes from "./contact.module.css";
import Card from "../components/Card";
import Info from "../components/contact/Info";
import { FaUserAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiOutlineWhatsApp } from "react-icons/ai";
import img from "../images/contact.png";
function Contact(){
    return (
        <div>
        <Card>
            <h2 className={classes.title}>Contact me</h2>
            <h2>I'd love to hear from you</h2>
            <p>Please, feel free to use the info below to contact me. Let's work together !</p>
            <div className={classes.container}>
                <div className={classes.columnLeft}>
                    <div className={classes.boxItem}>
                        <FaUserAlt className={classes.icon}/>
                        <Info head="Name" subtitle="Gheorghita Alexandru"></Info>
                    </div> 
                    <div className={classes.boxItem}>
                        <FaMapMarkerAlt className={classes.icon}/>
                        <Info head="Address" subtitle="Gorj/Timisoara, Romania"></Info>
                    </div> 
                    <div className={classes.boxItem}>
                        <IoIosMail className={classes.icon}/>
                        <Info head="Email" subtitle="gheorghita.alexandru99@gmail.com"></Info>
                    </div> 
                    <div className={classes.boxItem}>
                        <AiOutlineWhatsApp className={classes.icon}/>
                        <Info head="Phone" subtitle="0771726254"></Info>
                    </div> 
                </div>
                <div className={classes.columnRight}><img src={img} /></div>
            </div>
            </Card>
            <footer>
                Created by <span>Gheorghita Alex</span> | <a href="https://github.com/Alexandrugit1"><span>Github</span></a>
            </footer> 
        </div>
    );
}

export default Contact;