import React from 'react';

const Skillset = ({ icon, title, className, children }) => {
  return (
    <div
      className={`skillset basis-1/3 flex-col flex-wrap justify-center items-center px-10 py-20 ${
        className || ''
      }`}
    >
      <div className="skillset--icon">{icon}</div>
      <div className="skillset--title text-center">
        <h1>{title}</h1>
      </div>
      <div className="skillset--details py-4">{children}</div>
    </div>
  );
};

export default Skillset;
