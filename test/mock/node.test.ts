import {isString} from '../../src';
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
				const createRes = connection.create({});
				describe('create', () => {
					//javaBridge.log.debug('generated id:%s', createRes._id);
					it('generates an _id', () => {
						deepStrictEqual(
							true,
							isString(createRes._id)
						);
					}); // it
					it('generates an _versionKey', () => {
						deepStrictEqual(
							true,
							isString(createRes._versionKey)
						);
					}); // it
					it('sets _name to _id (when _name is not passed in)', () => {
						deepStrictEqual(
							createRes._id,
							createRes._name
						);
					}); // it
					it('provides a default _indexConfig (when not passed in)', () => {
						deepStrictEqual(
							{
								default: {
									decideByType: true,
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
							createRes._indexConfig
						);
					}); // it
					it("sets _nodeType to 'default' (when not passed in)", () => {
						deepStrictEqual(
							'default',
							createRes._nodeType
						);
					}); // it
					it("sets _state to 'DEFAULT' (regardless of passed in)", () => {
						deepStrictEqual(
							'DEFAULT',
							createRes._state
						);
					}); // it
					it('sets _ts (regardless of passed in)', () => {
						//javaBridge.log.debug('_ts:%s', createRes._ts);
						deepStrictEqual(
							true,
							isString(createRes._ts)
						);
						deepStrictEqual(
							node._ts,
							createRes._ts
						);
					}); // it
					const node = connection.get(createRes._id);
					//javaBridge.log.debug('node:%s', node);
					it('returns the created node', () => {
						deepStrictEqual(
							node,
							createRes
						);
					}); // it*/
					it("doesn't enonify _indexConfig", () => {
						const createRes2 = connection.create({
							_indexConfig: {
								configs: [{
									path: 'myString',
									config: {
										decideByType: true,
										enabled: true,
										fulltext: true,
										includeInAllText: true,
										languages: ['en'],
										nGram: true,
										path: false
									}
								}]
							}
						});
						deepStrictEqual(
							{
								...createRes2,
								_indexConfig: {
									configs: [{
										path: 'myString',
										config: {
											decideByType: true,
											enabled: true,
											fulltext: true,
											includeInAllText: true,
											languages: ['en'],
											nGram: true,
											path: false
										}
									}]
								}
							},
							createRes2
						);
					}); // it
				}); // describe create
				describe('get', () => {
					it('returns a single node', () => {
						deepStrictEqual(
							createRes,
							connection.get(createRes._id)
						);
					}); // it
					it('returns a multiple nodes', () => {
						const createRes2 = connection.create({});
						//javaBridge.log.debug('createRes2:%s', createRes2);
						deepStrictEqual(
							[createRes,createRes2],
							connection.get(createRes._id,createRes2._id)
						);
						deepStrictEqual(
							[createRes,createRes2],
							//@ts-ignore
							connection.get([createRes._id,createRes2._id])
						);
					}); // it*/
				}); // describe get
				describe('modify', () => {
					it('returns the modified node', () => {
						deepStrictEqual(
							{
								...createRes,
								_name: 'myModifiedName'
							},
							connection.modify({
								key: createRes._id,
								editor: (node) => {
									node._name = 'myModifiedName';
									return node;
								}
							})
						);
					}); // it
				}); // describe modify
				describe('query', () => {
					const queryRes = connection.query();
					//javaBridge.log.debug('queryRes:%s', queryRes);
					it('returns all nodes', () => {
						deepStrictEqual(
							{
								count: 2,
								hits: [{
									id: '00000000-0000-0000-0000-000000000000',
									score: 1
								},{
									id: createRes._id,
									score: 1
								}],
								total: 2
							},
							queryRes
						);
					}); // it
				}); // describe query
			}); // describe Connection
		}); // describe connect
	}); // describe JavaBridge
}); // describe mock
