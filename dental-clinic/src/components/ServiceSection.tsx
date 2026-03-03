import Link from "next/link";

export default function ServiceSection() {
  return (
    <div className="py-24 sm:py-32 grid h-screen place-items-center">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-2">
            <div className="max-w-xl">
                <h2 className="lg:text-5xl font-bold tracking-tight text-pretty text-black sm:text-4xl">
                Expert Dentistry to Every Generation
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600">
                From a toddler’s very first check-up to specialized restorative care for seniors, we are proud to be a home for every smile. We understand that dental needs change as you grow, which is why our team is trained in all-age smile care. We provide a gentle, stress-free environment designed to make children feel brave and adults feel relaxed.
                </p>
                <div className="flex flex-col items-center justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-6">
                    <Link href="/contact-us" className="rounded-4xl px-8 py-4 text-base font-semibold btn bg-primary text-background duration-300 ease-in-out hover:bg-primary/80">Explore All Services</Link>
                </div>
            </div>
            <div className="size-fit overflow-hidden rounded-xl shadow-lg ring-1 ring-gray-900/10">
                <img
                src="https://wildwooddentalclinic.com/wp-content/uploads/2018/08/family-dentistry.jpg"
                alt="Product screenshot"
                className="rounded-xl shadow-lg ring-1 ring-gray-900/10"
                />
            </div>
        </div>
    </div>
  )
}