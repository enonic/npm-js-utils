// https://developer.enonic.com/docs/xp/stable/storage/indexing#_allText
// https://developer.enonic.com/docs/xp/stable/storage/properties#indexing_properties
// https://developer.enonic.com/docs/xp/stable/storage/dsl#stemmed
// https://developer.enonic.com/docs/xp/stable/storage/noql#functionexpr
// I have now tested that both the old Query String and the new Query DSL
// support both uppercase and lowercase T: _allText OR _alltext
// However highlight will change property uppercase in input to lowercase in output.
// So the proper "workaround", is to always use lowercase from now on.
export const HIGHLIGHT_FIELD_ALLTEXT = '_alltext'; // NOTICE all lowercase!

export const HIGHLIGHT_OPTION_ENCODER_DEFAULT = 'default';
export const HIGHLIGHT_OPTION_ENCODER_HTML = 'html';

export type HighlihtOptionEncoderDefault = typeof HIGHLIGHT_OPTION_ENCODER_DEFAULT;
export type HighlihtOptionEncoderHtml = typeof HIGHLIGHT_OPTION_ENCODER_HTML;
export type HighlihtOptionEncoder = HighlihtOptionEncoderDefault|HighlihtOptionEncoderHtml;

export const HIGHLIGHT_OPTION_ENCODERS :Array<HighlihtOptionEncoder> = [
	HIGHLIGHT_OPTION_ENCODER_DEFAULT,
	HIGHLIGHT_OPTION_ENCODER_HTML
];
