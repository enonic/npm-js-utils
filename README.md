# JavaScript Utilities

A library of constants and functions that should work in any
* typescript
* ecmascript
* javascript

The intention is that the library should not depend upon any node-module that doesn't work in at least these environments:
* Enonic XP serverside code
* Modern browser
* Newest LTS version of Node

It should work in at least these frameworks:
* React

## Example

```javascript
import {addQueryFilter} from '@enonic/js-utils';

const filters = addQueryFilter({
	filter: {
		exists: {
			field: 'required'
		}
	}
});
/*{
	boolean: {
		must: {
			exists: {
				field: 'required'
			}
		}
	}
}*/
```
