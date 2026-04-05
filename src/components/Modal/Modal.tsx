import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Photo } from '../../types/photo';
import styled from './Modal.module.css';

interface PhotoModalProps {
  movie: Photo;
  onClose: () => void;
}

export default function Modal({ onClose, movie }: PhotoModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      className={styled.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className={styled.modal}>
        <button
          className={styled.closeButton}
          aria-label="Close modal"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={movie.src.original} alt={movie.alt} />
        <p>Фото #{movie.id}</p>
        <p>{movie.alt}</p>
      </div>
    </div>,
    document.body,
  );
}
