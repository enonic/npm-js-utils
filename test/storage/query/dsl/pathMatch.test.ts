import {deepStrictEqual} from 'assert';
import {storage} from '../../../../src';

const pathMatch = storage.query.dsl.pathMatch;


describe('pathMatch', () => {
	it('minimal', () => {
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
	/*it('boost', () => {
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
	it('minimumMatch', () => {
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

}); // describe pathMatch
