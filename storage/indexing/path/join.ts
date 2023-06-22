export function join(
	paths: string[],
	separator: string = '/'
): string {
	let parts: string[] = [];
	console.debug('paths', paths);

	// Split the inputs into a list of path commands.
	for (let i = 0;	i < paths.length; i += 1) {
		parts = parts.concat((paths[i] as string).split(separator));
	}
	console.debug('parts', parts);

	// Interpret the path commands to get the new resolved path.
	const newParts: string[] = [];
	for (let i = 0; i < parts.length; i += 1) {
		const part = parts[i];
		console.debug('part', part, 'newParts', newParts);
		// Remove leading and trailing slashes
		// Also remove "." segments
		if (!part || part === '.') continue;
		// Interpret ".." to pop the last segment
		if (
			part === '..'
		) {
			if (
				!newParts.length
				|| newParts[newParts.length-1] === '..'
			) {
				console.debug('HERE 1');
				newParts.push(part);
			} else {
				console.debug('HERE 2');
				newParts.pop();
			}
		} else {
			console.debug('HERE 3');
			// Push new path segments.
			newParts.push(part);
		}
	}
	console.debug('newParts', newParts);

	// Preserve the initial slash if there was one.
	let cleanedParts: string[] = [];
	if (parts[0] === '') { // An absolute path.
		for (let i = 0; i < newParts.length; i++) {
			const part = newParts[i];
			console.debug('part', part);
			if (part === '..') {
				continue; // Don't push paths "above" root unto cleanParts.
			} else {
				newParts.slice(i).forEach(p => cleanedParts.push(p));
				break;
			}
		}
		cleanedParts.unshift('');
	} else { // Not an absolute path.
		cleanedParts = newParts;
	}
	console.debug('cleanedParts', cleanedParts);

	// Turn back into a single string path.
	return cleanedParts.join(separator) || (cleanedParts.length ? separator : '.');
}
