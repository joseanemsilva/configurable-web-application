import { type ContactForm } from "@/types/strapi"

interface ContactFormProps {
    contactForm: ContactForm;
}


export default function ContactForm({ contactForm }: ContactFormProps) {
    return (
        // TODO: FORM VALIDATION
        <div className="w-full px-4 lg:w-5/12 xl:w-5/12">
            <div
                className="wow fadeInUp rounded-lg bg-white px-8 py-10 sm:px-10 sm:py-12 md:p-15 lg:p-10 lg:px-10 lg:py-12 2xl:p-15 shadow-lg"
                data-wow-delay=".2s"
            >
                <h3 className="mb-8 text-2xl font-semibold text-dark md:text-[28px] md:leading-[1.42]">
                    {contactForm.title}
                </h3>
                <form>
                    <div className="mb-5.5">
                        <label
                            htmlFor="fullName"
                            className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                            {contactForm.fullName.label}
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder={contactForm.fullName.placeholder}
                            className="w-full border-0 border-b border-accent2 bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                    </div>
                    <div className="mb-5.5">
                        <label
                            htmlFor="email"
                            className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                            {contactForm.email.label}
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder={contactForm.email.placeholder}
                            className="w-full border-0 border-b border-accent2 bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                    </div>
                    <div className="mb-5.5">
                        <label
                            htmlFor="phoneNumber"
                            className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                            {contactForm.phoneNumber.label}
                        </label>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder={contactForm.phoneNumber.placeholder}
                            className="w-full border-0 border-b border-accent2 bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        />
                    </div>
                    <div className="mb-7.5">
                        <label
                            htmlFor="message"
                            className="mb-4 block text-sm text-body-color dark:text-dark-6"
                        >
                            {contactForm.message.label}
                        </label>
                        <textarea
                            name="message"
                            rows={1}
                            placeholder={contactForm.message.placeholder}
                            className="w-full resize-none border-0 border-b border-accent2 bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                        ></textarea>
                    </div>
                    <div className="mb-0">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center font-semibold rounded-4xl  bg-primary px-10 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-primary/90 "
                        >
                            {contactForm.submit}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}