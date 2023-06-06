interface NestedRecord {
	[name: PropertyKey]: NestedRecord | unknown
}

// Type alias 'NestedRecord' circularly references itself.ts(2456)
// type NestedRecord = Record<PropertyKey, string|NestedRecord>;

export default function deleteIn(obj: NestedRecord, path: PropertyKey | PropertyKey[]) {
	if (!obj || !path) {
		return;
	}
	if (typeof path === 'string') {
		path = path.split('.');
	}
	for (let i = 0; i < (path as PropertyKey[]).length - 1; i++) {
		obj = obj[(path as PropertyKey[])[i] as PropertyKey] as NestedRecord;
		if (typeof obj === 'undefined') {
			return;
		}
	}
	delete obj[(path as PropertyKey[]).pop() as PropertyKey];
}
