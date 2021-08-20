function unStemNorwegian(word :string) :Array<string> {
	return ['a', 'e', 'ede', 'ande', 'ende', 'ane', 'ene', 'hetene', 'erte',
		'en', 'heten', 'ar', 'er', 'heter', 's', 'as', 'es', 'edes', 'endes',
		'enes', 'hetenes', 'ens', 'hetens', 'ers', 'ets', 'et', 'het', 'ert',
		'ast', 'dt', 'vt', 'leg', 'eleg', 'ig', 'eig', 'lig', 'elig', 'els',
		'lov', 'elov', 'slov', 'hetslov'].map((post) => `${word}${post}`)
}

export function unStem(word :string, language: string) :Array<string> {
	switch (language) {
		case 'no': return unStemNorwegian(word);
		default:
			throw new Error(`Unsupported lanugage:${language}`);
	}
}
