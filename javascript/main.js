let usuario = prompt("Ingrese su Nombre y apellido:");

let edad = prompt("Ingrese su edad:");

if (edad >= 21) {
  alert("🥃👋🏼Bienvenidx " + usuario);
} else {
  alert("🚫No podés sumarte a esta experiencia, tenés que ser mayor de edad🚫");
}

let experiencia = prompt(
  "Elegí tu CataExperience🥃: Nacional, Importado, De autor; Mix Premium"
);
let nacional;
let importado;
let deAutor;
let mixPremium;
