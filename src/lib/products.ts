import data from './products.json';
import { placeholderImages, type ImagePlaceholder } from './placeholder-images';

export type ProductSpecification = {
  name: string;
  value: string;
};

export type ProductReview = {
  id: number;
  rating: number;
  author: string;
  date: string;
  comment: string;
};

export type Product = {
  id: number;
  name: string;
  rating: number;
  reviewsCount: number;
  price?: number;
  salePrice?: number;
  shortDescription?: string;
  availability?: string;
  image: string; // id from placeholderImages
  gallery: string[]; // array of ids from placeholderImages
  features: string[];
  longDescription?: string;
  specifications?: ProductSpecification[];
  userReviews?: ProductReview[];
  mg?: number; // from old structure
};

type ProductData = {
  products: Product[];
};

const productData: ProductData = data;

// Replace image and gallery IDs with actual image objects
export const products: (Omit<Product, 'image' | 'gallery'> & { image: ImagePlaceholder | undefined, gallery: (ImagePlaceholder | undefined)[] })[] = productData.products.map(product => {
  const mainImage = placeholderImages.find(p => p.id === product.image);
  const galleryImages = product.gallery.map(id => placeholderImages.find(p => p.id === id));
  return {
    ...product,
    image: mainImage,
    gallery: galleryImages,
  };
});
