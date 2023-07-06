import { isStringLiteral } from '../value/isStringLiteral';


export default function isStringArray(value: string[] | unknown): value is string[] {
	return Array.isArray(value) && value.every(isStringLiteral);
}
