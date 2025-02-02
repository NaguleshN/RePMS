// src/components/Timeline.js
import React from 'react';
import '../styles/Timeline.css'; // Import the CSS for styling
import timeimg from "../assets/re7.webp"; // Ensure this path is correct

function Timeline() {
    const reviews = {
        zeroth: {
            title: "Zeroth Review",
            description: "The Zeroth Review focuses on initial project ideas and concepts. This stage allows for brainstorming and refining ideas before moving forward.",
            image: timeimg,
        },
        first: {
            title: "First Review",
            description: "The First Review assesses the feasibility of the proposed project. Feedback is provided to enhance project viability.",
            image: timeimg,
        },
        second: {
            title: "Second Review",
            description: "The Second Review evaluates the progress made on the project. Adjustments are made based on mentor feedback.",
            image: timeimg,
        },
        final: {
            title: "Final Review",
            description: "The Final Review is the culmination of the project. Students present their work and receive final evaluations.",
            image: timeimg,
        },
    };

    return (
        <section className="timeline-section">
            <h2 className="timeline-title">Project Timeline</h2>
            <div className="timeline-items">
                {Object.keys(reviews).map((review) => (
                    <div key={review} className="timeline-item">
                        <div className="circle"></div>
                        <div className="line"></div>
                        <div className="timeline-text">
                            <h3>{reviews[review].title}</h3>
                            <p>{reviews[review].description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Timeline;
