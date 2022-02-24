import {deepStrictEqual} from 'assert';
import {detectValueType} from '../../../../src';
import {
	BOOLEANS,
	EMPTY_ARRAY,
	FUNCTION,
	GEOPOINTS,
	INSTANTS,
	LOCAL_DATE_STRINGS,
	LOCAL_DATE_TIME_STRINGS,
	LOCAL_TIME_STRINGS,
	NAN,
	NULL,
	NUMBERS_FINITE,
	NUMBERS_INFINITE,
	OBJECTS,
	STRINGS,
	UNDEFINED,
	UUID_V4
} from '../../../testData'
import {toStr} from '../../../toStr';


const ANY = [].concat(
	EMPTY_ARRAY,
	FUNCTION, // Perhaps this should throw error instead, or JSON?
	NAN,
	NULL,
	NUMBERS_INFINITE,
	UNDEFINED
);

const SET = [].concat(
	OBJECTS // contains EMPTY_OBJECT
);


describe('value', () => {
	describe('detectValueType()', () => {

		describe('--> boolean', () => {
			for (var i = 0; i < BOOLEANS.length; i++) {
				const param = BOOLEANS[i];
				it(`${toStr(param)}`, () => {
					deepStrictEqual(
						'boolean',
						detectValueType(param)
					);
				});
			} //for
			it(`${toStr(BOOLEANS)}`, () => {
				deepStrictEqual(
					'boolean',
					detectValueType(BOOLEANS)
				);
			});
		});

		describe('--> double', () => {
			for (var i = 0; i < NUMBERS_FINITE.length; i++) {
				const param = NUMBERS_FINITE[i];
				it(`${toStr(param)}`, () => {
					deepStrictEqual(
						'double',
						detectValueType(param)
					);
				});
			} // for
			it(`${toStr(NUMBERS_FINITE)}`, () => {
				deepStrictEqual(
					'double',
					detectValueType(NUMBERS_FINITE)
				);
			});
		});

		describe('--> geoPoint', () => {
			for (var i = 0; i < GEOPOINTS.length; i++) {
				const param = GEOPOINTS[i];
				it(`${toStr(param)}`, () => {
					deepStrictEqual(
						'geoPoint',
						detectValueType(param)
					);
				});
			} // for
			it(`${toStr(GEOPOINTS)}`, () => {
				deepStrictEqual(
					'geoPoint',
					detectValueType(GEOPOINTS)
				);
			});
		});

		describe('--> instant', () => {
			for (var i = 0; i < INSTANTS.length; i++) {
				const param = INSTANTS[i];
				it(`${toStr(param)}`, () => {
					deepStrictEqual(
						'instant',
						detectValueType(param)
					);
				});
			} // for
			it(`${toStr(INSTANTS)}`, () => {
				deepStrictEqual(
					'instant',
					detectValueType(INSTANTS)
				);
			});
		});

		describe('--> localDate', () => {
			for (var i = 0; i < LOCAL_DATE_STRINGS.length; i++) {
				const param = LOCAL_DATE_STRINGS[i];
				it(`${toStr(param)}`, () => {
					deepStrictEqual(
						'localDate',
						detectValueType(param)
					);
				});
			} // for
			it(`${toStr(LOCAL_DATE_STRINGS)}`, () => {
				deepStrictEqual(
					'localDate',
					detectValueType(LOCAL_DATE_STRINGS)
				);
			});
		});

		describe('--> localDateTime', () => {
			for (var i = 0; i < LOCAL_DATE_TIME_STRINGS.length; i++) {
				const param = LOCAL_DATE_TIME_STRINGS[i];
				it(`${toStr(param)}`, () => {
					deepStrictEqual(
						'localDateTime',
						detectValueType(param)
					);
				});
			} // for
			it(`${toStr(LOCAL_DATE_TIME_STRINGS)}`, () => {
				deepStrictEqual(
					'localDateTime',
					detectValueType(LOCAL_DATE_TIME_STRINGS)
				);
			});
		});

		describe('--> localTime', () => {
			for (var i = 0; i < LOCAL_TIME_STRINGS.length; i++) {
				const param = LOCAL_TIME_STRINGS[i];
				it(`${toStr(param)}`, () => {
					deepStrictEqual(
						'localTime',
						detectValueType(param)
					);
				});
			} // for
			it(`${toStr(LOCAL_TIME_STRINGS)}`, () => {
				deepStrictEqual(
					'localTime',
					detectValueType(LOCAL_TIME_STRINGS)
				);
			});
		});

		describe('--> reference', () => {
			for (var i = 0; i < UUID_V4.length; i++) {
				const param = UUID_V4[i];
				it(`${toStr(param)}`, () => {
					deepStrictEqual(
						'reference',
						detectValueType(param)
					);
				});
			} // for
			it(`${toStr(UUID_V4)}`, () => {
				deepStrictEqual(
					'reference',
					detectValueType(UUID_V4)
				);
			});
		});

		describe('--> set', () => {
			for (var i = 0; i < SET.length; i++) {
				const param = SET[i];
				it(`${toStr(param)}`, () => {
					deepStrictEqual(
						'set',
						detectValueType(param)
					);
				});
			} // for
			it(`${toStr(SET)}`, () => {
				deepStrictEqual(
					'set',
					detectValueType(SET)
				);
			});
		});

		describe('--> string', () => {
			for (var i = 0; i < STRINGS.length; i++) {
				const param = STRINGS[i];
				it(`${toStr(param)}`, () => {
					deepStrictEqual(
						'string',
						detectValueType(param)
					);
				});
			} // for
			it(`${toStr(STRINGS)}`, () => {
				deepStrictEqual(
					'string',
					detectValueType(STRINGS)
				);
			});
		});

		describe('--> any', () => {
			for (var i = 0; i < ANY.length; i++) {
				const param = ANY[i];
				it(`${toStr(param)}`, () => {
					deepStrictEqual(
						'any',
						detectValueType(param)
					);
				});
			} // for
			it(`${toStr(ANY)}`, () => {
				deepStrictEqual(
					'any',
					detectValueType(ANY)
				);
			});
		});

	}); // describe detectValueType
}); // describe value
