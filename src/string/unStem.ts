function unStemEnglish(word :string) :Array<string> {
	return ['arsen', 'commun','gener',"'s'", "'s",'ied', 's','ies', 'sses','ss', 'us','', 'bb', 'dd','ff', 'gg','bl', 'mm','nn', 'pp','rr', 'at','tt', 'iz','ed', 'eed','ing', 'edly','eedly', 'ingly','anci', 'enci','ogi', 'li','bli', 'abli','alli', 'fulli','lessli', 'ousli','entli', 'aliti','biliti', 'iviti','tional', 'ational','alism', 'ation','ization', 'izer','ator', 'iveness','fulness', 'ousness','icate', 'ative','alize', 'iciti','ical', 'tional','ational', 'ful','ness', 'ic','ance', 'ence','able', 'ible','ate', 'ive','ize', 'iti','al', 'ism','ion', 'er','ous', 'ant','ent', 'ment','ement', 'e','l', 'succeed','proceed', 'exceed','canning', 'inning','earring', 'herring','outing', 'andes','atlas', 'bias','cosmos', 'dying','early', 'gently','howe', 'idly','lying', 'news','only', 'singly','skies', 'skis','sky', 'tying','ugly'].map((post) => `${word}${post}`);
}

function unStemNorwegian(word :string) :Array<string> {
	return ['a', 'e', 'ede', 'ande', 'ende', 'ane', 'ene', 'hetene', 'erte',
		'en', 'heten', 'ar', 'er', 'heter', 's', 'as', 'es', 'edes', 'endes',
		'enes', 'hetenes', 'ens', 'hetens', 'ers', 'ets', 'et', 'het', 'ert',
		'ast', 'dt', 'vt', 'leg', 'eleg', 'ig', 'eig', 'lig', 'elig', 'els',
		'lov', 'elov', 'slov', 'hetslov'].map((post) => `${word}${post}`);
}

export function unStem(word :string, language: string) :Array<string> {
	switch (language) {
		case 'en': return unStemEnglish(word);
		case 'no': return unStemNorwegian(word);
		default:
			throw new Error(`Unsupported lanugage:${language}`);
	}
}
