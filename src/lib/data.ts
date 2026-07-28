import type { MenuItem, Testimonial, Location, GalleryImage } from "@/types";

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const menuItems: MenuItem[] = [
  {
    id: "m1",
    category: "Café",
    name: "Alas Signature",
    description: "Espresso de origen único, notas a caramelo y cacao tostado.",
    price: "$3.800",
    image: img("photo-1495474472287-4d71bcdd2085"),
  },
  {
    id: "m2",
    category: "Café",
    name: "Flat White",
    description: "Doble espresso con leche vaporizada en textura de seda.",
    price: "$4.200",
    image: img("photo-1512568400610-62da28bc8a13"),
  },
  {
    id: "m3",
    category: "Café",
    name: "Pour Over",
    description: "Método V60, grano de temporada, taza limpia y floral.",
    price: "$4.600",
    image: img("photo-1509042239860-f550ce710b93"),
  },
  {
    id: "m4",
    category: "Bebidas frías",
    name: "Cold Brew de la Casa",
    description: "16 horas de infusión en frío. Suave, dulce, sin amargor.",
    price: "$4.500",
    image: img("photo-1461023058943-07fcbe16d735"),
  },
  {
    id: "m5",
    category: "Bebidas frías",
    name: "Latte Helado de Vainilla",
    description: "Espresso, leche fría y vainilla natural de Madagascar.",
    price: "$4.900",
    image: img("photo-1541167760496-1628856ab772"),
  },
  {
    id: "m6",
    category: "Té",
    name: "Té Matcha Ceremonial",
    description: "Matcha japonés batido a mano, leche de avena opcional.",
    price: "$4.700",
    image: img("photo-1515823064-d6e0c04616a7"),
  },
  {
    id: "m7",
    category: "Té",
    name: "Infusión de Manzanilla y Miel",
    description: "Flores de manzanilla, miel local y un toque de limón.",
    price: "$3.900",
    image: img("photo-1499636136210-6f4ee915583e"),
  },
  {
    id: "m8",
    category: "Pastelería",
    name: "Croissant de Mantequilla",
    description: "Horneado cada mañana, 48 horas de fermentación.",
    price: "$3.200",
    image: img("photo-1509440159596-0249088772ff"),
  },
  {
    id: "m9",
    category: "Pastelería",
    name: "Banana Bread Artesanal",
    description: "Receta de la casa con nuez tostada y canela.",
    price: "$3.600",
    image: img("photo-1606313564200-e75d5e30476c"),
  },
  {
    id: "m10",
    category: "Especiales de temporada",
    name: "Latte de Cardamomo",
    description: "Edición limitada. Especias cálidas, espuma sedosa.",
    price: "$5.100",
    image: img("photo-1541167760496-1628856ab772"),
  },
  {
    id: "m11",
    category: "Especiales de temporada",
    name: "Affogato de Temporada",
    description: "Espresso caliente sobre helado artesanal de la casa.",
    price: "$5.400",
    image: img("photo-1544787219-7f47ccb76574"),
  },
];


export const menuCategories = [
  "Café",
  "Bebidas frías",
  "Té",
  "Pastelería",
  "Especiales de temporada",
] as const;

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "No vengo solo por el café. Vengo porque aquí las conversaciones se sienten distintas, más lentas, más reales.",
    name: "Camila Reyes",
    role: "Diseñadora",
    avatar: img("photo-1544005313-94ddf0286df2", 200),
  },
  {
    id: "t2",
    quote:
      "Es el único lugar donde puedo trabajar toda la mañana sin sentir que estoy invadiendo espacio. Se siente como una segunda casa.",
    name: "Andrés Molina",
    role: "Trabajador remoto",
    avatar: img("photo-1500648767791-00dcc994a43e", 200),
  },
  {
    id: "t3",
    quote:
      "La luz de la mañana entrando por esas ventanas cambia el humor de cualquier día difícil.",
    name: "Sofía Herrera",
    role: "Escritora",
    avatar: img("photo-1487412720507-e7ab37603c6f", 200),
  },
];



export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    image: "/images/instagram/alas-01.jpg",
    alt: "Interior de la cafetería ALAS",
    span: "tall",
    postUrl: "https://www.instagram.com/p/Cm1p43GO-ea/",
  },
  {
    id: "g2",
    image: "/images/instagram/alas-02.jpg",
    alt: "Preparación de café en ALAS",
    span: "normal",
    postUrl: "https://www.instagram.com/p/CoKUZv2uObd/",
  },
  {
    id: "g3",
    image: "/images/instagram/alas-03.jpg",
    alt: "Selección de productos de ALAS",
    span: "wide",
    postUrl: "https://www.instagram.com/p/CoM4RNcO0IN/",
  },
  {
    id: "g4",
    image: "/images/instagram/alas-04.jpg",
    alt: "Detalle del espacio de ALAS",
    span: "normal",
    postUrl: "https://www.instagram.com/p/DOlaskDDY6v/",
  },
  {
    id: "g5",
    image: "/images/instagram/alas-05.jpg",
    alt: "Café preparado por ALAS",
    span: "normal",
    postUrl: "https://www.instagram.com/p/CklJdm7OgS3/",
  },
  {
    id: "g6",
    image: "/images/instagram/alas-06.jpg",
    alt: "Experiencia dentro de la cafetería ALAS",
    span: "wide",
    postUrl: "https://www.instagram.com/p/CouZC3NOlBD/",
  },
  {
    id: "g7",
    image: "/images/instagram/alas-07.jpg",
    alt: "Producto destacado de ALAS",
    span: "normal",
    postUrl: "https://www.instagram.com/p/CpVQLlbuEkp/?img_index=2",
  },
  {
    id: "g8",
    image: "/images/instagram/alas-08.jpg",
    alt: "Momentos compartidos en ALAS",
    span: "tall",
    postUrl: "https://www.instagram.com/p/DJDbvsUuRnb/?img_index=1",
  },
];

export const locations: Location[] = [
  {
    id: "l1",
    name: "ALAS Templo principal",
    address: "Av. Américo Vespucio 2701, Cerrillos.",
    hours: [
      { label: "Mar – Vie – Vie", value: "8:00 am – 22:00 pm" },
    ],
    parking: "Estacionamiento gratuito.",
    mapsUrl: "https://maps.app.goo.gl/MckSiksynxh9DVsP8",
  },
  {
    id: "l2",
    name: "ALAS - Apoquindo",
    address: "Av. Apoquindo 4800, Las Condes.",
    hours: [
      { label: "Jue – Dom", value: "8:00 am – 22:00 pm" },
    ],
    parking: "Estacionamiento público.",
    mapsUrl: "https://maps.app.goo.gl/jRxin5JKrM4f3nZQ8",
  },
];
