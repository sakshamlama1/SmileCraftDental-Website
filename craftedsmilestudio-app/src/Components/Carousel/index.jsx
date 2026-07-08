import React, { useEffect, useRef } from "react";
import "./index.css";

function Carousel({ images, step = 5, speed = 1 }) {
  // `speed` controls pixels per frame (smaller = slower)
  const trackRef = useRef(null);

  // Duplicate images twice for seamless looping
  const extendedImages = [...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;

    const totalWidth = track.scrollWidth / 2; // width of the original set

    let lastTime = performance.now();

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      // Move slowly in pixels
      position += (speed * delta) / 16; // scale movement for frame delta

      if (position >= totalWidth) {
        // Seamless loop: subtract original width
        position -= totalWidth;
      }

      track.style.transform = `translateX(-${position}px)`;
      track.style.transition = "transform 0s linear"; // no transition needed, handled by requestAnimationFrame

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [images, step, speed, extendedImages.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <div className="carousel-text-container">
          <h2>TRANSFORMATIONS THAT SPEAK FOR THEMSELVES</h2>
          <p>SEE REAL SMILES FROM REAL PATIENTS - BEFORE AND AFTER THEIR DENTAL TREATMENTS</p>

          <div className="carousel-viewport">
            <div className="carousel-track" ref={trackRef}>
              {extendedImages.map((img, i) => (
                <div className="carousel-item" key={i}>
                  <img src={img} alt={`Smile ${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
