let usuario = prompt("Ingrese su Nombre y apellido:");
console.log("🥃👋🏼Bienvenidx " + usuario);
let edad = prompt("Ingrese su edad:");

if (edad >= 21) {
  console.log(
    "Como sos mayor de edad, podés elegir entre las siguientes experiencias: (a,b,c ó d)"
  );
  let experiencia = prompt(
    "Elegí tu CataExperience🥃: a) Nacional , b) Importado, c) De autor; d) Mix Premium"
  );
} else {
  alert(
    "🚫No podemos sumarte a esta experiencia, tenés que ser mayor de edad🚫"
  );
}
