export function lpad(
	u: unknown,
	w: number = 2,
	z: string = ' '
): string {
	const s = '' + u; // Cast to string
	return s.length >= w
		? s
		: new Array(w - s.length + 1).join(z) + s;
}
