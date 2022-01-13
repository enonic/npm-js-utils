import {
	deepStrictEqual//,
	//throws // For some reason this gets borked by swc
} from 'assert';
import * as assert from 'assert';
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
		javaBridge.repo.create({
			id: 'myRepoId'
		});
		it('instance has property connect', () => {
			deepStrictEqual(
				true,
				hasMethod(javaBridge, 'connect')
			);
		}); // it
		describe('connect', () => {
			it('throws TypeError when no params', () => {
				assert.throws(() => {
					//@ts-ignore
					javaBridge.connect();
				}, {
					name: 'TypeError',
					message: /^Cannot (destructure|read) propert.* 'repoId'/
				});
			}); // it
			it('throws Error when param.repoId is missing', () => {
				assert.throws(() => {
					//@ts-ignore
					javaBridge.connect({
						branch: 'master'
					});
				}, {
					name: 'Error',
					message: /No repo with id/
				});
			}); // it
			it('throws Error when param.branch is missing', () => {
				assert.throws(() => {
					//@ts-ignore
					javaBridge.connect({
						repoId: 'myRepoId'
					});
				}, {
					name: 'Error',
					message: /No branch with branchId/
				});
			}); // it
			const connection = javaBridge.connect({
				branch: 'master',
				repoId: 'myRepoId'
			});
			it('returns an object which has a create method', () => {
				deepStrictEqual(
					true,
					hasMethod(connection, 'create')
				);
			}); // it
			it('returns an object which has a get method', () => {
				deepStrictEqual(
					true,
					hasMethod(connection, 'get')
				);
			}); // it
			it('returns an object which has a modify method', () => {
				deepStrictEqual(
					true,
					hasMethod(connection, 'modify')
				);
			}); // it
			describe('Connection', () => {
				describe('create', () => {
					it('returns the created node', () => {
						deepStrictEqual(
							{
								_id: 'myId',
								_indexConfig: {
									default: {
										decideByType: false,
										enabled: true,
										nGram: false,
										fulltext: false,
										includeInAllText: false,
										path: false,
										indexValueProcessors: [],
										languages: []
						    		},
									configs: []
								},
								_name: 'myId'
							},
							connection.create({
								_id: 'myId'
							})
						);
					}); // it
					it("doesn't enonify _indexConfig", () => {
						deepStrictEqual(
							{
								_id: 'myId3',
								_indexConfig: {
									configs: [{
										path: 'myString',
										config: {
											decideByType: false,
											enabled: true,
											fulltext: true,
											includeInAllText: true,
											languages: ['en'],
											nGram: true,
											path: false
										}
									}]
								},
								_name: 'myId3'
							},
							connection.create({
								_id: 'myId3',
								_indexConfig: {
									configs: [{
										path: 'myString',
										config: {
											decideByType: false,
											enabled: true,
											fulltext: true,
											includeInAllText: true,
											languages: ['en'],
											nGram: true,
											path: false
										}
									}]
								}
							})
						);
					}); // it
				}); // describe create
				describe('get', () => {
					it('returns a single node', () => {
						deepStrictEqual(
							{
								_id: 'myId',
								_indexConfig: {
									default: {
										decideByType: false,
										enabled: true,
										nGram: false,
										fulltext: false,
										includeInAllText: false,
										path: false,
										indexValueProcessors: [],
										languages: []
						    		},
									configs: []
								},
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
								_indexConfig: {
									default: {
										decideByType: false,
										enabled: true,
										nGram: false,
										fulltext: false,
										includeInAllText: false,
										path: false,
										indexValueProcessors: [],
										languages: []
						    		},
									configs: []
								},
								_name: 'myId'
							},{
								_id: 'myId2',
								_indexConfig: {
									default: {
										decideByType: false,
										enabled: true,
										nGram: false,
										fulltext: false,
										includeInAllText: false,
										path: false,
										indexValueProcessors: [],
										languages: []
						    		},
									configs: []
								},
								_name: 'myId2'
							}],
							connection.get('myId','myId2')
						);
						deepStrictEqual(
							[{
								_id: 'myId',
								_indexConfig: {
									default: {
										decideByType: false,
										enabled: true,
										nGram: false,
										fulltext: false,
										includeInAllText: false,
										path: false,
										indexValueProcessors: [],
										languages: []
						    		},
									configs: []
								},
								_name: 'myId'
							},{
								_id: 'myId2',
								_indexConfig: {
									default: {
										decideByType: false,
										enabled: true,
										nGram: false,
										fulltext: false,
										includeInAllText: false,
										path: false,
										indexValueProcessors: [],
										languages: []
						    		},
									configs: []
								},
								_name: 'myId2'
							}],
							//@ts-ignore
							connection.get(['myId','myId2'])
						);
					}); // it
				}); // describe get
				describe('modify', () => {
					it('returns the modified node', () => {
						deepStrictEqual(
							{
								_id: 'myId',
								_indexConfig: {
									default: {
										decideByType: false,
										enabled: true,
										nGram: false,
										fulltext: false,
										includeInAllText: false,
										path: false,
										indexValueProcessors: [],
										languages: []
						    		},
									configs: []
								},
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
	}); // describe JavaBridge
}); // describe mock
