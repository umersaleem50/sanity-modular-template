type NonAnimatedProps = {
  classNameH2?: string;
  classNameP?: string;
  title: string;
  description: string;
  animated?: boolean;
};

export default function NonAnimated({
  classNameH2,
  classNameP,
  title,
  description,
}: NonAnimatedProps) {
  return (
    <>
      <h2
        className={`mb-4 text-3xl font-bold text-foreground lg:text-4xl ${classNameH2 ?? ""}`}
      >
        {title}
      </h2>
      <p
        className={`mx-auto max-w-2xl text-lg text-foreground/70 ${classNameP ?? ""}`}
      >
        {description}
      </p>
    </>
  );
}
