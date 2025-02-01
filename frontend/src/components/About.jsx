// src/components/About.js
import React from 'react';
import '../styles/About.css'; // Import the CSS for styling
import aboutImage from '../assets/re6.webp'; // Import the image
import Navbar from './Navbar';

function About() {
    return (
        <> <Navbar />
        {/* <section id="about" className="about-section">
            <div className="container section-title">
                <h2>About Us</h2>
            </div>
            <div className="container">
                <div className="row align-items-center about-content">
                    <div className="col-md-5 d-flex align-items-center">
                        <img src={aboutImage} className="img-fluid about-image" alt="About Ré" />
                    </div>
                    <div className="col-md-7">
                        <h3>At Ré,</h3>
                        <p className="about-description">
                            Welcome to Ré, the epicenter of innovation and research at Kumaraguru Institutions. Our mission is to fuel the spirit of inquiry, driving students to push boundaries and transform their ideas into impactful solutions. At Ré, we believe that every student harbors the potential to pioneer advancements and create a sustainable future.
                        </p>
                        <ul className="about-list">
                            <li><strong>Igniting Curiosity and Exploration:</strong> We foster a culture that encourages students to explore, innovate, and excel in their respective fields.</li>
                            <li><strong>Bridging Knowledge and Real-World Applications:</strong> Our platform provides students with resources and mentorship from seasoned researchers and industry experts.</li>
                            <li><strong>Fostering Collaboration and Innovation:</strong> Through interdisciplinary teamwork, students are equipped to tackle complex challenges and contribute to society's progress.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section> */}

        <section>
            <div className="bg-white">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="grid sm:gap-6 lg:gap-8">
                        <img src="https://kctcse.wordpress.com/wp-content/uploads/2016/01/kct.jpg?w=579" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100" />
                    </div>
                    <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">At Ré,</h2>
                    <p className="mt-4 text-gray-700"> Welcome to Ré, the epicenter of innovation and research at Kumaraguru Institutions. Our mission is to fuel the spirit of inquiry, driving students to push boundaries and transform their ideas into impactful solutions. At Ré, we believe that every student harbors the potential to pioneer advancements and create a sustainable future.

                        </p>
                        <ul className="about-list mt-4 text-gray-700">
                            <li><strong>Igniting Curiosity and Exploration:</strong> We foster a culture that encourages students to explore, innovate, and excel in their respective fields.</li>
                            <li><strong>Bridging Knowledge and Real-World Applications:</strong> Our platform provides students with resources and mentorship from seasoned researchers and industry experts.</li>
                            <li><strong>Fostering Collaboration and Innovation:</strong> Through interdisciplinary teamwork, students are equipped to tackle complex challenges and contribute to society's progress.</li>
                        </ul>
                    </div>
                    
                </div>
                </div>
            </section>

        </>
    );
}

export default About;
