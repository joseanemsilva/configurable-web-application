import Link from "next/link";
import { HeroData } from "@/types/strapi";
import Image from "next/image";
import { getStrapiMediaUrl } from "@/lib/utils";

export default function HeroSection({ data }: { data: HeroData }) {
    return (
        <section className="relative flex w-screen overflow-hidden min-h-screen items-center justify-center font-sans">
            <Image
                src={getStrapiMediaUrl(data.heroImage.url)}
                alt={data.heroImage.alternativeText}
                fill
                preload={true}
                className="object-cover object-center opacity-50 -z-10"
            />

                <div className=" relative z-10 mx-auto max-w-\[800px] text-center">
                    <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">{data.heading}</h1>
                    <p className="mb-12  text-base leading-relaxed! text-gray-700 sm:text-lg md:text-xl">{data.subheading}</p>
                    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Link role="link" href="/contact-us" className="rounded-4xl px-8 py-4 text-base font-semibold btn bg-primary text-background duration-300 ease-in-out hover:bg-primary/80">{data.ctaPrimary}</Link>
                    </div>
                </div>
            </section>
    );
}