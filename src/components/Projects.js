
import React, { useState } from 'react';
import vidone from '../assets/video/vidone.gif'
import vidtwo from '../assets/video/vidtwo.gif'
import vidthree from '../assets/video/vidthree.gif'
import vidfour from '../assets/video/vidfour.gif'
import vidfive from '../assets/video/vidfive.gif'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    
    view: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  
  
  export const Projects= () => {
  
    return (
  
        <section className="projects" id="projects">
                 <div className="header-container">
                    <h1>Check out some of my projects!</h1>
                 </div>

                 <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className='slide-container'>
                                <img src={vidone} alt="Image"/>
                                <div className="cover">
                                    <p>This is a task manager built using JavaScript, CSS and HTML. </p>
                                    <p>You can add a new task, see when you have finished a task and delete a task if it is not needed anymore.</p>
                                </div>
                            </div>
                            <div className='slide-container'>
                                <img src={vidtwo} alt="Image" />
                                <div className="cover">
                                    <p>This is a simple user registration built using JavaScript, HTML and CSS.</p>
                                    <p>You can register a new user, see how many users are registered and the infrormation for each user.</p>
                                    <p>Registering is set with conditions for the password and username.</p>
                                    <p>You caan clear all users.</p>
                                </div>
                            </div>
                            <div className='slide-container'>
                                <img src={vidthree} alt="Image" />
                                <div className="cover">
                                    <p>This is a site for a pet grooming company. Built using JsvaScript, CSS, and HTML.</p>
                                    <p>You can see what services are offered, a little about the company, and register a new pet to be serviced.</p>
                                    <p>You can see all pets that need to be serviced or you can search for specific pets.</p>
                                    <p>You can delete the pet when finished.</p>
                                </div>
                            </div>
                            <div className='slide-container'>
                                <img src={vidfour} alt="Image" />
                                <div className="cover">
                                   <p>This is a simple game built using JavaScript, HTML, and CSS.</p> 
                                   <p>Click attack until the other player is to 0.</p>
                                   <p>Will display which player wins.</p>
                                </div>
                            </div>
                            <div className='slide-container'>
                                <img src={vidfive} alt="Image" />
                                <div className="cover">
                                    <p>A pig latin translator built using React.</p>
                                    <p>You can type in a full sentence or a single word to see its translation.</p>
                                </div>
                            </div>
                    </Carousel>
                 
        </section>
    )
}

