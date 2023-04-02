import React from 'react';
import './../../styles/about.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About This Project</h1>
      <p className="about-description">
        This project is a simple web application built using React and the JSONPlaceholder API. It allows users to view and search through a collection of user profiles and associated posts. Users can view details about each user, including their name, email address, and company, as well as a list of their posts. The application also features a search bar that allows users to search for specific users by name or email address.
      </p>
      <p className="about-description">
        Thank you for visiting this project and we hope you enjoy using it!
      </p>
    </div>
  );
}

export default About;
