# Enonic XP SDK

```javascript
import {addQueryFilter} from '@enonic/sdk';

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
