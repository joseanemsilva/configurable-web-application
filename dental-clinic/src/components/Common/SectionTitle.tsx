
const SectionTitle: React.FC <{
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}> = ({
  title,
  paragraph,
  width = "700px",
  center,
  mb = "60px",
  
}: {
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
        <div className={`w-full ${center ? "mx-auto" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }} >
            <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] text-center">
                {title}
            </h2>
            <p className="text-base leading-relaxed! text-black md:text-lg">
                {paragraph}
            </p>
        </div>
    </>
  );
};

export default SectionTitle;