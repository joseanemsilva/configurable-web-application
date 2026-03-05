import Link from "next/link";
import Image from "next/image";

interface TeamType {
    id: number;
    name: string;
    designation: string;
    image: string;
    bio?: string;
};


const SingleTeam = ({ team }: { team: TeamType }) => {
    const { image, name, designation, bio } =
        team;
    return (
        <section className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="group mb-8 rounded-xl bg-white pb-4 pt-12 dark:bg-dark dark:shadow-none shadow-sm">

                <div className="relative z-10 mx-auto mb-16 h-50 w-50">
                    <Image
                        src={image}
                        alt={name}
                        className="w-full object-cover"
                        width={200}
                        height={200}
                    />
                </div>

                <div className="text-center">
                    <h3 className="mb-1 text-lg font-semibold text-primary dark:text-white">
                        {name}
                    </h3>
                    <p className="mb-3 text-sm text-black">
                        {designation}
                    </p>
                    <p className="text-base text-black px-6 text-justify">
                        {bio}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SingleTeam;