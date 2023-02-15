import { NavItem } from '../../..';

export const Skill = ({
  icon,
  title,
  className,
  description,
  focus,
  tools,
  others,
}) => {
  return (
    <article
      className={`JS-Skill basis-1/3 flex-col flex-wrap justify-center items-center px-8 md:px-10 py-20 ${
        className ?? ''
      }`}
    >
      {icon && <div className="JS-SkillIcon">{icon}</div>}
      <div className="JS-SkillTitle text-center">
        <h3 className="text-3xl">{title}</h3>
      </div>
      <section className="JS-SkillDetails py-4">
        <p>{description}</p>
        <h5 className="py-4">Focus Areas:</h5>
        <p className="">{focus}</p>
        <h5 className="py-8">Tools I have worked with:</h5>
        <ul className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
          {tools.map(({ title, icon }, indx) => (
            <NavItem
              className="text-2xl p-3 rounded-full border border-slate-600 hover:bg-slate-200 hover:transition-colors hover:duration-300"
              key={indx}
              name={title}
              icon={icon}
              unlink
            />
          ))}
        </ul>
        {others && (
          <>
            <h5 className="py-8">Other tooling I've worked with:</h5>
            <ul>
              {others.map(other => (
                <li key={other}>{other}</li>
              ))}
            </ul>
          </>
        )}
      </section>
    </article>
  );
};
