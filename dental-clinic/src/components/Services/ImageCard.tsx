import Image from "next/image";

interface ImageCardProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const ImageCard = ({ src, alt, width, height }: ImageCardProps) => {
    return (
        <div className="w-full px-4 lg:w-1/2">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
            />
        </div>
    );
};

export default ImageCard;