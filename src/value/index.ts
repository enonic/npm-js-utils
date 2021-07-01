export function toStr(
	value: unknown,
	replacer: (key: string, value: any) => any = null,
	space: string | number = 4
): string {
	return JSON.stringify(value, replacer, space);
}
