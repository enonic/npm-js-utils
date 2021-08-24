import {
	IndexConfigEntry,
	IndexConfigTemplates
} from 'enonic-types/node';

import {findIndex} from '../../array/findIndex';


interface IndexConfigsItem {
	readonly path: string;
	readonly config: IndexConfigEntry | IndexConfigTemplates;
}

declare type IndexConfigs = ReadonlyArray<IndexConfigsItem>

interface updateIndexConfigsParams {
	readonly configs :IndexConfigs,
	readonly updates :IndexConfigs
}


export function updateIndexConfigs({
	configs,
	updates
} :updateIndexConfigsParams) :IndexConfigs {
	const dereffedConfigs = JSON.parse(JSON.stringify(configs));
	for (let i = 0; i < updates.length; i++) {
		const j = findIndex(
			dereffedConfigs,
			({path:p}) => p === updates[i].path
		);
		if (j !== -1) {
			dereffedConfigs.splice(j, 1, updates[i]);
		} else {
			dereffedConfigs.push(updates[i]);
		}
	} // for
	dereffedConfigs.sort(
		(a :IndexConfigsItem, b :IndexConfigsItem) =>
		(a.path > b.path) ? 1 : -1
	); // Slow?
	return dereffedConfigs;
} // updateIndexConfigs
