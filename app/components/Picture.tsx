type PictureProps = {
  name: string;
  alt: string;
  className?: string;
  eager?: boolean;
  sizes?: string;
};

export function Picture({
  name,
  alt,
  className = "",
  eager = false,
  sizes = "(max-width: 780px) 100vw, (max-width: 1220px) 50vw, 600px",
}: PictureProps) {
  const srcSet = (format: "avif" | "webp") =>
    [480, 800, 1200]
      .map((width) => `/images/${name}-${width}.${format} ${width}w`)
      .join(", ");

  return (
    <picture className={`picture ${className}`.trim()}>
      <source srcSet={srcSet("avif")} sizes={sizes} type="image/avif" />
      <source srcSet={srcSet("webp")} sizes={sizes} type="image/webp" />
      <img
        src={`/images/${name}-1200.jpg`}
        alt={alt}
        width="1200"
        height="750"
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
