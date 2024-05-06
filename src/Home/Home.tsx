import React from "react";

export const Home = () => {
  const navigateTo = () => {
    window.location.href = "/about";
  };

  return (
    <div>
      Home Page
      <button id="navigation-btn" onClick={navigateTo}>
        Go to About Page
      </button>
    </div>
  );
};
