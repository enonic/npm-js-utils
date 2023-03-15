// import type {
// 	ByteSource,
// 	// ApplicationDescriptor,
// 	// Icon,
//} from '/lib/xp/app';
import type {
	AddAttachmentParam,
	CreateMediaParams,
} from '/lib/xp/content';

import {
	// expectAssignable,
	// expectError,
	expectNotAssignable,
	// expectType,
	// printType,
} from 'tsd';
// We can't import or run java code...
// import {getDescriptor} from '/lib/xp/app';
// import {
// 	addAttachment,
// 	createMedia,
// 	getAttachmentStream
// } from '/lib/xp/content';


// const appDescriptor = getDescriptor({
// 	key: 'whatever'
// });
// printType(appDescriptor);
// expectType<ApplicationDescriptor>(appDescriptor);

// printType(appDescriptor.icon);
// expectType<Icon|undefined>(appDescriptor.icon);

// if (appDescriptor.icon) {
// 	// printType(appDescriptor.icon);
// 	expectType<Icon>(appDescriptor.icon);
// 	expectType<ByteSource>(appDescriptor.icon.data);
// }

// const attachmentStream = getAttachmentStream({
// 	key: 'whatever',
// 	name: 'whatever'
// });
// printType(attachmentStream);
// expectType<ByteSource|null>(attachmentStream);

// if (attachmentStream) {
// 	// printType(attachmentStream);
// 	expectType<ByteSource>(attachmentStream);
// 	const addAttachmentParams = {
// 		data: attachmentStream,
// 		key: 'whatever',
// 		name: 'whatever',
// 		mimeType: 'whatever'
// 	}
// 	expectAssignable<AddAttachmentParam>(addAttachmentParams);
// 	addAttachment(addAttachmentParams);
// 	// expectError(addAttachment(addAttachmentParams)); // Expected an error, but found none.

// 	const createMediaParams = {
// 		data: attachmentStream,
// 		focalX: '0.5', // CreateMediaParams and CreateMediaHandler has string, but jsdoc and updateMedia has number
// 		focalY: '0.5', // CreateMediaParams and CreateMediaHandler has string, but jsdoc and updateMedia has number
// 		idGenerator: (v: string) => v,
// 		name: 'whatever',
// 		mimeType: 'whatever',
// 		parentPath: 'whatever'
// 	};
// 	expectAssignable<CreateMediaParams>(addAttachmentParams);
// 	createMedia(createMediaParams);
// } // if (attachmentStream)

const illegalAddAttachmentParams = {
	data: {},
	key: 'whatever',
	name: 'whatever',
	mimeType: 'whatever'
}
expectNotAssignable<AddAttachmentParam>(illegalAddAttachmentParams);
// expectError(addAttachment(illegalAddAttachmentParams));

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
// expectError(createMedia(illegalCreateMediaParams));
