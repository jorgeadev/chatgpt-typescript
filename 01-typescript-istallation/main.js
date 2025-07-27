function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Jorge"));
var user = "Jorge";
var age = 30;
var active = true;
var vslue = "podría ser cualquier cosa";
function sum(a, b) {
    return a + b;
}
function greetings(nombre) {
    console.log("Hola ".concat(nombre));
}
var names = ["jorge", "ana", "luis"];
var names2 = ["Jorge", "Ana", "Luis"];
var tuple = ["Jorge", 30];
var person = {
    name: "Jorge",
    age: 30
};
var user1 = {
    name: "Jorge",
    age: 35,
    active: true,
};
function capitalize(names) {
    return names.map(function (name) { return name.toUpperCase(); });
}
console.log(capitalize(names));
