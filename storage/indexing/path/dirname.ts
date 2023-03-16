import {join} from './join';


export function dirname(
	path :string,
	separator :string = '/'
) :string {
	return join([path, '..'], separator);
}
