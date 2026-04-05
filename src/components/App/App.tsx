import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getPhotos } from '../../services/photos';
import type { Photo } from '../../types/photo';
import Container from '../Container/Container';
import Form from '../Form/Form';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import PhotosGallery from '../PhotosGallery/PhotosGallery';
import Section from '../Section/Section';
import Text from '../Text/Text';

export default function App() {
  const [photos, SetPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setPhoto(true);
  };

  const closeModal = () => {
    setPhoto(false);
    setSelectedPhoto(null);
  };

  const handleSubmit = async (query: string) => {
    try {
      SetPhotos([]);
      setLoading(true);
      setIsError(false);
      const fetchPhotos = await getPhotos(query);
      if (fetchPhotos.length === 0) {
        toast.error('There are no photos');
      }

      SetPhotos(fetchPhotos);
    } catch {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  console.log(photos);

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSubmit} />
          {loading && <Loader />}
          {isError && (
            <Text textAlign="center" marginBottom="1rem" isError>
              На жаль, щось пішло не так😢
            </Text>
          )}
          {photos.length > 0 && (
            <PhotosGallery photos={photos} onSelect={openModal} />
          )}

          {photo && selectedPhoto && (
            <Modal onClose={closeModal} movie={selectedPhoto} />
          )}
          <Toaster position="top-center" reverseOrder={false} />
        </Container>
      </Section>
    </>
  );
}
