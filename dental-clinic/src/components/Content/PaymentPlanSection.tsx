import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";


interface ContentType {
    id: number;
    title: string;
    description: string;
    href: string
}

const contents: ContentType[] = [
    { 
        id: 1,
        title: 'Direct Insurance Billing',
        description: 'We offer direct billing to major insurance providers. Contact us for more details.',
        href: '/insurance-billing' 
    },
    { 
        id: 2,
        title: 'CDCP - Canadian Dental Care Plan',
        description: 'We are registered to provide affordable support care for eligible residents.',
        href: 'https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html'
    },
    {
        id: 3,
        title:
        'IFHP - Interim Federal Health Program',
        description: 'We provide essential dental coverage for protected persons and refugees.',
        href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program/coverage-summary.html'
    },
]


const PaymentPlanSection: React.FC = () => {
    return (
        <section className="bg-accent2 text-white lg:py-20 md:py-32 py-16 px-8">
            <SectionTitle
                title="Affordable Smile to Everyone"
                paragraph="We offer a variety of payment options designed to fit your unique household budget."
                center
            />
            
            <div className="sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {contents.map((content) => (
                        <div key={content.id} className="mx-auto flex max-w-xs flex-col gap-y-4 p-4 justify-between">
                            <p className="lg:text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">{content.title}</p>
                            <p className="text-base/7 text-gray-600">
                                {content.description}
                            </p>
                            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-6">
                                <Link href={content.href} className="rounded-4xl px-6 py-2 text-base font-semibold btn bg-primary text-background duration-300 ease-in-out hover:bg-primary/80"> Know More </Link>
                            </div>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>

        </section>
    );
}

export default PaymentPlanSection;
