type ArrayElement<ArrayType extends unknown[]> =
	ArrayType extends (infer ElementType)[] ? ElementType : never;


function sameValueZero(x :unknown, y :unknown) {
	return (
		x === y ||
		(typeof x === "number" &&
		typeof y === "number" &&
		isNaN(x) &&
		isNaN(y))
	);
}


export function includes<
	A extends Array<unknown>
>(
	array :A,
	searchElement :ArrayElement<A>,
	fromIndex :number = 0
) :boolean {
	if (array == null) {
		throw new TypeError('"array" is null or not defined');
	}

	// 1. Let O be ? ToObject(this value).
	const o = Object(array);

	// 2. Let len be ? ToLength(? Get(O, "length")).
	const len = o.length >>> 0;

	// 3. If len is 0, return false.
	if (len === 0) {
		return false;
	}

	// 4. Let n be ? ToInteger(fromIndex).
	//    (If fromIndex is undefined, this step produces the value 0.)
	const n = fromIndex | 0;

	// 5. If n ≥ 0, then
	//  a. Let k be n.
	// 6. Else n < 0,
	//  a. Let k be len + n.
	//  b. If k < 0, let k be 0.
	let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

	// 7. Repeat, while k < len
	while (k < len) {
		// a. Let elementK be the result of ? Get(O, ! ToString(k)).
		// b. If SameValueZero(searchElement, elementK) is true, return true.
		if (sameValueZero(o[k], searchElement)) {
			return true;
		}
		// c. Increase k by 1.
		k++;
	}

	// 8. Return false
	return false;
}
