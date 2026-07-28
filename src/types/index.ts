export type MenuCategory =
  | "Café"
  | "Bebidas frías"
  | "Té"
  | "Pastelería"
  | "Especiales de temporada";

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  hours: { label: string; value: string }[];
  parking: string;
  mapsUrl: string;
}

export interface GalleryImage {
  id: string;
  image: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
  postUrl: string;
}
