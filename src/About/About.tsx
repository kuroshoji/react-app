import React from "react";

export const About = () => {
  const navigateTo = () => {
    window.location.href = "/";
  };

  return (
    <div>
      About Page
      <button id="navigation-back-btn" onClick={navigateTo}>
        Go back to Home Page
      </button>
    </div>
  );
};
