const Contact = () => {
    return (
        <section class="contact-me" id="contact-me">
            <div class="form-container">
                <h2 class="title">Contact me</h2>
                <p class="text">
                    If you wan't to hire me, work with me or you just got some questions
                    <strong>write me!</strong>
                </p>

                <form id="contact-form" method="POST" class="contact">
                    <div class="item name">
                        <label for="name" class="item__title">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            class="item__input"
                            autocomplete="name"
                            placeholder="Luis O. Sequera C."
                            required
                        />
                    </div>

                    <div class="item email">
                        <label for="email" class="item__title">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="item__input"
                            autocomplete="email"
                            placeholder="example@mail.com"
                            required
                        />
                    </div>

                    <div class="item subject">
                        <label for="subject" class="item__title">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            class="item__input"
                            placeholder="Job offer"
                            required
                        />
                    </div>

                    <div class="item message">
                        <label for="message" class="item__title">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            class="item__input"
                            placeholder="Message..."
                            required
                        ></textarea>
                    </div>

                    <input type="submit" id="submit" class="primary-button" value="Send" />
                </form>

                <dialog id="form-success" class="modal succesful">
                    <div class="modal__content">
                        <i class="icon-check modal__icon"></i>
                        <h2 class="modal__title">Email sent</h2>
                    </div>
                </dialog>

                <dialog id="form-error" class="modal error">
                    <div class="modal__content">
                        <i class="icon-cross modal__icon"></i>
                        <h2 class="modal__title">Something went wrong!</h2>
                    </div>
                </dialog>

                <dialog id="form-incomplete" class="modal error">
                    <div class="modal__content">
                        <i class="icon-cross modal__icon"></i>
                        <h2 class="modal__title">You must fill all the gaps</h2>
                    </div>
                </dialog>
            </div>
        </section>
    );
};

export { Contact };
