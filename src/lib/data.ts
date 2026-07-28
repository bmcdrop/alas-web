import type { MenuItem, Testimonial, Location, GalleryImage } from "@/types";

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const menuItems: MenuItem[] = [
  {
    id: "m1",
    category: "Café",
    name: "Alas Signature",
    description: "Espresso de origen único, notas a caramelo y cacao tostado.",
    price: "$3.80",
    image: img("photo-1495474472287-4d71bcdd2085"),
  },
  {
    id: "m2",
    category: "Café",
    name: "Flat White",
    description: "Doble espresso con leche vaporizada en textura de seda.",
    price: "$4.20",
    image: img("photo-1512568400610-62da28bc8a13"),
  },
  {
    id: "m3",
    category: "Café",
    name: "Pour Over",
    description: "Método V60, grano de temporada, taza limpia y floral.",
    price: "$4.60",
    image: img("photo-1509042239860-f550ce710b93"),
  },
  {
    id: "m4",
    category: "Bebidas frías",
    name: "Cold Brew de la Casa",
    description: "16 horas de infusión en frío. Suave, dulce, sin amargor.",
    price: "$4.50",
    image: img("photo-1461023058943-07fcbe16d735"),
  },
  {
    id: "m5",
    category: "Bebidas frías",
    name: "Latte Helado de Vainilla",
    description: "Espresso, leche fría y vainilla natural de Madagascar.",
    price: "$4.90",
    image: img("photo-1541167760496-1628856ab772"),
  },
  {
    id: "m6",
    category: "Té",
    name: "Té Matcha Ceremonial",
    description: "Matcha japonés batido a mano, leche de avena opcional.",
    price: "$4.70",
    image: img("photo-1515823064-d6e0c04616a7"),
  },
  {
    id: "m7",
    category: "Té",
    name: "Infusión de Manzanilla y Miel",
    description: "Flores de manzanilla, miel local y un toque de limón.",
    price: "$3.90",
    image: img("photo-1499636136210-6f4ee915583e"),
  },
  {
    id: "m8",
    category: "Pastelería",
    name: "Croissant de Mantequilla",
    description: "Horneado cada mañana, 48 horas de fermentación.",
    price: "$3.20",
    image: img("photo-1509440159596-0249088772ff"),
  },
  {
    id: "m9",
    category: "Pastelería",
    name: "Banana Bread Artesanal",
    description: "Receta de la casa con nuez tostada y canela.",
    price: "$3.60",
    image: img("photo-1606313564200-e75d5e30476c"),
  },
  {
    id: "m10",
    category: "Especiales de temporada",
    name: "Latte de Cardamomo",
    description: "Edición limitada. Especias cálidas, espuma sedosa.",
    price: "$5.10",
    image: img("photo-1541167760496-1628856ab772"),
  },
  {
    id: "m11",
    category: "Especiales de temporada",
    name: "Affogato de Temporada",
    description: "Espresso caliente sobre helado artesanal de la casa.",
    price: "$5.40",
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

export const locations: Location[] = [
  {
    id: "l1",
    name: "ALAS · Centro",
    address: "Av. de las Flores 214, entre calle Roble y calle Jazmín",
    hours: [
      { label: "Lun – Vie", value: "7:00 am – 8:00 pm" },
      { label: "Sáb – Dom", value: "8:00 am – 9:00 pm" },
    ],
    parking: "Estacionamiento gratuito por 2 horas en el patio interior.",
    mapsUrl: "https://maps.google.com/?q=Av+de+las+Flores+214",
  },
  {
    id: "l2",
    name: "ALAS · Bosque Norte",
    address: "Calle del Roble 88, frente a la plaza principal",
    hours: [
      { label: "Lun – Vie", value: "7:30 am – 7:00 pm" },
      { label: "Sáb – Dom", value: "8:30 am – 8:00 pm" },
    ],
    parking: "Estacionamiento público a 50 metros sobre calle Roble.",
    mapsUrl: "https://maps.google.com/?q=Calle+del+Roble+88",
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", image: img("photo-1521017432531-fbd92d768814", 900), alt: "Taza de café sobre madera", span: "tall" },
  { id: "g2", image: img("photo-1498804103079-a6351b050096", 900), alt: "Latte art en forma de corazón" },
  { id: "g3", image: img("photo-1447933601403-0c6688de566e", 900), alt: "Granos de café tostados", span: "wide" },
  { id: "g4", image: img("photo-1517705008128-361805f42e86", 900), alt: "Amigos conversando en la cafetería" },
  { id: "g5", image: img("photo-1442512595331-e89e73853f31", 900), alt: "Mesa junto a la ventana con luz natural", span: "tall" },
  { id: "g6", image: img("photo-1442550528053-c431ecb55509", 900), alt: "Detalle de granos de café" },
  { id: "g7", image: img("photo-1600093463592-8e36ae95ef56", 900), alt: "Interior cálido de la cafetería", span: "wide" },
  { id: "g8", image: img("photo-1521305916504-4a1121188589", 900), alt: "Persona disfrutando un café junto a la ventana" },
  { id: "g9", image: img("photo-1524350876685-274059332603", 900), alt: "Pastelería recién horneada" },
];
