import Button from './layouts/Button';
import InputText from './layouts/InputText';
import TextArea from './layouts/TextArea';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
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
        console.log('It works!');
        e.preventDefault();

        emailjs.sendForm('service_b4osqgx', 'template_gpgd708', form.current, 'm-DaCE_jupVlbAhfw');

        e.target.reset();

        Toast.fire({
            icon: 'success',
            title: 'Your message was sent.',
        });
    };

    return (
        <section id="contact" className="mx-3 pt-28 xs:pt-20 xs2:pt-8 lg:pt-14 mb-20 xs2:mb-0">
            <div className="xs2:flex flex-col xs2:items-center">
                <h2 className="font-poppins font-extrabold text-blue_1 text-3xl lg:text-5xl lg:mb-5">
                    Contact
                </h2>
                <p className="font-poppins md:text-2xl mt-2 xs2:mt-0 mx-3 xs2:px-10 sm2:px-30 lg:mb-3">
                    If you wan't to hire me, work with me or you just got some questions
                    <strong className="ml-2">write me!</strong>
                </p>

                <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="flex flex-col mt-6 xs2:mt-2 p-6 xs2:p-4 xs2:w-96 sm2:w-[35rem] md:w-[45rem] lg:w-[52rem] rounded-md shadow-md w-full"
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
};

export { Contact };
