// src/components/ImageGallery.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './ImageGallery.css';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { cert1, cert2, cert3, cert4, pdf1, pdf2, pdf3, pdf4 } from "../assets";

const images = [
  { src: cert1, alt: 'Image 1', link: pdf1 },
  { src: cert2, alt: 'Image 2', link: pdf2 },
  { src: cert3, alt: 'Image 3', link: pdf3 },
  { src: cert4, alt: 'Image 4', link: pdf4 },
  // Add more images as needed
];

const ImageGallery = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Explore my certifications below</p>
        <h2 className={`${styles.sectionHeadText}`}>Gallery.</h2>
      </motion.div>
      <motion.p>
        <div className="gallery mt-20">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={image.alt} />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.p>
    </>
  );
};

export default SectionWrapper(ImageGallery, "gallery");
