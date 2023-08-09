import type { StemmingLanguage } from '../../types/Stemming';


export const STEMMING_LANGUAGE_CODE_ARABIC = 'ar';
export const STEMMING_LANGUAGE_CODE_BULGARIAN = 'bg';
export const STEMMING_LANGUAGE_CODE_BENGALI = 'bn';
export const STEMMING_LANGUAGE_CODE_CATALAN = 'ca';
export const STEMMING_LANGUAGE_CODE_CZECH = 'cs';
export const STEMMING_LANGUAGE_CODE_DANISH = 'da';
export const STEMMING_LANGUAGE_CODE_GERMAN = 'de';
export const STEMMING_LANGUAGE_CODE_GREEK = 'el';
export const STEMMING_LANGUAGE_CODE_ENGLISH = 'en';
export const STEMMING_LANGUAGE_CODE_BASQUE = 'eu';
export const STEMMING_LANGUAGE_CODE_PERSIAN = 'fa';
export const STEMMING_LANGUAGE_CODE_FINNISH = 'fi';
export const STEMMING_LANGUAGE_CODE_FRENCH = 'fr';
export const STEMMING_LANGUAGE_CODE_IRISH = 'ga';
export const STEMMING_LANGUAGE_CODE_GALICIAN = 'gl';
export const STEMMING_LANGUAGE_CODE_HINDI = 'in';
export const STEMMING_LANGUAGE_CODE_HUNGARIAN = 'hu';
export const STEMMING_LANGUAGE_CODE_ARMENIAN = 'hy';
export const STEMMING_LANGUAGE_CODE_INDONESIAN = 'id';
export const STEMMING_LANGUAGE_CODE_ITALIAN = 'it';
export const STEMMING_LANGUAGE_CODE_JAPANESE = 'ja';
export const STEMMING_LANGUAGE_CODE_KOREAN = 'ko';
export const STEMMING_LANGUAGE_CODE_SORANI = 'ku';
export const STEMMING_LANGUAGE_CODE_LITHUANIAN = 'lt';
export const STEMMING_LANGUAGE_CODE_LATVIAN = 'lv';
export const STEMMING_LANGUAGE_CODE_DUTCH = 'nl';
export const STEMMING_LANGUAGE_CODE_NORWEGIAN = 'no';
export const STEMMING_LANGUAGE_CODE_PORTUGUESE = 'pt';
export const STEMMING_LANGUAGE_CODE_BRAZILIAN = 'pt-br'; // TODO: Should this be pt-BR?
export const STEMMING_LANGUAGE_CODE_ROMANIAN = 'ro';
export const STEMMING_LANGUAGE_CODE_RUSSIAN = 'ru';
export const STEMMING_LANGUAGE_CODE_SPANISH = 'es';
export const STEMMING_LANGUAGE_CODE_SWEDISH = 'sv';
export const STEMMING_LANGUAGE_CODE_TURKISH = 'tr';
export const STEMMING_LANGUAGE_CODE_THAI = 'th';
export const STEMMING_LANGUAGE_CODE_CHINESE = 'zh';
export const STEMMING_LANGUAGE_CODES = [
	STEMMING_LANGUAGE_CODE_ARABIC,
	STEMMING_LANGUAGE_CODE_BULGARIAN,
	STEMMING_LANGUAGE_CODE_BENGALI,
	STEMMING_LANGUAGE_CODE_CATALAN,
	STEMMING_LANGUAGE_CODE_CZECH,
	STEMMING_LANGUAGE_CODE_DANISH,
	STEMMING_LANGUAGE_CODE_GERMAN,
	STEMMING_LANGUAGE_CODE_GREEK,
	STEMMING_LANGUAGE_CODE_ENGLISH,
	STEMMING_LANGUAGE_CODE_BASQUE,
	STEMMING_LANGUAGE_CODE_PERSIAN,
	STEMMING_LANGUAGE_CODE_FINNISH,
	STEMMING_LANGUAGE_CODE_FRENCH,
	STEMMING_LANGUAGE_CODE_IRISH,
	STEMMING_LANGUAGE_CODE_GALICIAN,
	STEMMING_LANGUAGE_CODE_HINDI,
	STEMMING_LANGUAGE_CODE_HUNGARIAN,
	STEMMING_LANGUAGE_CODE_ARMENIAN,
	STEMMING_LANGUAGE_CODE_INDONESIAN,
	STEMMING_LANGUAGE_CODE_ITALIAN,
	STEMMING_LANGUAGE_CODE_JAPANESE,
	STEMMING_LANGUAGE_CODE_KOREAN,
	STEMMING_LANGUAGE_CODE_SORANI,
	STEMMING_LANGUAGE_CODE_LITHUANIAN,
	STEMMING_LANGUAGE_CODE_LATVIAN,
	STEMMING_LANGUAGE_CODE_DUTCH,
	STEMMING_LANGUAGE_CODE_NORWEGIAN,
	STEMMING_LANGUAGE_CODE_PORTUGUESE,
	STEMMING_LANGUAGE_CODE_BRAZILIAN,
	STEMMING_LANGUAGE_CODE_ROMANIAN,
	STEMMING_LANGUAGE_CODE_RUSSIAN,
	STEMMING_LANGUAGE_CODE_SPANISH,
	STEMMING_LANGUAGE_CODE_SWEDISH,
	STEMMING_LANGUAGE_CODE_TURKISH,
	STEMMING_LANGUAGE_CODE_THAI,
	STEMMING_LANGUAGE_CODE_CHINESE
] as const;

// https://developer.enonic.com/docs/xp/stable/storage/indexing#languages
export const STEMMING_LANGUAGES: StemmingLanguage[] = [
	{
		code: STEMMING_LANGUAGE_CODE_ARABIC,
		language: 'Arabic'
	}, {
		code: STEMMING_LANGUAGE_CODE_BULGARIAN,
		language: 'Bulgarian'
	}, {
		code: STEMMING_LANGUAGE_CODE_BENGALI,
		language: 'Bengali'
	}, {
		code: STEMMING_LANGUAGE_CODE_CATALAN,
		language: 'Catalan'
	}, {
		code: STEMMING_LANGUAGE_CODE_CZECH,
		language: 'Czech'
	}, {
		code: STEMMING_LANGUAGE_CODE_DANISH,
		language: 'Danish'
	}, {
		code: STEMMING_LANGUAGE_CODE_GERMAN,
		language: 'German'
	}, {
		code: STEMMING_LANGUAGE_CODE_GREEK,
		language: 'Greek'
	}, {
		code: STEMMING_LANGUAGE_CODE_ENGLISH,
		language: 'English'
	}, {
		code: STEMMING_LANGUAGE_CODE_BASQUE,
		language: 'Basque'
	}, {
		code: STEMMING_LANGUAGE_CODE_PERSIAN,
		language: 'Persian'
	}, {
		code: STEMMING_LANGUAGE_CODE_FINNISH,
		language: 'Finnish'
	}, {
		code: STEMMING_LANGUAGE_CODE_FRENCH,
		language: 'French'
	}, {
		code: STEMMING_LANGUAGE_CODE_IRISH,
		language: 'Irish'
	}, {
		code: STEMMING_LANGUAGE_CODE_GALICIAN,
		language: 'Galician'
	}, {
		code: STEMMING_LANGUAGE_CODE_HINDI,
		language: 'Hindi'
	}, {
		code: STEMMING_LANGUAGE_CODE_HUNGARIAN,
		language: 'Hungarian'
	}, {
		code: STEMMING_LANGUAGE_CODE_ARMENIAN,
		language: 'Armenian'
	}, {
		code: STEMMING_LANGUAGE_CODE_INDONESIAN,
		language: 'Indonesian'
	}, {
		code: STEMMING_LANGUAGE_CODE_ITALIAN,
		language: 'Italian'
	}, {
		code: STEMMING_LANGUAGE_CODE_JAPANESE,
		language: 'Japanese'
	}, {
		code: STEMMING_LANGUAGE_CODE_KOREAN,
		language: 'Korean'
	}, {
		code: STEMMING_LANGUAGE_CODE_SORANI,
		language: 'Sorani'
	}, {
		code: STEMMING_LANGUAGE_CODE_LITHUANIAN,
		language: 'Lithuanian'
	}, {
		code: STEMMING_LANGUAGE_CODE_LATVIAN,
		language: 'Latvian'
	}, {
		code: STEMMING_LANGUAGE_CODE_DUTCH,
		language: 'Dutch'
	}, {
		code: STEMMING_LANGUAGE_CODE_NORWEGIAN,
		language: 'Norwegian'
	}, {
		code: STEMMING_LANGUAGE_CODE_PORTUGUESE,
		language: 'Portuguese'
	}, {
		code: STEMMING_LANGUAGE_CODE_BRAZILIAN,
		language: 'Brazilian'
	}, {
		code: STEMMING_LANGUAGE_CODE_ROMANIAN,
		language: 'Romanian'
	}, {
		code: STEMMING_LANGUAGE_CODE_RUSSIAN,
		language: 'Russian'
	}, {
		code: STEMMING_LANGUAGE_CODE_SPANISH,
		language: 'Spanish'
	}, {
		code: STEMMING_LANGUAGE_CODE_SWEDISH,
		language: 'Swedish'
	}, {
		code: STEMMING_LANGUAGE_CODE_TURKISH,
		language: 'Turkish'
	}, {
		code: STEMMING_LANGUAGE_CODE_THAI,
		language: 'Thai'
	}, {
		code: STEMMING_LANGUAGE_CODE_CHINESE,
		language: 'Chinese'
	}
];
