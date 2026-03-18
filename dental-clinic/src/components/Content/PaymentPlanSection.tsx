import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { type PaymentPlanData } from "@/types/strapi";

interface PaymentPlanSectionProps {
    paymentPlan: PaymentPlanData;
}

export default function PaymentPlanSection({ paymentPlan }: PaymentPlanSectionProps) {
    return (
        <section className="bg-accent2 text-white lg:py-20 md:py-32 py-16 px-8">
            <SectionTitle
                sectionTitleData = {paymentPlan.sectionTitle}
                center
            />

            <div className="sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {paymentPlan.contents.map((content) => (
                        <div key={content.id} className="mx-auto flex max-w-xs flex-col gap-y-4 p-4 justify-between">
                            <p className="lg:text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">{content.title}</p>
                            <p className="text-base/7 text-gray-600">
                                {content.description}
                            </p>
                            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-6">
                                <Link href={content.link} className="rounded-4xl px-6 py-2 text-base font-semibold btn bg-primary text-background duration-300 ease-in-out hover:bg-primary/80">{content.ctaPrimary}</Link>
                            </div>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
