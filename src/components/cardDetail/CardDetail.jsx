import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CardDetail.css";
import PhotoGallery from "../photoGallery/PhotoGallery";

function CardDetail({ heading, onClose , images, onOutsideClick}) {
  return (
    <AnimatePresence>
      <motion.div
        className="card-detail"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <button onClick={onClose} className="close-button">
        <span className="close-icon">x</span>
        </button>
        <div className="card-content">
        <h2>{heading}</h2>
          <p>
            Aqui está um resumo da história do ministério de louvor da Igreja Batista Comunhão: [Texto do resumo da história aqui.]
          </p>
          <PhotoGallery images={images} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CardDetail;
