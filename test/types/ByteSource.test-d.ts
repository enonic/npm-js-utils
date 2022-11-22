import type {
	ByteSource,
	ApplicationDescriptor,
	Icon,
} from '/lib/xp/app';
import type {
	AddAttachmentParam,
} from '/lib/xp/content';

import {
	expectAssignable,
	expectError,
	expectNotAssignable,
	expectType,
	// printType,
} from 'tsd';
import {getDescriptor} from '/lib/xp/app';
import {
	addAttachment,
	getAttachmentStream
} from '/lib/xp/content';


const appDescriptor = getDescriptor({
	key: 'whatever'
});
// printType(appDescriptor);
expectType<ApplicationDescriptor>(appDescriptor);

// printType(appDescriptor.icon);
expectType<Icon|undefined>(appDescriptor.icon);

if (appDescriptor.icon) {
	// printType(appDescriptor.icon);
	expectType<Icon>(appDescriptor.icon);
	expectType<ByteSource>(appDescriptor.icon.data);
}

const attachmentStream = getAttachmentStream({
	key: 'whatever',
	name: 'whatever'
});
// printType(attachmentStream);
expectType<ByteSource|null>(attachmentStream);

if (attachmentStream) {
	// printType(attachmentStream);
	expectType<ByteSource>(attachmentStream);
	const addAttachmentParams = {
		data: attachmentStream,
		key: 'whatever',
		name: 'whatever',
		mimeType: 'whatever'
	}
	expectAssignable<AddAttachmentParam>(addAttachmentParams);
	addAttachment(addAttachmentParams);
	// expectError(addAttachment(addAttachmentParams)); // Expected an error, but found none.

	const illegalAddAttachmentParams = {
		data: {},
		key: 'whatever',
		name: 'whatever',
		mimeType: 'whatever'
	}
	expectNotAssignable<AddAttachmentParam>(illegalAddAttachmentParams);
	expectError(addAttachment(illegalAddAttachmentParams));
} // if (attachmentStream)
