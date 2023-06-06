interface NestedRecord {
	[name: PropertyKey]: NestedRecord | unknown
}

// Type alias 'NestedRecord' circularly references itself.ts(2456)
// type NestedRecord = Record<PropertyKey, string|NestedRecord>;

function deleteIn(obj: NestedRecord, ...paths: PropertyKey[]): void
function deleteIn(obj: NestedRecord, path: PropertyKey): void
function deleteIn(obj: NestedRecord, paths: PropertyKey[]): void
function deleteIn(obj: NestedRecord, ...paths: any): void {
	if (!obj || !paths) {
		return;
	}
	const uniformPath: PropertyKey[] = [];
	for (let i = 0; i < (paths).length; i++) {
		const path = (paths)[i];
		if (typeof path === 'string') {
			path.split('.').forEach(p => uniformPath.push(p));
		} else if (Array.isArray(path)) {
			path.forEach(p => uniformPath.push(p));
		} else { // number | symbol
			uniformPath.push(path);
		}
	}
	for (let i = 0; i < uniformPath.length - 1; i++) {
		obj = obj[uniformPath[i]] as NestedRecord;
		if (typeof obj === 'undefined') {
			return;
		}
	}
	delete obj[uniformPath.pop()];
}

export default deleteIn;
