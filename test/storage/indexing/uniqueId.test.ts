import {
	deepStrictEqual,
	//throws // For some reason this gets borked by swc
} from 'assert';
import * as assert from 'assert';
import {uniqueId} from '../../../src';


describe('uniqueId', () => {
	it('joins all parts with a dot', () => {
		deepStrictEqual(
			'repo.branch.node.version',
			uniqueId({
				repoId: 'repo',
				branchId: 'branch',
				nodeId: 'node',
				versionKey: 'version'
			})
		)
	});
	it('branchId and versionKey are optional', () => {
		deepStrictEqual(
			'repo.node',
			uniqueId({
				repoId: 'repo',
				nodeId: 'node'
			})
		)
	});
	it('throws TypeError "Cannot destructure" when no params', () => {
		assert.throws(() => {
			//eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			uniqueId();
		}, {
			name: 'TypeError',
			//message: "Cannot destructure property 'repoId' of 'undefined' as it is undefined."
			//message: "Cannot read property 'repoId' of undefined"
			//message: "Cannot read properties of undefined (reading 'repoId')"
			message: /^Cannot (destructure|read) propert.* 'repoId'/
		});
	});
	it('throws TypeError when required named parameter repoId is missing', () => {
		assert.throws(() => {
			//eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			uniqueId({});
		}, {
			name: 'TypeError',
			message: 'uniqueId: Missing required named parameter repoId!'
		});
	});
	it('throws TypeError when required named parameter nodeId is missing', () => {
		assert.throws(() => {
			//eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			uniqueId({
				repoId: 'repo'
			});
		}, {
			name: 'TypeError',
			message: 'uniqueId: Missing required named parameter nodeId!'
		});
	});
}); // describe uniqueId
