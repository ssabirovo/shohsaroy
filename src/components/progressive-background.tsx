import React, { useState, useEffect, ReactNode } from "react";

interface ProgressiveBackgroundProps {
  lowResImage: string;
  highResImage: string;
  className?: string; // To pass any TailwindCSS classes
  children?: ReactNode;
}

const ProgressiveBackground: React.FC<ProgressiveBackgroundProps> = ({
  lowResImage,
  highResImage,
  className,
  children,
}) => {
  const [bgImage, setBgImage] = useState(lowResImage); // Start with the low-res image
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = highResImage;
    img.onload = () => {
      setBgImage(highResImage); // Switch to high-res image once loaded
      setIsLoaded(true); // Update state to indicate high-res is loaded
    };
  }, [highResImage]);

  return (
    <div
      className={`${className} transition-all duration-500 ease-out`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backdropFilter: isLoaded ? "none" : "blur(20px)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};

export default ProgressiveBackground;
