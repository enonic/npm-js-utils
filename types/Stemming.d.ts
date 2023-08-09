export type StemmingLanguageCodeArabic = 'ar';
export type StemmingLanguageCodeBulgarian = 'bg';
export type StemmingLanguageCodeBengali = 'bn';
export type StemmingLanguageCodeCatalan = 'ca';
export type StemmingLanguageCodeCzech = 'cs';
export type StemmingLanguageCodeDanish = 'da';
export type StemmingLanguageCodeGerman = 'de';
export type StemmingLanguageCodeGreek = 'el';
export type StemmingLanguageCodeEnglish = 'en';
export type StemmingLanguageCodeBasque = 'eu';
export type StemmingLanguageCodePersian = 'fa';
export type StemmingLanguageCodeFinnish = 'fi';
export type StemmingLanguageCodeFrench = 'fr';
export type StemmingLanguageCodeIrish = 'ga';
export type StemmingLanguageCodeGalician = 'gl';
export type StemmingLanguageCodeHindi = 'in';
export type StemmingLanguageCodeHungarian = 'hu';
export type StemmingLanguageCodeArmenian = 'hy';
export type StemmingLanguageCodeIndonesian = 'id';
export type StemmingLanguageCodeItalian = 'it';
export type StemmingLanguageCodeJapanese = 'ja';
export type StemmingLanguageCodeKorean = 'ko';
export type StemmingLanguageCodeSorani = 'ku';
export type StemmingLanguageCodeLithuanian = 'lt';
export type StemmingLanguageCodeLatvian = 'lv';
export type StemmingLanguageCodeDutch = 'nl';
export type StemmingLanguageCodeNorwegian = 'no';
export type StemmingLanguageCodePortuguese = 'pt';
export type StemmingLanguageCodeBrazilian = 'pt-br'; // TODO: should this be pt-br?
export type StemmingLanguageCodeRomanian = 'ro';
export type StemmingLanguageCodeRussian = 'ru';
export type StemmingLanguageCodeSpanish = 'es';
export type StemmingLanguageCodeSwedish = 'sv';
export type StemmingLanguageCodeTurkish = 'tr';
export type StemmingLanguageCodeThai = 'th';
export type StemmingLanguageCodeChinese = 'zh';

export type StemmingLanguageCode = StemmingLanguageCodeArabic
	| StemmingLanguageCodeBulgarian
	| StemmingLanguageCodeBengali
	| StemmingLanguageCodeCatalan
	| StemmingLanguageCodeCzech
	| StemmingLanguageCodeDanish
	| StemmingLanguageCodeGerman
	| StemmingLanguageCodeGreek
	| StemmingLanguageCodeEnglish
	| StemmingLanguageCodeBasque
	| StemmingLanguageCodePersian
	| StemmingLanguageCodeFinnish
	| StemmingLanguageCodeFrench
	| StemmingLanguageCodeIrish
	| StemmingLanguageCodeGalician
	| StemmingLanguageCodeHindi
	| StemmingLanguageCodeHungarian
	| StemmingLanguageCodeArmenian
	| StemmingLanguageCodeIndonesian
	| StemmingLanguageCodeItalian
	| StemmingLanguageCodeJapanese
	| StemmingLanguageCodeKorean
	| StemmingLanguageCodeSorani
	| StemmingLanguageCodeLithuanian
	| StemmingLanguageCodeLatvian
	| StemmingLanguageCodeDutch
	| StemmingLanguageCodeNorwegian
	| StemmingLanguageCodePortuguese
	| StemmingLanguageCodeBrazilian
	| StemmingLanguageCodeRomanian
	| StemmingLanguageCodeRussian
	| StemmingLanguageCodeSpanish
	| StemmingLanguageCodeSwedish
	| StemmingLanguageCodeTurkish
	| StemmingLanguageCodeThai
	| StemmingLanguageCodeChinese;

export type StemmingLanguageCodes = StemmingLanguageCode[];

export interface StemmingLanguage {
	code: string,
	language: string
}
