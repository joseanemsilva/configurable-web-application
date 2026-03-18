import Image from "next/image";
import { type SingleTestimonial } from "@/types/strapi";

interface SingleTestimonialProps {
  singleTestimonial: SingleTestimonial,
}

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

export default function SingleTestimonial({ singleTestimonial }: SingleTestimonialProps ) {
  const { authorName, quote, image, rating } = singleTestimonial;

  let ratingIcons = [];
  for (let index = 0; index < singleTestimonial.rating; index++) {
    ratingIcons.push(
      <span key={index} className="text-primary">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full">
      <div className="shadow-two hover:shadow-one rounded-lg bg-accent1 p-8 duration-300 lg:px-5 xl:px-8">
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="border-body-color/10 text-body-color mb-8 border-b pb-8 text-base leading-relaxed dark:border-white/10 dark:text-white">
          “{singleTestimonial.quote}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-12.5 w-full max-w-12.5 overflow-hidden rounded-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${singleTestimonial.image?.url}`}
              alt={singleTestimonial.image?.alternativeText || "Client Image"}
              fill
              priority
            />
          </div>
          <div className="w-full">
            <h3 className="text-primary mb-1 text-lg font-semibold lg:text-base xl:text-lg dark:text-white">
              {singleTestimonial.authorName}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};