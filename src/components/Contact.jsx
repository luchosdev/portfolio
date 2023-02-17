import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import Button from './layouts/Button';
import InputText from './layouts/InputText';
import TextArea from './layouts/TextArea';

function Contact() {
  const form = useRef();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_b4osqgx',
      'template_gpgd708',
      form.current,
      // eslint-disable-next-line comma-dangle
      'm-DaCE_jupVlbAhfw'
    );

    e.target.reset();

    Toast.fire({
      icon: 'success',
      title: 'Your message was sent.',
    });
  };

  return (
    <section
      id="contact"
      className="mx-3 mb-20 pt-28 dark:opacity-80 xs:pt-20 xs2:mb-0 xs2:pt-8 lg:pt-14"
    >
      <div className="flex-col xs2:flex xs2:items-center">
        <h2 className="font-poppins text-3xl font-extrabold text-blue_1 lg:mb-5 lg:text-5xl">
          Contact
        </h2>
        <p className="sm2:px-30 mx-3 mt-2 font-poppins xs2:mt-0 xs2:px-10 md:text-2xl lg:mb-3">
          If you wan&apos;t to hire me, work with me or you just got some
          questions
          <strong className="ml-2">write me!</strong>
        </p>

        <form
          onSubmit={sendEmail}
          ref={form}
          className="mt-6 flex w-full flex-col rounded-md p-6 shadow-md xs2:mt-2 xs2:w-96 xs2:p-4 sm2:w-[35rem] md:w-[45rem] lg:w-[52rem]"
          style={{ background: '#fff3' }}
        >
          <InputText placeholder="Your Name *" name="name" type="text" />
          <InputText placeholder="Email *" name="email" type="email" />
          <TextArea placeholder="Message" Style="h-40" name="message" />
          <Button label="Send" Style="text-center" type="submit" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
