type PictureProps = {
  name: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

export function Picture({
  name,
  alt,
  className = "",
  eager = false,
}: PictureProps) {
  return (
    <picture className={`picture ${className}`.trim()}>
      <source srcSet={`/images/${name}.avif`} type="image/avif" />
      <source srcSet={`/images/${name}.webp`} type="image/webp" />
      <img
        src={`/images/${name}.webp`}
        alt={alt}
        width="1600"
        height="1000"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}

