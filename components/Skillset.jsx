import React from 'react';

const Skillset = ({ icon, title, className, children }) => {
  return (
    <article
      className={`JS-Skillset basis-1/3 flex-col flex-wrap justify-center items-center px-10 py-20 ${
        className ?? ''
      }`}
    >
      <div className="JS-SkillsetIcon">{icon}</div>
      <div className="JS-SkillsetTitle text-center">
        <h3 className="text-3xl">{title}</h3>
      </div>
      <section className="JS-SkillsetDetails py-4">{children}</section>
    </article>
  );
};

export default Skillset;
