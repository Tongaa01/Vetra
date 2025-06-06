import type { ICategories } from "./../types/ICategories";
import type { IProduct } from './../types/IProduct';

// Categorías base
const categorias: ICategories[] = [
  { nombre: "ZAPATILLAS" },
  { nombre: "CAMPERAS" },
  { nombre: "HOMBRE" },
  { nombre: "MUJER" },
  { nombre: "NIÑOS" }
];

// Mock de productos
export const productosMock: IProduct[] = [
  // ZAPATILLAS (10 modelos)
  {
    id: "zap-001",
    nombre: "Runner Velocity 4.0",
    stock: 15,
    precio: 149999,
    descripcion: "Zapatillas running con amortiguación AirMax",
    categoria: [categorias[0]], // ZAPATILLAS
    talle: "40-46",
    imagen: "https://acdn-us.mitiendanube.com/stores/005/244/864/products/jag_jhe-c-9359-101_1-26acca8915cbf8942b17344377265369-1024-1024.png",
    color: ["Negro", "Blanco"],
    marca: "Vetra Sport",
    id_talle_producto: "t-zap-001",
    id_descuento_producto: "dto-20"
  },
  {
    id: "zap-002",
    nombre: "Urban Flex",
    stock: 8,
    precio: 139990,
    descripcion: "Zapatillas urbanas unisex",
    categoria: [categorias[0]], // ZAPATILLAS
    talle: "38-44",
    color: ["Azul", "Gris"],
    imagen: "https://acdn-us.mitiendanube.com/stores/001/498/432/products/s10759-12_1-c9f66c98a005f68e6a17139949381236-640-0.jpg",
    marca: "Vetra Urban",
    id_talle_producto: "t-zap-002",
    id_descuento_producto: ""
  },
  {
    id: "zap-003",
    nombre: "Junior Bounce",
    stock: 12,
    precio: 89999,
    descripcion: "Zapatillas para niños con luces LED",
    categoria: [categorias[0]], // ZAPATILLAS
    talle: "28-35",
    color: ["Rojo", "Azul"],
    imagen: "https://www.zapateriafebo.com/cdn/shop/files/LAJOHNCN_1.jpg?v=1692294897",
    marca: "Vetra Kids",
    id_talle_producto: "t-zap-003",
    id_descuento_producto: "dto-15"
  },
  {
    id: "zap-004",
    nombre: "Performance Pro",
    stock: 5,
    precio: 169999,
    descripcion: "Zapatillas profesionales para entrenamiento",
    categoria: [categorias[0]], // ZAPATILLAS
    talle: "39-45",
    color: ["Negro", "Rojo"],
    imagen: "https://acdn-us.mitiendanube.com/stores/003/583/115/products/zapatilla-berlin-nino-azul-jean-4f1e3459aad6c988b717014441142825-1024-1024.jpg",
    marca: "Vetra Pro",
    id_talle_producto: "t-zap-004",
    id_descuento_producto: ""
  },
  {
    id: "zap-005",
    nombre: "Skater V2",
    stock: 7,
    precio: 129990,
    descripcion: "Zapatillas skateboard suela reforzada",
    categoria: [categorias[0]], // ZAPATILLAS
    talle: "37-43",
    color: ["Negro", "Blanco", "Verde"],
    imagen: "https://xlshop.vtexassets.com/arquivos/ids/208304/XT3SSI03Z0110-B.jpg?v=638285862885930000",
    marca: "Vetra Skate",
    id_talle_producto: "t-zap-005",
    id_descuento_producto: "dto-10"
  },
  {
    id: "zap-006",
    nombre: "Trail Explorer",
    stock: 9,
    precio: 159999,
    descripcion: "Zapatillas trekking impermeables",
    categoria: [categorias[0]], // ZAPATILLAS
    talle: "40-45",
    color: ["Marrón", "Verde"],
    imagen: "https://www.zapateriafebo.com/cdn/shop/files/LAJOHNCN_1.jpg?v=1692294897",
    marca: "Vetra Outdoor",
    id_talle_producto: "t-zap-006",
    id_descuento_producto: ""
  },
  {
    id: "zap-007",
    nombre: "Futbol 5 Dynamic",
    stock: 11,
    precio: 119990,
    descripcion: "Zapatillas para fútbol sala multidestacado",
    categoria: [categorias[0]], // ZAPATILLAS
    talle: "38-44",
    color: ["Blanco", "Negro"],
    imagen: "https://xlshop.vtexassets.com/arquivos/ids/208304/XT3SSI03Z0110-B.jpg?v=638285862885930000",
    marca: "Vetra Fútbol",
    id_talle_producto: "t-zap-007",
    id_descuento_producto: "dto-25"
  },
  {
    id: "zap-008",
    nombre: "Minimal White",
    stock: 20,
    precio: 109999,
    descripcion: "Zapatillas minimalistas unisex",
    categoria: [categorias[0]], // ZAPATILLAS
    talle: "36-42",
    color: ["Blanco"],
    imagen: "https://acdn-us.mitiendanube.com/stores/003/583/115/products/zapatilla-berlin-nino-azul-jean-4f1e3459aad6c988b717014441142825-1024-1024.jpg",
    marca: "Vetra Basics",
    id_talle_producto: "t-zap-008",
    id_descuento_producto: ""
  },
  {
    id: "zap-009",
    nombre: "Basket Pro",
    stock: 6,
    precio: 179999,
    descripcion: "Zapatillas basquet tobillera",
    categoria: [categorias[0]], // ZAPATILLAS
    talle: "41-46",
    color: ["Rojo", "Negro"],
    imagen: "https://acdn-us.mitiendanube.com/stores/001/498/432/products/s10759-12_1-c9f66c98a005f68e6a17139949381236-640-0.jpg",
    marca: "Vetra Basketball",
    id_talle_producto: "t-zap-009",
    id_descuento_producto: ""
  },
  {
    id: "zap-010",
    nombre: "Kids Glow",
    stock: 14,
    precio: 79999,
    descripcion: "Zapatillas infantiles con luces",
    categoria: [categorias[0]], // ZAPATILLAS
    talle: "26-34",
    color: ["Rosa", "Celeste"],
    imagen: "https://www.zapateriafebo.com/cdn/shop/files/LAJOHNCN_1.jpg?v=1692294897",
    marca: "Vetra Kids",
    id_talle_producto: "t-zap-010",
    id_descuento_producto: "dto-30"
  },

  // CAMPERAS (10 modelos)
  {
    id: "camp-001",
    nombre: "Parka Winter",
    stock: 8,
    precio: 89999,
    descripcion: "Campera invierno impermeable",
    categoria: [categorias[1]], // CAMPERAS
    talle: "S-XXL",
    color: ["Negro", "Azul"],
    imagen: "https://www.nakaoutdoors.com.ar/img/articulos/2023/09/epic_g2_campera_hoody_polarvent_8_imagen11.jpg",
    marca: "Vetra Outdoor",
    id_talle_producto: "t-camp-001",
    id_descuento_producto: "dto-15"
  },
  {
    id: "camp-002",
    nombre: "Bomber Classic",
    stock: 12,
    precio: 65990,
    descripcion: "Campera bomber ajustable",
    categoria: [categorias[1]], // CAMPERAS
    talle: "XS-XL",
    color: ["Negro", "Verde"],
    imagen: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-de-abrigo-con-capucha-puma-packlite-mujer-negra-640020849407001-1.jpg",
    marca: "Vetra Urban",
    id_talle_producto: "t-camp-002",
    id_descuento_producto: ""
  },
  {
    id: "camp-003",
    nombre: "Kids Puffer",
    stock: 15,
    precio: 54990,
    descripcion: "Campera infantil abrigada",
    categoria: [categorias[1]], // CAMPERAS
    talle: "4-12 años",
    color: ["Rojo", "Azul"],
    imagen: "https://www.nakaoutdoors.com.ar/img/articulos/2023/09/epic_g2_campera_hoody_polarvent_8_imagen11.jpg",
    marca: "Vetra Kids",
    id_talle_producto: "t-camp-003",
    id_descuento_producto: "dto-20"
  },
  {
    id: "camp-004",
    nombre: "Denim Jacket",
    stock: 7,
    precio: 74990,
    descripcion: "Campera jean clásica",
    categoria: [categorias[1]], // CAMPERAS
    talle: "S-XL",
    color: ["Azul", "Negro"],
    imagen: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-de-abrigo-con-capucha-puma-packlite-mujer-negra-640020849407001-1.jpg",
    marca: "Vetra Denim",
    id_talle_producto: "t-camp-004",
    id_descuento_producto: ""
  },
  {
    id: "camp-005",
    nombre: "Softshell Trek",
    stock: 5,
    precio: 82990,
    descripcion: "Campera técnica para outdoor",
    categoria: [categorias[1]], // CAMPERAS
    talle: "M-XXL",
    color: ["Gris", "Verde"],
    imagen: "https://www.nakaoutdoors.com.ar/img/articulos/2023/09/epic_g2_campera_hoody_polarvent_8_imagen11.jpg",
    marca: "Vetra Adventure",
    id_talle_producto: "t-camp-005",
    id_descuento_producto: "dto-10"
  },
  {
    id: "camp-006",
    nombre: "Leather Biker",
    stock: 3,
    precio: 129990,
    descripcion: "Campera de cuero genuino",
    categoria: [categorias[1]], // CAMPERAS
    talle: "S-XL",
    color: ["Negro", "Marrón"],
    imagen: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-de-abrigo-con-capucha-puma-packlite-mujer-negra-640020849407001-1.jpg",
    marca: "Vetra Premium",
    id_talle_producto: "t-camp-006",
    id_descuento_producto: ""
  },
  {
    id: "camp-007",
    nombre: "Puffer Light",
    stock: 10,
    precio: 69990,
    descripcion: "Campera pluma ligera",
    categoria: [categorias[1]], // CAMPERAS
    talle: "XS-XXL",
    color: ["Negro", "Blanco"],
    imagen: "https://www.nakaoutdoors.com.ar/img/articulos/2023/09/epic_g2_campera_hoody_polarvent_8_imagen11.jpg",
    marca: "Vetra Essentials",
    id_talle_producto: "t-camp-007",
    id_descuento_producto: ""
  },
  {
    id: "camp-008",
    nombre: "Rain Shield",
    stock: 9,
    precio: 77990,
    descripcion: "Campera impermeable plegable",
    categoria: [categorias[1]], // CAMPERAS
    talle: "S-XL",
    color: ["Azul", "Amarillo"],
    imagen: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-de-abrigo-con-capucha-puma-packlite-mujer-negra-640020849407001-1.jpg",
    marca: "Vetra Travel",
    id_talle_producto: "t-camp-008",
    id_descuento_producto: "dto-25"
  },
  {
    id: "camp-009",
    nombre: "Kids Hoodie",
    stock: 18,
    precio: 45990,
    descripcion: "Buzo con capucha infantil",
    categoria: [categorias[1]], // CAMPERAS
    talle: "2-10 años",
    color: ["Rosa", "Celeste"],
    imagen: "https://www.nakaoutdoors.com.ar/img/articulos/2023/09/epic_g2_campera_hoody_polarvent_8_imagen11.jpg",
    marca: "Vetra Kids",
    id_talle_producto: "t-camp-009",
    id_descuento_producto: ""
  },
  {
    id: "camp-010",
    nombre: "Urban Blazer",
    stock: 6,
    precio: 89990,
    descripcion: "Saco deportivo elegante",
    categoria: [categorias[1]], // CAMPERAS
    talle: "38-46",
    color: ["Gris", "Negro"],
    imagen: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-de-abrigo-con-capucha-puma-packlite-mujer-negra-640020849407001-1.jpg",
    marca: "Vetra Formal",
    id_talle_producto: "t-camp-010",
    id_descuento_producto: ""
  }
];