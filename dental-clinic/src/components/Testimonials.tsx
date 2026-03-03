import SectionTitle from "./elements/SectionTitle";
import SingleTestimonial from "@/components/SingleTestimonial";

interface Testimonial {
  id: number;
  name: string;
  content: string;
  image: string;
  star: number;
};

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Maria S",
    content:
      "The best dental experience I've ever had. Being able to explain my symptoms in Portuguese made me feel so much more at ease. Highly recommend!",
    image: "/user.jpg",
    star: 5,
  },
  {
    id: 2,
    name: "James R",
    content:
      "Finally, a dentist open on Sundays! The direct billing was seamless, and the staff was incredibly professional. I fell that I was in good hands the entire time.",
    image: "/user.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "Franttini M",
    content:
      "I was really impressed with the level of care and attention I received. The fact that they offer direct billing made the whole process so much easier.",
    image: "/user.jpg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container mx-auto">
            <SectionTitle
                title="What Our Patients Says"
                paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
                center
            />

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"> {testimonialData.map((testimonial) => (
                <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
            ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;