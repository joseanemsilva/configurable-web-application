'use client';

import Link from "next/link";

const Hero: React.FC = () => {
    return (
        <>
            <section className="relative z-10 overflow-hidden flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <div className="mx-auto max-w-\[800px] text-center">
                    <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">Welcome to our Dental Clinic</h1>
                    <p className="mb-12  text-base leading-relaxed! text-gray-700 sm:text-lg md:text-xl">Your smile is our priority. We offer comprehensive dental care for the whole family.</p>
                    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Link href="/contact-us" className="rounded-4xl px-8 py-4 text-base font-semibold btn bg-primary text-background duration-300 ease-in-out hover:bg-primary/80">Schedule Your Visit</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;