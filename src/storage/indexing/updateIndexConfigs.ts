import type {
	IndexConfigEntry,
	IndexConfigTemplates
//} from 'enonic-types/node';
} from '/lib/xp/node'; // TypeScript module inside enonic-types/node

import {findIndex} from '../../array/findIndex';


interface IndexConfigsItem {
	readonly path: string;
	readonly config: IndexConfigEntry | IndexConfigTemplates;
}

declare type IndexConfigs = ReadonlyArray<IndexConfigsItem>

interface updateIndexConfigsParams {
	readonly configs :IndexConfigs,
	readonly updates? :IndexConfigs
}


export function updateIndexConfigs({
	configs,
	updates = []
} :updateIndexConfigsParams) :IndexConfigs {
	const dereffedConfigs :IndexConfigsItem[] = JSON.parse(JSON.stringify(configs));
	for (let i = 0; i < updates.length; i++) {

		// TODO We haven't actually verified that updates[i] is an IndexConfigsItem!
		const anUpdate :IndexConfigsItem = updates[i] as IndexConfigsItem;

		const j = findIndex(
			dereffedConfigs,
			({path} :IndexConfigsItem) => path === anUpdate.path
		);
		if (j !== -1) {
			dereffedConfigs.splice(j, 1, anUpdate);
		} else {
			dereffedConfigs.push(anUpdate);
		}
	} // for
	dereffedConfigs.sort(
		(a :IndexConfigsItem, b :IndexConfigsItem) =>
			(a.path > b.path) ? 1 : -1
	); // Slow?
	return dereffedConfigs;
} // updateIndexConfigs
