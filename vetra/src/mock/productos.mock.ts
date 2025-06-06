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
  // ZAPATILLAS (20 modelos)
  {
    id: "zap-001",
    nombre: "Runner Velocity 4.0",
    stock: 15,
    precio: 149999,
    descripcion: "Zapatillas running con amortiguación AirMax",
    categoria: [categorias[0], categorias[2]], // ZAPATILLAS, HOMBRE
    id_talle_producto: ["40", "41", "42", "43", "44", "45", "46"],
    imagen: "https://acdn-us.mitiendanube.com/stores/005/244/864/products/jag_jhe-c-9359-101_1-26acca8915cbf8942b17344377265369-1024-1024.png",
    color: ["Negro", "Blanco"],
    marca: "Vetra Sport",
    id_descuento_producto: 0
  },
  {
    id: "zap-002",
    nombre: "Urban Flex",
    stock: 8,
    precio: 139990,
    descripcion: "Zapatillas urbanas unisex",
    categoria: [categorias[0], categorias[3]], // ZAPATILLAS, MUJER
    id_talle_producto: ["38", "39", "40", "41", "42", "43", "44"],
    color: ["Azul", "Gris"],
    imagen: "https://acdn-us.mitiendanube.com/stores/001/498/432/products/s10759-12_1-c9f66c98a005f68e6a17139949381236-640-0.jpg",
    marca: "Vetra Urban",
    id_descuento_producto: 25
  },
  {
    id: "zap-003",
    nombre: "Junior Bounce",
    stock: 12,
    precio: 89999,
    descripcion: "Zapatillas para niños con luces LED",
    categoria: [categorias[0], categorias[4]], // ZAPATILLAS, NIÑOS
    id_talle_producto: ["28", "29", "30", "31", "32", "33", "34", "35"],
    color: ["Rojo", "Azul"],
    imagen: "https://www.zapateriafebo.com/cdn/shop/files/LAJOHNCN_1.jpg?v=1692294897",
    marca: "Vetra Kids",
    id_descuento_producto: 15
  },
  {
    id: "zap-004",
    nombre: "Performance Pro",
    stock: 5,
    precio: 169999,
    descripcion: "Zapatillas profesionales para entrenamiento",
    categoria: [categorias[0], categorias[2]], // ZAPATILLAS, HOMBRE
    id_talle_producto: ["39", "40", "41", "42", "43", "44", "45"],
    color: ["Negro", "Rojo"],
    imagen: "https://acdn-us.mitiendanube.com/stores/003/583/115/products/zapatilla-berlin-nino-azul-jean-4f1e3459aad6c988b717014441142825-1024-1024.jpg",
    marca: "Vetra Pro",
    id_descuento_producto: 0
  },
  {
    id: "zap-005",
    nombre: "Skater V2",
    stock: 7,
    precio: 129990,
    descripcion: "Zapatillas skateboard suela reforzada",
    categoria: [categorias[0], categorias[2]], // ZAPATILLAS, HOMBRE
    id_talle_producto: ["37", "38", "39", "40", "41", "42", "43"],
    color: ["Negro", "Blanco", "Verde"],
    imagen: "https://xlshop.vtexassets.com/arquivos/ids/208304/XT3SSI03Z0110-B.jpg?v=638285862885930000",
    marca: "Vetra Skate",
    id_descuento_producto: 10
  },
  {
    id: "zap-006",
    nombre: "Trail Explorer",
    stock: 9,
    precio: 159999,
    descripcion: "Zapatillas trekking impermeables",
    categoria: [categorias[0], categorias[2]], // ZAPATILLAS, HOMBRE
    id_talle_producto: ["40", "41", "42", "43", "44", "45"],
    color: ["Marrón", "Verde"],
    imagen: "https://www.zapateriafebo.com/cdn/shop/files/LAJOHNCN_1.jpg?v=1692294897",
    marca: "Vetra Outdoor",
    id_descuento_producto: 0
  },
  {
    id: "zap-007",
    nombre: "Futbol 5 Dynamic",
    stock: 11,
    precio: 119990,
    descripcion: "Zapatillas para fútbol sala multidestacado",
    categoria: [categorias[0], categorias[2]], // ZAPATILLAS, HOMBRE
    id_talle_producto: ["38", "39", "40", "41", "42", "43", "44"],
    color: ["Blanco", "Negro"],
    imagen: "https://xlshop.vtexassets.com/arquivos/ids/208304/XT3SSI03Z0110-B.jpg?v=638285862885930000",
    marca: "Vetra Fútbol",
    id_descuento_producto: 25
  },
  {
    id: "zap-008",
    nombre: "Minimal White",
    stock: 20,
    precio: 109999,
    descripcion: "Zapatillas minimalistas unisex",
    categoria: [categorias[0], categorias[3]], // ZAPATILLAS, MUJER
    id_talle_producto: ["36", "37", "38", "39", "40", "41", "42"],
    color: ["Blanco"],
    imagen: "https://acdn-us.mitiendanube.com/stores/003/583/115/products/zapatilla-berlin-nino-azul-jean-4f1e3459aad6c988b717014441142825-1024-1024.jpg",
    marca: "Vetra Basics",
    id_descuento_producto: 0
  },
  {
    id: "zap-009",
    nombre: "Basket Pro",
    stock: 6,
    precio: 179999,
    descripcion: "Zapatillas basquet tobillera",
    categoria: [categorias[0], categorias[2]], // ZAPATILLAS, HOMBRE
    id_talle_producto: ["41", "42", "43", "44", "45", "46"],
    color: ["Rojo", "Negro"],
    imagen: "https://acdn-us.mitiendanube.com/stores/001/498/432/products/s10759-12_1-c9f66c98a005f68e6a17139949381236-640-0.jpg",
    marca: "Vetra Basketball",
    id_descuento_producto: 0
  },
  {
    id: "zap-010",
    nombre: "Kids Glow",
    stock: 14,
    precio: 79999,
    descripcion: "Zapatillas infantiles con luces",
    categoria: [categorias[0], categorias[4]], // ZAPATILLAS, NIÑOS
    id_talle_producto: ["26", "27", "28", "29", "30", "31", "32", "33", "34"],
    color: ["Rosa", "Celeste"],
    imagen: "https://www.zapateriafebo.com/cdn/shop/files/LAJOHNCN_1.jpg?v=1692294897",
    marca: "Vetra Kids",
    id_descuento_producto: 30
  },
  // más zapatillas (11-20), repitiendo imágenes y variando talles y categorías
  {
    id: "zap-011",
    nombre: "Runner Velocity 4.1",
    stock: 15,
    precio: 149999,
    descripcion: "Versión mejorada de Velocity 4.0",
    categoria: [categorias[0], categorias[2]],
    id_talle_producto: ["40", "41", "42", "43", "44", "45", "46"],
    imagen: "https://acdn-us.mitiendanube.com/stores/005/244/864/products/jag_jhe-c-9359-101_1-26acca8915cbf8942b17344377265369-1024-1024.png",
    color: ["Negro", "Blanco"],
    marca: "Vetra Sport",
    id_descuento_producto: 15
  },
  {
    id: "zap-012",
    nombre: "Urban Flex Lite",
    stock: 8,
    precio: 139990,
    descripcion: "Versión ligera para mujer",
    categoria: [categorias[0], categorias[3]],
    id_talle_producto: ["38", "39", "40", "41", "42", "43", "44"],
    color: ["Azul", "Gris"],
    imagen: "https://acdn-us.mitiendanube.com/stores/001/498/432/products/s10759-12_1-c9f66c98a005f68e6a17139949381236-640-0.jpg",
    marca: "Vetra Urban",
    id_descuento_producto: 0
  },
  {
    id: "zap-013",
    nombre: "Junior Bounce LED",
    stock: 12,
    precio: 89999,
    descripcion: "LED mejorado",
    categoria: [categorias[0], categorias[4]],
    id_talle_producto: ["28", "29", "30", "31", "32", "33", "34", "35"],
    color: ["Rojo", "Azul"],
    imagen: "https://www.zapateriafebo.com/cdn/shop/files/LAJOHNCN_1.jpg?v=1692294897",
    marca: "Vetra Kids",
    id_descuento_producto: 25
  },
  {
    id: "zap-014",
    nombre: "Performance Pro 2",
    stock: 5,
    precio: 169999,
    descripcion: "Mejor amortiguación",
    categoria: [categorias[0], categorias[2]],
    id_talle_producto: ["39", "40", "41", "42", "43", "44", "45"],
    color: ["Negro", "Rojo"],
    imagen: "https://acdn-us.mitiendanube.com/stores/003/583/115/products/zapatilla-berlin-nino-azul-jean-4f1e3459aad6c988b717014441142825-1024-1024.jpg",
    marca: "Vetra Pro",
    id_descuento_producto: 30
  },
  {
    id: "zap-015",
    nombre: "Skater V3",
    stock: 7,
    precio: 129990,
    descripcion: "Suela reforzada",
    categoria: [categorias[0], categorias[2]],
    id_talle_producto: ["37", "38", "39", "40", "41", "42", "43"],
    color: ["Negro", "Blanco", "Verde"],
    imagen: "https://xlshop.vtexassets.com/arquivos/ids/208304/XT3SSI03Z0110-B.jpg?v=638285862885930000",
    marca: "Vetra Skate",
    id_descuento_producto: 0
  },
  {
    id: "zap-016",
    nombre: "Trail Explorer 2",
    stock: 9,
    precio: 159999,
    descripcion: "Impermeables y resistentes",
    categoria: [categorias[0], categorias[2]],
    id_talle_producto: ["40", "41", "42", "43", "44", "45"],
    color: ["Marrón", "Verde"],
    imagen: "https://www.zapateriafebo.com/cdn/shop/files/LAJOHNCN_1.jpg?v=1692294897",
    marca: "Vetra Outdoor",
    id_descuento_producto: 15
  },
  {
    id: "zap-017",
    nombre: "Futbol 5 Dynamic Pro",
    stock: 11,
    precio: 119990,
    descripcion: "Para fútbol sala avanzado",
    categoria: [categorias[0], categorias[2]],
    id_talle_producto: ["38", "39", "40", "41", "42", "43", "44"],
    color: ["Blanco", "Negro"],
    imagen: "https://xlshop.vtexassets.com/arquivos/ids/208304/XT3SSI03Z0110-B.jpg?v=638285862885930000",
    marca: "Vetra Fútbol",
    id_descuento_producto: 0
  },
  {
    id: "zap-018",
    nombre: "Minimal White 2",
    stock: 20,
    precio: 109999,
    descripcion: "Minimalistas renovadas",
    categoria: [categorias[0], categorias[3]],
    id_talle_producto: ["36", "37", "38", "39", "40", "41", "42"],
    color: ["Blanco"],
    imagen: "https://acdn-us.mitiendanube.com/stores/003/583/115/products/zapatilla-berlin-nino-azul-jean-4f1e3459aad6c988b717014441142825-1024-1024.jpg",
    marca: "Vetra Basics",
    id_descuento_producto: 10
  },
  {
    id: "zap-019",
    nombre: "Basket Pro 2",
    stock: 6,
    precio: 179999,
    descripcion: "Tobillera reforzada",
    categoria: [categorias[0], categorias[2]],
    id_talle_producto: ["41", "42", "43", "44", "45", "46"],
    color: ["Rojo", "Negro"],
    imagen: "https://acdn-us.mitiendanube.com/stores/001/498/432/products/s10759-12_1-c9f66c98a005f68e6a17139949381236-640-0.jpg",
    marca: "Vetra Basketball",
    id_descuento_producto: 0
  },
  {
    id: "zap-020",
    nombre: "Kids Glow 2",
    stock: 14,
    precio: 79999,
    descripcion: "Luces mejoradas",
    categoria: [categorias[0], categorias[4]],
    id_talle_producto: ["26", "27", "28", "29", "30", "31", "32", "33", "34"],
    color: ["Rosa", "Celeste"],
    imagen: "https://www.zapateriafebo.com/cdn/shop/files/LAJOHNCN_1.jpg?v=1692294897",
    marca: "Vetra Kids",
    id_descuento_producto: 20
  },

  // CAMPERAS (20 modelos)
  {
    id: "camp-001",
    nombre: "Campera Windbreaker",
    stock: 30,
    precio: 129999,
    descripcion: "Campera liviana e impermeable",
    categoria: [categorias[1], categorias[2]], // CAMPERAS, HOMBRE
    id_talle_producto: ["S", "M", "L", "XL", "XXL"],
    color: ["Azul", "Negro", "Gris"],
    imagen: "https://st2.depositphotos.com/3949243/5909/i/600/depositphotos_59098611-stock-photo-casual-mens-jacket.jpg",
    marca: "Vetra Outdoor",
    id_descuento_producto: 25
  },
  {
    id: "camp-002",
    nombre: "Campera Softshell",
    stock: 20,
    precio: 159999,
    descripcion: "Campera softshell térmica",
    categoria: [categorias[1], categorias[2]],
    id_talle_producto: ["S", "M", "L", "XL", "XXL"],
    color: ["Negro", "Verde Militar"],
    imagen: "https://img.ltwebstatic.com/images3_pi/2022/12/08/1670478702d14484bc720a04d8021c4749b3822a99_thumbnail_900x.webp",
    marca: "Vetra Pro",
    id_descuento_producto: 15
  },
  {
    id: "camp-003",
    nombre: "Campera Acolchada",
    stock: 25,
    precio: 189999,
    descripcion: "Campera acolchada con capucha",
    categoria: [categorias[1], categorias[3]], // CAMPERAS, MUJER
    id_talle_producto: ["XS", "S", "M", "L", "XL"],
    color: ["Rojo", "Gris Claro"],
    imagen: "https://img.ltwebstatic.com/images3_pi/2022/12/01/16700068787edb5e07bca7408f4f0ef1b024aaf645_thumbnail_900x.webp",
    marca: "Vetra Mujer",
    id_descuento_producto: 10
  },
  {
    id: "camp-004",
    nombre: "Campera Parka",
    stock: 18,
    precio: 199999,
    descripcion: "Campera parka con forro térmico",
    categoria: [categorias[1], categorias[3]],
    id_talle_producto: ["XS", "S", "M", "L", "XL"],
    color: ["Verde Oliva", "Negro"],
    imagen: "https://st2.depositphotos.com/3949243/5909/i/600/depositphotos_59098611-stock-photo-casual-mens-jacket.jpg",
    marca: "Vetra Mujer",
    id_descuento_producto: 0
  },
  {
    id: "camp-005",
    nombre: "Campera Outdoor",
    stock: 15,
    precio: 179999,
    descripcion: "Ideal para trekking y montaña",
    categoria: [categorias[1], categorias[2]],
    id_talle_producto: ["S", "M", "L", "XL", "XXL"],
    color: ["Azul Marino", "Negro"],
    imagen: "https://img.ltwebstatic.com/images3_pi/2022/12/08/1670478702d14484bc720a04d8021c4749b3822a99_thumbnail_900x.webp",
    marca: "Vetra Outdoor",
    id_descuento_producto: 0
  },
  {
    id: "camp-006",
    nombre: "Campera Softshell Light",
    stock: 22,
    precio: 159999,
    descripcion: "Versión liviana para mujer",
    categoria: [categorias[1], categorias[3]],
    id_talle_producto: ["XS", "S", "M", "L", "XL"],
    color: ["Rosa", "Blanco"],
    imagen: "https://img.ltwebstatic.com/images3_pi/2022/12/01/16700068787edb5e07bca7408f4f0ef1b024aaf645_thumbnail_900x.webp",
    marca: "Vetra Mujer",
    id_descuento_producto: 20
  },
  {
    id: "camp-007",
    nombre: "Campera Acolchada Light",
    stock: 30,
    precio: 189999,
    descripcion: "Ligera y cómoda",
    categoria: [categorias[1], categorias[3]],
    id_talle_producto: ["XS", "S", "M", "L", "XL"],
    color: ["Gris", "Negro"],
    imagen: "https://st2.depositphotos.com/3949243/5909/i/600/depositphotos_59098611-stock-photo-casual-mens-jacket.jpg",
    marca: "Vetra Mujer",
    id_descuento_producto: 0
  },
  {
    id: "camp-008",
    nombre: "Campera Urban",
    stock: 16,
    precio: 159999,
    descripcion: "Campera urbana para hombre",
    categoria: [categorias[1], categorias[2]],
    id_talle_producto: ["S", "M", "L", "XL", "XXL"],
    color: ["Negro", "Gris"],
    imagen: "https://img.ltwebstatic.com/images3_pi/2022/12/08/1670478702d14484bc720a04d8021c4749b3822a99_thumbnail_900x.webp",
    marca: "Vetra Urban",
    id_descuento_producto: 25
  },
  {
    id: "camp-009",
    nombre: "Campera Sport",
    stock: 20,
    precio: 179999,
    descripcion: "Campera deportiva",
    categoria: [categorias[1], categorias[2]],
    id_talle_producto: ["S", "M", "L", "XL", "XXL"],
    color: ["Rojo", "Negro"],
    imagen: "https://st2.depositphotos.com/3949243/5909/i/600/depositphotos_59098611-stock-photo-casual-mens-jacket.jpg",
    marca: "Vetra Sport",
    id_descuento_producto: 10
  },
  {
    id: "camp-010",
    nombre: "Campera Classic",
    stock: 25,
    precio: 159999,
    descripcion: "Campera clásica para mujer",
    categoria: [categorias[1], categorias[3]],
    id_talle_producto: ["XS", "S", "M", "L", "XL"],
    color: ["Beige", "Blanco"],
    imagen: "https://img.ltwebstatic.com/images3_pi/2022/12/01/16700068787edb5e07bca7408f4f0ef1b024aaf645_thumbnail_900x.webp",
    marca: "Vetra Mujer",
    id_descuento_producto: 0
  },
  // más camperas (11-20)
  {
    id: "camp-011",
    nombre: "Campera Windbreaker 2",
    stock: 30,
    precio: 129999,
    descripcion: "Versión actualizada",
    categoria: [categorias[1], categorias[2]],
    id_talle_producto: ["S", "M", "L", "XL", "XXL"],
    color: ["Azul", "Negro", "Gris"],
    imagen: "https://st2.depositphotos.com/3949243/5909/i/600/depositphotos_59098611-stock-photo-casual-mens-jacket.jpg",
    marca: "Vetra Outdoor",
    id_descuento_producto: 15
  },
  {
    id: "camp-012",
    nombre: "Campera Softshell 2",
    stock: 20,
    precio: 159999,
    descripcion: "Softshell mejorada",
    categoria: [categorias[1], categorias[2]],
    id_talle_producto: ["S", "M", "L", "XL", "XXL"],
    color: ["Negro", "Verde Militar"],
    imagen: "https://img.ltwebstatic.com/images3_pi/2022/12/08/1670478702d14484bc720a04d8021c4749b3822a99_thumbnail_900x.webp",
    marca: "Vetra Pro",
    id_descuento_producto: 0
  },
  {
    id: "camp-013",
    nombre: "Campera Acolchada 2",
    stock: 25,
    precio: 189999,
    descripcion: "Más acolchada y cómoda",
    categoria: [categorias[1], categorias[3]],
    id_talle_producto: ["XS", "S", "M", "L", "XL"],
    color: ["Rojo", "Gris Claro"],
    imagen: "https://img.ltwebstatic.com/images3_pi/2022/12/01/16700068787edb5e07bca7408f4f0ef1b024aaf645_thumbnail_900x.webp",
    marca: "Vetra Mujer",
    id_descuento_producto: 0
  },
  {
    id: "camp-014",
    nombre: "Campera Parka 2",
    stock: 18,
    precio: 199999,
    descripcion: "Con forro térmico mejorado",
    categoria: [categorias[1], categorias[3]],
    id_talle_producto: ["XS", "S", "M", "L", "XL"],
    color: ["Verde Oliva", "Negro"],
    imagen: "https://st2.depositphotos.com/3949243/5909/i/600/depositphotos_59098611-stock-photo-casual-mens-jacket.jpg",
    marca: "Vetra Mujer",
    id_descuento_producto: 10
  },
  {
    id: "camp-015",
    nombre: "Campera Outdoor 2",
    stock: 15,
    precio: 179999,
    descripcion: "Para trekking avanzado",
    categoria: [categorias[1], categorias[2]],
    id_talle_producto: ["S", "M", "L", "XL", "XXL"],
    color: ["Azul Marino", "Negro"],
    imagen: "https://img.ltwebstatic.com/images3_pi/2022/12/08/1670478702d14484bc720a04d8021c4749b3822a99_thumbnail_900x.webp",
    marca: "Vetra Outdoor",
    id_descuento_producto: 20
  },
  {
    id: "camp-016",
    nombre: "Campera Softshell Light 2",
    stock: 22,
    precio: 159999,
    descripcion: "Versión liviana femenina",
    categoria: [categorias[1], categorias[3]],
    id_talle_producto: ["XS", "S", "M", "L", "XL"],
    color: ["Rosa", "Blanco"],
    imagen: "https://img.ltwebstatic.com/images3_pi/2022/12/01/16700068787edb5e07bca7408f4f0ef1b024aaf645_thumbnail_900x.webp",
    marca: "Vetra Mujer",
    id_descuento_producto: 0
  },
  {
    id: "camp-017",
    nombre: "Campera Acolchada Light 2",
    stock: 30,
    precio: 189999,
    descripcion: "Cómoda y ligera",
    categoria: [categorias[1], categorias[3]],
    id_talle_producto: ["XS", "S", "M", "L", "XL"],
    color: ["Gris", "Negro"],
    imagen: "https://st2.depositphotos.com/3949243/5909/i/600/depositphotos_59098611-stock-photo-casual-mens-jacket.jpg",
    marca: "Vetra Mujer",
    id_descuento_producto: 5
  },
  {
    id: "camp-018",
    nombre: "Campera Urban 2",
    stock: 16,
    precio: 159999,
    descripcion: "Estilo urbano mejorado",
    categoria: [categorias[1], categorias[2]],
    id_talle_producto: ["S", "M", "L", "XL", "XXL"],
    color: ["Negro", "Gris"],
    imagen: "https://img.ltwebstatic.com/images3_pi/2022/12/08/1670478702d14484bc720a04d8021c4749b3822a99_thumbnail_900x.webp",
    marca: "Vetra Urban",
    id_descuento_producto: 15
  },
  {
    id: "camp-019",
    nombre: "Campera Sport 2",
    stock: 20,
    precio: 179999,
    descripcion: "Deportiva y cómoda",
    categoria: [categorias[1], categorias[2]],
    id_talle_producto: ["S", "M", "L", "XL", "XXL"],
    color: ["Rojo", "Negro"],
    imagen: "https://st2.depositphotos.com/3949243/5909/i/600/depositphotos_59098611-stock-photo-casual-mens-jacket.jpg",
    marca: "Vetra Sport",
    id_descuento_producto: 10
  },
  {
    id: "camp-020",
    nombre: "Campera Classic 2",
    stock: 25,
    precio: 159999,
    descripcion: "Clásica para mujer",
    categoria: [categorias[1], categorias[3]],
    id_talle_producto: ["XS", "S", "M", "L", "XL"],
    color: ["Beige", "Blanco"],
    imagen: "https://img.ltwebstatic.com/images3_pi/2022/12/01/16700068787edb5e07bca7408f4f0ef1b024aaf645_thumbnail_900x.webp",
    marca: "Vetra Mujer",
    id_descuento_producto: 0
  }
]
