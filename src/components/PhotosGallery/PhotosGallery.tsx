import type { Photo } from '../../types/photo';
import Grid from '../Grid/Grid';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

interface PhotosCalleryProps {
  photos: Photo[];
  onSelect: (photo: Photo) => void;
}

export default function PhotosGallery({
  photos,
  onSelect,
}: PhotosCalleryProps) {
  return (
    <>
      <Grid>
        {photos.map((photo) => (
          <PhotosGalleryItem key={photo.id} photo={photo} onSelect={onSelect} />
        ))}
      </Grid>
    </>
  );
}
