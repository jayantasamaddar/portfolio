import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Meta, Button, Error } from '../components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const notify = (type, message) => {
    return toast[type](message, {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
    });
  };

  const onSubmit = async formData => {
    try {
      const { status } = await axios.post('/api/contact', formData);
      if (status === 200) {
        reset();
        notify('success', 'Your message has been submitted.');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Meta
        title="Jayanta Samaddar | Contact"
        description="Jayanta Samaddar's blog featuring Creative Direction, Full Stack Development and Entrepreneurship."
        keywords="creative director, entrepreneur, full stack developer, web developer, react, nextjs, mongodb, expressjs"
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="contact__body main-content flex flex-col bg-black">
        <section className="contact__introduction p-10">
          <h1 className="text-center text-gray-400">
            How can I help you today?
          </h1>
        </section>
        <section className="contact__form flex flex-col p-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-10 md:px-[20%]"
          >
            <div className="contact_form--group flex flex-wrap gap-8 md:gap-10">
              <div className="contact__form--name flex flex-col gap-2 grow">
                <label className="contact__label" htmlFor="contact_name">
                  Name
                </label>
                <input
                  id="contact_name"
                  className={`contact__input ${
                    errors?.Name ? 'focus:ring-2 focus:ring-red-500' : ''
                  }`}
                  name="name"
                  type="text"
                  {...register('name', {
                    required: { value: true, message: 'Name is required' },
                    maxLength: 100,
                    pattern: {
                      value: /^[A-Za-z ]+$/i,
                      message: 'Name can only contain alphabets and spaces',
                    },
                  })}
                />
                {errors?.name?.message && <Error>{errors.name.message}</Error>}
              </div>

              <div className="contact__form--email flex flex-col gap-2 grow">
                <label className="contact__label" htmlFor="contact_email">
                  Email
                </label>
                <input
                  id="contact_email"
                  className={`contact__input ${
                    errors?.Email ? 'focus:ring-2 focus:ring-red-500' : ''
                  }`}
                  name="email"
                  type="email"
                  {...register('email', {
                    required: { value: true, message: 'Email is required' },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Email is invalid',
                    },
                  })}
                />
                {errors?.email?.message && (
                  <Error>{errors.email.message}</Error>
                )}
              </div>
            </div>

            <div className="contact__form--message flex flex-col gap-2">
              <label className="contact__label" htmlFor="contact_message">
                Message
              </label>
              <textarea
                id="contact_message"
                className={`contact__input h-40 ${
                  errors?.message ? 'focus:ring-2 focus:ring-red-500' : ''
                }`}
                name="message"
                {...register('message', {
                  required: { value: true, message: 'Message is required' },
                  minLength: {
                    value: 30,
                    message: 'Message should be at least 30 characters',
                  },
                  maxLength: {
                    value: 1000,
                    message: 'Reached character limit',
                  },
                })}
              />
              {errors?.message?.message && (
                <Error>{errors.message.message}</Error>
              )}
            </div>

            <div className="contact__form--submit flex flex-col gap-2 md:px-20 lg:px-40">
              <Button className="py-5" type="submit" primary>
                Submit
              </Button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
