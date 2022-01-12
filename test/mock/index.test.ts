import {deepStrictEqual} from 'assert';
import {JavaBridge} from '../../src/mock/index';


function hasMethod(obj :unknown, name :string) {
	// TODO check if obj is Object?
	return typeof obj[name] === 'function';
}


describe('mock', () => {
	describe('JavaBridge', () => {
		const javaBridge = new JavaBridge();
		it('instance had method createRepo', () => {
			deepStrictEqual(
				true,
				hasMethod(javaBridge, 'createRepo')
			);
		}); // it
		describe('createRepo', () => {
			const createdRepo = javaBridge.createRepo({
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
			describe('connect', () => {
				const connection = javaBridge.connect({
					repoId: 'myRepoId',
					branch: 'master'
				});
				it('returns an object which has a create method', () => {
					deepStrictEqual(
						true,
						hasMethod(connection, 'create')
					);
				}); // it
				describe('Connection', () => {
					describe('create', () => {
						it('returns the created node', () => {
							deepStrictEqual(
								{
									_id: 'myId',
									_name: 'myId'
								},
								connection.create({
									_id: 'myId'
								})
							);
						}); // it
					}); // describe create
					describe('get', () => {
						it('returns a single node', () => {
							deepStrictEqual(
								{
									_id: 'myId',
									_name: 'myId'
								},
								connection.get('myId')
							);
						}); // it
						connection.create({
							_id: 'myId2'
						})
						it('returns a multiple nodes', () => {
							deepStrictEqual(
								[{
									_id: 'myId',
									_name: 'myId'
								},{
									_id: 'myId2',
									_name: 'myId2'
								}],
								connection.get('myId','myId2')
							);
							deepStrictEqual(
								[{
									_id: 'myId',
									_name: 'myId'
								},{
									_id: 'myId2',
									_name: 'myId2'
								}],
								connection.get(['myId','myId2'])
							);
						}); // it
					}); // describe get
					describe('modify', () => {
						it('returns the modified node', () => {
							deepStrictEqual(
								{
									_id: 'myId',
									_name: 'myModifiedName'
								},
								connection.modify({
									key: 'myId',
									editor: (node) => {
										node._name = 'myModifiedName';
										return node;
									}
								})
							);
						}); // it
					}); // describe modify
				}); // describe Connection
			}); // describe connect
		}); // describe createRepo
	}); // describe JavaBridge
}); // describe mock
