export default function SquareImage({ src, alt }) {
    return (
        <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1 / 1",
          overflow: "hidden",
          borderRadius: "16px"
        }}
      >
        {/* Blurred Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(15px)",  // Blur only the background
            transform: "scale(1.1)",  // Slightly scale up to avoid edges showing through
          }}
        />
  
        {/* Main Image */}
        <img
          src={src}
          alt={alt}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            objectFit: "contain",  // Contain the main image
          }}
        />
      </div>
    );
  }