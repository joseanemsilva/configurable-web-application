import SectionTitle from "@/components/Common/SectionTitle";
import SingleTestimonial from "@/components/Testimonials/SingleTestimonial";
import { type TestimonialData } from "@/types/strapi";

interface TestimonialsProps {
  testimonials: TestimonialData,
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 md:py-20 lg:py-28 px-8 py-16">
      <div className="container mx-auto">
        <SectionTitle
          sectionTitleData={testimonials.sectionTitle}
          center
        />

        {/* Single Testimonial */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mt-20"> {testimonials.testimonials.map((testimonial) => (
          <SingleTestimonial
          singleTestimonial={testimonial}
          key={testimonial.id}/>
        ))}
        </div>

      </div>
    </section>

  );
}