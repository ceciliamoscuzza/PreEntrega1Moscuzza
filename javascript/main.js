let usuario = prompt("Ingrese su Nombre y apellido:");
console.log("🥃👋🏼Bienvenidx " + usuario);
let edad = prompt("Ingrese su edad:");

if (edad >= 21) {
  console.log(
    "👍🏼Como sos mayor de edad, podés elegir entre las siguientes experiencias: (a,b,c ó d)"
  );
  let experiencia = prompt(
    "Elegí tu CataExperience🥃: a) Nacional , b) Importado, c) De autor; d) Mix Premium"
  );
  mostrarExperiencia(experiencia);
  let mensaje = mostrarDescuentos();
  alert(mensaje);
} else {
  alert(
    "🚫No podemos sumarte a esta experiencia, tenés que ser mayor de edad🚫"
  );
}
function mostrarExperiencia(cata) {
  switch (cata.toLowerCase()) {
    case "a":
      alert(
        "La experiencia Nacional incluye la cata de 4 variedades. Su precio es de $5000"
      );
      break;
    case "b":
      alert(
        "La experiencia Importado incluye la cata de 4 variedades. Su precio es de $8000"
      );
      break;
    case "c":
      alert(
        "La experiencia De autor incluye la cata de 5 variedades. Su precio es de $12000"
      );
      break;
    case "d":
      alert(
        "La experiencia Mix Premium incluye la cata de 6 variedades. Su precio es de $16000"
      );
      break;
    default:
      alert("por favor ingresá una opción válida");
      break;
  }
}

function mostrarDescuentos() {
  let mensaje = "🥃Conocé nuestras promos🥃\n";
  for (let i = 2; i <= 10; i++) {
    let descuento = i * 5;
    mensaje += i + "  personas " + descuento + "% de descuento\n";
  }
  return mensaje;
}

const carrito = [
  { codigo: "j", nombre: "Whisky Taylor", precio: 32000 },
  { codigo: "c", nombre: "De autor", precio: 12000 },
  { codigo: "h", nombre: "Whisky Zizek", precio: 8562 },
  { codigo: "k", nombre: "Whisky Badiou", precio: 45000 },
];

const productos = [
  { codigo: "a", nombre: "Nacional", precio: 5000 },
  { codigo: "b", nombre: "Importado", precio: 8000 },
  { codigo: "c", nombre: "De autor", precio: 12000 },
  { codigo: "d", nombre: "Mix Premium", precio: 16000 },
  { codigo: "e", nombre: "Whisky Habermas", precio: 16000 },
  { codigo: "f", nombre: "Whisky Butler", precio: 7990 },
  { codigo: "g", nombre: "Whisky Latour", precio: 14000 },
  { codigo: "h", nombre: "Whisky Zizek", precio: 8562 },
  { codigo: "i", nombre: "Whisky Nussbaum", precio: 18000 },
  { codigo: "j", nombre: "Whisky Taylor", precio: 32000 },
  { codigo: "k", nombre: "Whisky Badiou", precio: 45000 },
];

function buscarProductos(codigo) {
  let resultado = productos.find(
    (producto) => producto.codigo === codigo.toLowerCase()
  );
  return resultado;
}

function terminarCompra() {
  const cata = new Compra(carrito);
  console.log(cata.obtenerSubtotal());
}
