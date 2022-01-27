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
				it('returns an object which has a delete method', () => {
					deepStrictEqual(
						true,
						hasMethod(connection, 'delete')
					);
				}); // it
				//javaBridge.log.info('createRes:%s', createRes);
				describe('delete()', () => {
					it('works for a single existing node', () => {
						const createRes = connection.create({});
						deepStrictEqual(
							[createRes._id],
							connection.delete(createRes._id)
						); // deepStrictEqual
					}); // it
					it('return an emptry array for a single non existant key', () => {
						deepStrictEqual(
							[],
							connection.delete('')
						); // deepStrictEqual
					}); // it
					it('works for a list of existing and non-existant keys', () => {
						const createRes = connection.create({});
						deepStrictEqual(
							[createRes._id],
							connection.delete(['', createRes._id, 'whatever'])
						); // deepStrictEqual
					}); // it
				}); // describe delete()
			}); // describe Connection
		}); // describe connect()
	}); // describe JavaBridge
}); // describe mock
