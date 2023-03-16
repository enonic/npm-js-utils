import type {
	AddAttachmentParam,
	CreateMediaParams,
} from '/lib/xp/content';

import {
	expectNotAssignable,
} from 'tsd';

const illegalAddAttachmentParams = {
	data: {},
	key: 'whatever',
	name: 'whatever',
	mimeType: 'whatever'
}
expectNotAssignable<AddAttachmentParam>(illegalAddAttachmentParams);

const illegalCreateMediaParams = {
	data: {},
	focalX: '0.5',
	focalY: '0.5',
	idGenerator: (v: string) => v,
	name: 'whatever',
	mimeType: 'whatever',
	parentPath: 'whatever'
}
expectNotAssignable<CreateMediaParams>(illegalCreateMediaParams);
