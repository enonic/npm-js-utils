import {deepStrictEqual} from 'assert';
import {JavaBridge} from '../../src/mock/JavaBridge';

function hasMethod(obj :unknown, name :string) {
	// TODO check if obj is Object?
	return typeof obj[name] === 'function';
}

describe('mock', () => {
	describe('JavaBridge', () => {
		const javaBridge = new JavaBridge({
			app: {
				config: {},
				name: 'com.enonic.app.test',
				version: '0.0.1-SNAPSHOT'
			}
		});
		it('instance has property repo', () => {
			deepStrictEqual(
				true,
				javaBridge.hasOwnProperty('repo')
			);
		}); // it
		describe('repo', () => {
			it('repo object has method create', () => {
				deepStrictEqual(
					true,
					hasMethod(javaBridge.repo, 'create')
				);
			}); // it
			it('repo object has method get', () => {
				deepStrictEqual(
					true,
					hasMethod(javaBridge.repo, 'get')
				);
			}); // it
			it('repo object has method list', () => {
				deepStrictEqual(
					true,
					hasMethod(javaBridge.repo, 'list')
				);
			}); // it
			describe('create', () => {
				const createdRepo = javaBridge.repo.create({
					id: 'myRepoId'
				});
				it('returns info about created repo', () => {
					deepStrictEqual(
						{
							id: 'myRepoId',
							branches: ['master'],
							settings: {}
						},
						createdRepo
					);
				}); // it
			}); // describe create
			describe('get', () => {
				it('returns info about a repo', () => {
					deepStrictEqual(
						{
							id: 'myRepoId',
							branches: ['master'],
							settings: {}
						},
						javaBridge.repo.get('myRepoId')
					);
				}); // it
			}); // describe get
			describe('list', () => {
				it('returns list with info about all repos', () => {
					javaBridge.repo.create({
						id: 'myRepoId2'
					});
					deepStrictEqual(
						[{
							id: 'myRepoId',
							branches: ['master'],
							settings: {}
						},{
							id: 'myRepoId2',
							branches: ['master'],
							settings: {}
						}],
						javaBridge.repo.list()
					);
				}); // it
			}); // describe list
		}); // describe repo
	}); // describe JavaBridge
}); // describe mock
