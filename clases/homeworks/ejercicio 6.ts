function suma12(a: string, b: number): string;
function suma12(a: number, b: number): number;
function suma12(a: number, b: string):string;
function suma12(a: string, b: string):string;
function suma12(a: number | string, b: number | string): number | string {
	if (typeof a === 'string' || typeof b === 'string') {
		a = a.toString();
		b = b.toString();
		return a + b
	} else {
		Number(a);
		Number(b);
		return a + b;
	}
} //que pasa si yo quisiera concatenar strings con esta funcion?


suma12(1, 2);
