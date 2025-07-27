function greet(name: string): string {
	return `Hello, ${ name }!`;
}

console.log(greet("Jorge"));

const user: string = "Jorge";
const age: number = 30;
const active: boolean = true;
const vslue: any = "podría ser cualquier cosa";

function sum(a: number, b: number): number {
	return a + b;
}

function greetings(nombre: string): void {
	console.log(`Hola ${nombre}`);
}

const names: string[] = ["jorge", "ana", "luis"];
const names2: Array<string> = ["Jorge", "Ana", "Luis"];

const tuple: [string, number] = ["Jorge", 30];

const person: { name: string; age: number } = {
	name: "Jorge",
	age: 30
}

type User = {
	name: string;
	age: number;
	active: boolean;
};

let user1: User = {
	name: "Jorge",
	age: 35,
	active: true,
};

function capitalize(names: Array<string>): Array<string> {
	return names.map(name => name.toUpperCase());
}

console.log(capitalize(names));