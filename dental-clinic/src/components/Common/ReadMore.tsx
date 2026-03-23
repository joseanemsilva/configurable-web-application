import { useState } from "react";

interface ReadMoreProps {
    aria: string,
    text: string,
    maxLength?: number
}

export const ReadMore = ({ aria, text, maxLength = 36 }: ReadMoreProps) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    }

    const displayText = isExpanded ? text : `${text.slice(0, maxLength)}...`;

    const needsButton = text.length > maxLength;

    return (
        <div className="flex items-center justify-center flex-col lg:w-3/4  md:w-full p-2">
            <p className="text-base leading-relaxed! text-black md:text-lg mb-6">
                {displayText}
            </p>
                {needsButton && (
                    <button
                        className = "rounded-4xl px-6 py-2 text-base font-semibold btn bg-primary text-background duration-300 ease-in-out hover:bg-primary/80 mb-6 cursor-pointer"
                        type="button"
                        onClick={toggleReadMore}
                        aria-controls={aria}
                        aria-expanded={isExpanded}
                        >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                )}
        </div>
    );
}