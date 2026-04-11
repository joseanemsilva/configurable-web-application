'use client';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Link, usePathname } from '@/app/navigation';
import { cn } from '@/lib/utils';

interface LinkType {
    locale: string;
    label: string;
}

const localeLink: LinkType[] = [
    {
        locale:"en",
        label:"EN"
    },
    {
        locale:"pt-BR",
        label:"PT"
    }
]


const LocaleSwitcher: React.FC = () => {
    const pathName = usePathname();
    const locale = useLocale();

  return (
    <div className="flex rounded-4xl bg-primary/50 p-0.5 max-w-fit">
        {localeLink.map((link) =>
            <Link role="link"  key={link.locale} href={pathName} locale={link.locale}>
            <div className={cn("flex items-center justify-center w-12 cursor-pointer rounded-4xl px-4 py-1 text-base font-semibold text-background duration-300 ease-in-out", (locale === link.locale) ? "bg-primary/80" : "")}>
                {link.label}
            </div>
        </Link>
        )}
    </div>
  );
};

export default LocaleSwitcher;