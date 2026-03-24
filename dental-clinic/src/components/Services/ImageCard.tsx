import Image from "next/image";

interface ImageCardProps {
    src: string;
    alt: string;
}

const ImageCard = ({ src, alt }: ImageCardProps) => {
    return (
        <div className="w-full px-4 lg:w-1/2">
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
            />
        </div>
    );
};

export default ImageCard;