import {
	deepStrictEqual
} from 'assert';

import {JavaBridge} from '../../../src/mock/JavaBridge';


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
		describe('connect()', () => {
			describe('Connection', () => {
				const connection = javaBridge.connect({
					branch: 'master',
					repoId: 'myRepoId'
				});
				it('returns an object which has a getActiveVersion method', () => {
					deepStrictEqual(
						true,
						hasMethod(connection, 'getActiveVersion')
					);
				}); // it
				const createRes = connection.create({});
				javaBridge.log.info('createRes:%s', createRes);
				describe('getActiveVersion()', () => {
					it('works for a single existing node', () => {
						const createRes = connection.create({});
						deepStrictEqual(
							createRes._versionKey,
							connection.getActiveVersion({ key: createRes._id })
						); // deepStrictEqual
					}); // it
				}); // describe getActiveVersion()
			}); // describe Connection
		}); // describe connect()
	}); // describe JavaBridge
}); // describe mock
