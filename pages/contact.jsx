import { useState } from 'react';
import { Meta, Button } from '../components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) =>
    setFormData({ ...formData, [name]: value });

  return (
    <>
      <Meta
        title="Jayanta Samaddar | Contact"
        description="Jayanta Samaddar's blog featuring Creative Direction, Full Stack Development and Entrepreneurship."
        keywords="creative director, entrepreneur, full stack developer, web developer, react, nextjs, mongodb, expressjs"
      />
      <div className="contact__body main-content flex flex-col">
        <section className="contact__introduction p-10">
          <h1 className="text-center">
            Thanks for taking the time to reach out. How can I help you today?
          </h1>
        </section>
        <section className="contact__form p-10">
          <form className="flex flex-col gap-10 md:px-[20%]">
            <div className="contact_form--group flex flex-wrap gap-8 md:gap-10">
              <div className="contact__form--name flex flex-col gap-2 grow">
                <label className="contact__label">Name</label>
                <input
                  className="contact__input"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__form--email flex flex-col gap-2 grow">
                <label className="contact__label">Email</label>
                <input
                  className="contact__input"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact__form--message flex flex-col gap-2">
              <label className="contact__label">Message</label>
              <textarea
                className="contact__input h-40"
                name="message"
                type="text"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="contact__form--submit flex flex-col gap-2 md:px-20 lg:px-40">
              <Button
                title="Submit"
                type="submit"
                className="contact__submit border-2 py-5 rounded-full text-base"
              />
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
