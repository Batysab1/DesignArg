export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  oferta?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: "Escritorio Gaming Pro",
    description: "Escritorio ergonómico con superficie amplia de 140x70cm, ideal para setup gaming profesional",
    price: 89999,
    image: "https://placehold.co/600x600?text=Modern+black+gaming+desk+with+carbon+fiber+texture+and+LED+lights",
    category: "Escritorios",
    oferta: false,
  },
  {
    id: 2,
    name: "Setup Moderno Premium",
    description:
      "Escritorio diseño minimalista con estructura en forma de V, acabado en madera natural y cristal templado",
    price: 159999,
    image: "/images/image.png",
    category: "Escritorios",
    oferta: false,
  },
  {
    id: 3,
    name: "Soporte Notebook Aluminio",
    description: "Soporte ajustable de aluminio premium con ángulos personalizables para mejor postura",
    price: 12999,
    image: "https://placehold.co/600x600?text=Sleek+aluminum+laptop+stand+with+adjustable+angles+minimalist+design",
    category: "Accesorios",
    oferta: false,
  },
  {
    id: 4,
    name: "Organizador RGB",
    description: "Organizador de escritorio con iluminación RGB y carga inalámbrica integrada",
    price: 15999,
    image: "https://placehold.co/600x600?text=Modern+desk+organizer+with+RGB+lighting+wireless+charging+pad",
    category: "Accesorios",
    oferta: false,
  },
  {
    id: 5,
    name: "Monitor Arm Dual",
    description: 'Brazo dual para monitores con ajuste de altura y rotación 360°, soporta hasta 27"',
    price: 28999,
    image: "https://placehold.co/600x600?text=Dual+monitor+arm+mount+with+full+articulation+black+metal+finish",
    category: "Accesorios",
    oferta: false,
  },
  {
    id: 6,
    name: "Escritorio Regulable",
    description: "Escritorio sit-stand eléctrico con memoria de altura y estructura reforzada",
    price: 149999,
    image: "https://placehold.co/600x600?text=Electric+height+adjustable+standing+desk+modern+minimalist+white",
    category: "Escritorios",
    oferta: false,
  },
  {
    id: 7,
    name: "Mousepad XXL Gaming",
    description: "Mousepad extra grande 90x40cm con base antideslizante y bordes reforzados",
    price: 7999,
    image: "https://placehold.co/600x600?text=Extra+large+gaming+mousepad+with+RGB+edges+black+surface",
    category: "Accesorios",
    oferta: false,
  },
  {
    id: 8,
    name: "Cable Management Kit",
    description: "Kit completo de organización de cables con clips, canaletas y sujetadores",
    price: 4999,
    image: "https://placehold.co/600x600?text=Cable+management+kit+with+clips+and+organizers+white+finish",
    category: "Accesorios",
    oferta: false,
  },
  {
    id: 9,
    name: "Escritorio Esquinero",
    description: "Escritorio en L perfecto para aprovechar espacios, 150x150cm con estantes laterales",
    price: 94999,
    image: "https://placehold.co/600x600?text=Corner+L+shaped+desk+with+shelves+walnut+wood+finish",
    category: "Escritorios",
    oferta: false,
  },
  {
    id: 10,
    name: "test producto",
    description: "Escritorio ergonómico con superficie amplia de 140x70cm, ideal para setup gaming profesional",
    price: 49999,
    image: "https://placehold.co/600x600?text=Modern+black+gaming+desk+with+carbon+fiber+texture+and+LED+lights",
    category: "Escritorios",
    oferta: true,
  },
]
