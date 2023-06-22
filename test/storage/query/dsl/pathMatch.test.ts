import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { pathMatch } from '../../../../storage/query/dsl/index';


describe('pathMatch', () => {
	test('minimal', () => {
		deepStrictEqual(
			{
				pathMatch: {
					field: '_path',
					path: '/mySite/folder1/folder2/images'
				}
			},
			pathMatch('_path', '/mySite/folder1/folder2/images')
		)
	});
	/*test('boost', () => {
		deepStrictEqual(
			{
				pathMatch: {
					field: '_path',
					path: '/mySite/folder1/folder2/images',
					boost: 2
				}
			},
			pathMatch('_path', '/mySite/folder1/folder2/images',2)
		)
	});*/
	test('minimumMatch', () => {
		deepStrictEqual(
			{
				pathMatch: {
					field: '_path',
					path: '/mySite/folder1/folder2/images',
					//boost: 1,
					minimumMatch: 2
				}
			},
			pathMatch(
				'_path',
				'/mySite/folder1/folder2/images',
				//1,
				2
			)
		)
	});
	test('minimumMatch and boost', () => {
		deepStrictEqual(
			{
				pathMatch: {
					field: '_path',
					path: '/mySite/folder1/folder2/images',
					minimumMatch: 2,
					boost: 1
				}
			},
			pathMatch(
				'_path',
				'/mySite/folder1/folder2/images',
				2,
				1
			)
		)
	});
	test('just boost', () => {
		deepStrictEqual(
			{
				pathMatch: {
					field: '_path',
					path: '/mySite/folder1/folder2/images',
					boost: 2
				}
			},
			pathMatch(
				'_path',
				'/mySite/folder1/folder2/images',
				undefined,
				2
			)
		)
	});

}); // describe pathMatch
