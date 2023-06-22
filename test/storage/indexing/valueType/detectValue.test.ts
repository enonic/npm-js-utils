import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import {
	//VALUE_TYPE_ANY,
	//VALUE_TYPE_BOOLEAN,
	VALUE_TYPE_DOUBLE,
	VALUE_TYPE_GEO_POINT,
	//VALUE_TYPE_INSTANT,
	//VALUE_TYPE_LOCAL_DATE,
	//VALUE_TYPE_LOCAL_DATE_TIME,
	//VALUE_TYPE_LOCAL_TIME,
	//VALUE_TYPE_LONG,
	//VALUE_TYPE_REFERENCE,
	//VALUE_TYPE_SET,
	VALUE_TYPE_STRING,
	detectCommonValueType,
	detectValueType
} from '../../../../index';
import {
	BOOLEANS,
	EMPTY_ARRAY,
	FUNCTION,
	GEOPOINTS,
	GEOPOINT_ARRAYS,
	GEOPOINT_STRINGS,
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
} from '@enonic/test-data'
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
	describe('detectCommonValueType()', () => {
		test('geoStrs --> geo', () => {
			deepStrictEqual(
				VALUE_TYPE_GEO_POINT,
				detectCommonValueType(GEOPOINT_STRINGS)
			); // deepStrictEqual
		}); // it
		test('[...geoArrs, ...geoStrs] --> geo', () => {
			deepStrictEqual(
				VALUE_TYPE_GEO_POINT,
				detectCommonValueType([
					...GEOPOINT_ARRAYS,
					...GEOPOINT_STRINGS
				])
			); // deepStrictEqual
		}); // it
		test('[...geoStrs, ...geoArrs] --> geo', () => {
			deepStrictEqual(
				VALUE_TYPE_GEO_POINT,
				detectCommonValueType([
					...GEOPOINT_STRINGS,
					...GEOPOINT_ARRAYS
				])
			); // deepStrictEqual
		}); // it
		test('[...geoArrs,...nums] --> double', () => {
			deepStrictEqual(
				VALUE_TYPE_DOUBLE,
				detectCommonValueType([
					...GEOPOINT_ARRAYS,
					...NUMBERS_FINITE
				])
			); // deepStrictEqual
		}); // it
		test('[...nums,...geoArrs] --> double', () => {
			deepStrictEqual(
				VALUE_TYPE_DOUBLE,
				detectCommonValueType([
					...NUMBERS_FINITE,
					...GEOPOINT_ARRAYS
				])
			); // deepStrictEqual
		}); // it
		test('[...geoArrs,...geoStrs,...nums] --> string', () => {
			deepStrictEqual(
				VALUE_TYPE_STRING,
				detectCommonValueType([
					...GEOPOINT_ARRAYS,
					...GEOPOINT_STRINGS,
					...NUMBERS_FINITE
				])
			); // deepStrictEqual
		}); // it
		test('[...nums,...geoStrs,...geoArrs] --> string', () => {
			deepStrictEqual(
				VALUE_TYPE_STRING,
				detectCommonValueType([
					...NUMBERS_FINITE,
					...GEOPOINT_STRINGS,
					...GEOPOINT_ARRAYS
				])
			); // deepStrictEqual
		}); // it
	}); // describe detectCommonValueType

	describe('detectValueType()', () => {

		describe('--> boolean', () => {
			for (let i = 0; i < BOOLEANS.length; i++) {
				const param = BOOLEANS[i];
				test(`${toStr(param)}`, () => {
					deepStrictEqual(
						'boolean',
						detectValueType(param)
					);
				});
			} //for
			test(`${toStr(BOOLEANS)}`, () => {
				deepStrictEqual(
					'boolean',
					detectValueType(BOOLEANS)
				);
			});
		});

		describe('--> double', () => {
			for (let i = 0; i < NUMBERS_FINITE.length; i++) {
				const param = NUMBERS_FINITE[i];
				test(`${toStr(param)}`, () => {
					deepStrictEqual(
						'double',
						detectValueType(param)
					);
				});
			} // for
			test(`${toStr(NUMBERS_FINITE)}`, () => {
				deepStrictEqual(
					'double',
					detectValueType(NUMBERS_FINITE)
				);
			});
			const shouldResolveToDouble = GEOPOINT_ARRAYS.concat([0,0,0]);
			test(`${toStr(shouldResolveToDouble)}`, () => {
				deepStrictEqual(
					'double',
					detectValueType(shouldResolveToDouble)
				);
			});
			const shouldResolveToString = GEOPOINTS.concat([0,0,0]);
			test(`${toStr(shouldResolveToString)}`, () => {
				deepStrictEqual(
					VALUE_TYPE_STRING,
					detectValueType(shouldResolveToString)
				);
			});
		});

		describe('--> geoPoint', () => {
			for (let i = 0; i < GEOPOINTS.length; i++) {
				const param = GEOPOINTS[i];
				test(`${toStr(param)}`, () => {
					deepStrictEqual(
						'geoPoint',
						detectValueType(param)
					);
				});
			} // for
			test(`${toStr(GEOPOINTS)}`, () => {
				deepStrictEqual(
					'geoPoint',
					detectValueType(GEOPOINTS)
				);
			});
		});

		describe('--> instant', () => {
			for (let i = 0; i < INSTANTS.length; i++) {
				const param = INSTANTS[i];
				test(`${toStr(param)}`, () => {
					deepStrictEqual(
						'instant',
						detectValueType(param)
					);
				});
			} // for
			test(`${toStr(INSTANTS)}`, () => {
				deepStrictEqual(
					'instant',
					detectValueType(INSTANTS)
				);
			});
		});

		describe('--> localDate', () => {
			for (let i = 0; i < LOCAL_DATE_STRINGS.length; i++) {
				const param = LOCAL_DATE_STRINGS[i];
				test(`${toStr(param)}`, () => {
					deepStrictEqual(
						'localDate',
						detectValueType(param)
					);
				});
			} // for
			test(`${toStr(LOCAL_DATE_STRINGS)}`, () => {
				deepStrictEqual(
					'localDate',
					detectValueType(LOCAL_DATE_STRINGS)
				);
			});
		});

		describe('--> localDateTime', () => {
			for (let i = 0; i < LOCAL_DATE_TIME_STRINGS.length; i++) {
				const param = LOCAL_DATE_TIME_STRINGS[i];
				test(`${toStr(param)}`, () => {
					deepStrictEqual(
						'localDateTime',
						detectValueType(param)
					);
				});
			} // for
			test(`${toStr(LOCAL_DATE_TIME_STRINGS)}`, () => {
				deepStrictEqual(
					'localDateTime',
					detectValueType(LOCAL_DATE_TIME_STRINGS)
				);
			});
		});

		describe('--> localTime', () => {
			for (let i = 0; i < LOCAL_TIME_STRINGS.length; i++) {
				const param = LOCAL_TIME_STRINGS[i];
				test(`${toStr(param)}`, () => {
					deepStrictEqual(
						'localTime',
						detectValueType(param)
					);
				});
			} // for
			test(`${toStr(LOCAL_TIME_STRINGS)}`, () => {
				deepStrictEqual(
					'localTime',
					detectValueType(LOCAL_TIME_STRINGS)
				);
			});
		});

		describe('--> reference', () => {
			for (let i = 0; i < UUID_V4.length; i++) {
				const param = UUID_V4[i];
				test(`${toStr(param)}`, () => {
					deepStrictEqual(
						'reference',
						detectValueType(param)
					);
				});
			} // for
			test(`${toStr(UUID_V4)}`, () => {
				deepStrictEqual(
					'reference',
					detectValueType(UUID_V4)
				);
			});
		});

		describe('--> set', () => {
			for (let i = 0; i < SET.length; i++) {
				const param = SET[i];
				test(`${toStr(param)}`, () => {
					deepStrictEqual(
						'set',
						detectValueType(param)
					);
				});
			} // for
			test(`${toStr(SET)}`, () => {
				deepStrictEqual(
					'set',
					detectValueType(SET)
				);
			});
		});

		describe('--> string', () => {
			for (let i = 0; i < STRINGS.length; i++) {
				const param = STRINGS[i];
				test(`${toStr(param)}`, () => {
					deepStrictEqual(
						'string',
						detectValueType(param)
					);
				});
			} // for
			test(`${toStr(STRINGS)}`, () => {
				deepStrictEqual(
					'string',
					detectValueType(STRINGS)
				);
			});
		});

		describe('--> any', () => {
			for (let i = 0; i < ANY.length; i++) {
				const param = ANY[i];
				test(`${toStr(param)}`, () => {
					deepStrictEqual(
						'any',
						detectValueType(param)
					);
				});
			} // for
			test(`${toStr(ANY)}`, () => {
				deepStrictEqual(
					'any',
					detectValueType(ANY)
				);
			});
		});
	}); // describe detectValueType
}); // describe value
