export function join(
	paths :string[],
	separator :string = '/'
) :string {
	let parts :string[] = [];

	// Split the inputs into a list of path commands.
	for (let i = 0;	i < paths.length; i += 1) {
		parts = parts.concat((paths[i] as string).split(separator));
	}

	// Interpret the path commands to get the new resolved path.
	const newParts :string[] = [];
	for (let i = 0; i < parts.length; i += 1) {
		const part = parts[i];
		// Remove leading and trailing slashes
		// Also remove "." segments
		if (!part || part === '.') continue;
		// Interpret ".." to pop the last segment
		if (part === '..') newParts.pop();
		// Push new path segments.
		else newParts.push(part);
	}

	// Preserve the initial slash if there was one.
	if (parts[0] === '') newParts.unshift('');

	// Turn back into a single string path.
	return newParts.join(separator) || (newParts.length ? separator : '.');
}
