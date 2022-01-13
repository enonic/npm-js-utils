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
			},
			log: {
				debug: (...params) => { console.debug(...params) },
				error: (...params) => { console.error(...params) },
				info: (...params) => { console.info(...params) },
				warning: (...params) => { console.warn(...params) }
			}
		});
		it('instance has app object', () => {
			deepStrictEqual(
				{
					config: {},
					name: 'com.enonic.app.test',
					version: '0.0.1-SNAPSHOT'
				},
				javaBridge.app
			);
		}); // it
		describe('log', () => {
			describe('debug', () => {
				it('log object has debug method', () => {
					deepStrictEqual(
						true,
						hasMethod(javaBridge.log, 'debug')
					);
				}); // it
				javaBridge.log.debug('string:%s', 'string');
			}); // describe debug
			describe('error', () => {
				it('log object has error method', () => {
					deepStrictEqual(
						true,
						hasMethod(javaBridge.log, 'error')
					);
				}); // it
				javaBridge.log.error('string:%s', 'string');
			}); // describe error
			describe('info', () => {
				it('log object has info method', () => {
					deepStrictEqual(
						true,
						hasMethod(javaBridge.log, 'info')
					);
				}); // it
				javaBridge.log.info('string:%s', 'string');
			}); // describe info
			describe('warning', () => {
				it('log object has warning method', () => {
					deepStrictEqual(
						true,
						hasMethod(javaBridge.log, 'warning')
					);
				}); // it
				javaBridge.log.warning('string:%s', 'string');
			}); // describe warning
		}); // describe log

		const createdRepo = javaBridge.repo.create({
			id: 'myRepoId'
		});
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
