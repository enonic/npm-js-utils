import type {NodeConfigEntry} from '/lib/xp/node';
import type {IndexConfigTemplates} from '../../types/index.d';


import {findIndex} from '../../array/findIndex';


interface IndexConfigsItem {
	path: string;
	config: NodeConfigEntry | IndexConfigTemplates;
}

declare type IndexConfigs = Array<IndexConfigsItem>

interface updateIndexConfigsParams {
	configs: IndexConfigs,
	updates?: IndexConfigs
}


export function updateIndexConfigs({
	configs,
	updates = []
}: updateIndexConfigsParams): IndexConfigs {
	const dereffedConfigs: IndexConfigsItem[] = JSON.parse(JSON.stringify(configs));
	for (let i = 0; i < updates.length; i++) {

		// TODO We haven't actually verified that updates[i] is an IndexConfigsItem!
		const anUpdate: IndexConfigsItem = updates[i] as IndexConfigsItem;

		const j = findIndex(
			dereffedConfigs,
			//({path}: IndexConfigsItem) => path === anUpdate.path
			(item: unknown) => (item as IndexConfigsItem).path === anUpdate.path
		);
		if (j !== -1) {
			dereffedConfigs.splice(j, 1, anUpdate);
		} else {
			dereffedConfigs.push(anUpdate);
		}
	} // for
	dereffedConfigs.sort(
		(a: IndexConfigsItem, b: IndexConfigsItem) =>
			(a.path > b.path) ? 1 : -1
	); // Slow?
	return dereffedConfigs;
} // updateIndexConfigs
