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
        <section className="mx-3 mt-5">
            <div>
                <h2 className="font-poppins font-bold text-2xl">Contact me</h2>
                <p className="font-poppins mt-2 mx-3">
                    If you wan't to hire me, work with me or you just got some questions
                    <strong className="ml-2">write me!</strong>
                </p>

                <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="flex flex-col mt-6 p-6 rounded-md shadow-md w-full"
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
