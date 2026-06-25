# JavaScript Utilities

A library of constants and functions that should work in any
* typescript
* ecmascript
* javascript

The intention is that the library should not depend upon any node-module that doesn't work in at least these environments:
* Enonic XP serverside code (Nashorn/GraalJS)
* Modern browser
* Newest LTS version of Node

It should work in at least these frameworks:
* React

## Changelog

### 1.11

* Deprecate `forceArray()` which has several known issues!
* Provide `noNilsArray()` which is an improved typesafe alternative to forceArray.
* Provide `filterNils()` which is used by noNilsArray to remove nil values from an array.
* Provide `isNotNil()` typeguard.
* Implement [#682](https://github.com/enonic/npm-js-utils/issues/682) Provide functions (fulltext, ngram, stemmed) where boost is handeled correctly.
* Bugfix: STEMMING_LANGUAGE_CODE_BRAZILIAN changed from pt-br to `pt-BR`.

#### New functions:

| Path                      | Description |
| ------------------------- | --- |
| array/filterNils          | Removes null and undefined values from an array. |
| array/noNilsArray         | Turns any value into an array of non-nullish items. |
| storage/querying/fulltext | Search for words in a field. |
| storage/querying/ngram    | Search for words that begin with letters in a field. |
| storage/querying/stemmed  | Search for stemmed words in a field. |
| value/isNotNil            | Check if a value is not `null` or `undefined`. |

## Examples

### DSL

```typescript
import { and } from '@enonic/js-utils/storage/query/dsl/and';
import { bool } from '@enonic/js-utils/storage/query/dsl/bool';
import { fulltext } from '@enonic/js-utils/storage/querying/fulltext';
import { ngram } from '@enonic/js-utils/storage/querying/ngram';
import { stemmed } from '@enonic/js-utils/storage/querying/stemmed';

const fields = 'url^1.2,title^1.1,text';
const searchString = 'fun video';
const operator = 'OR';
const query = bool(and(
	fulltext(fields, searchString, operator),
	stemmed(fields, searchString, operator, 'no', 0.9),
	stemmed(fields, searchString, operator, 'en', 0.8),
	ngram(fields, searchString, operator, 0.7)
));
console.debug(JSON.stringify(query, null, 4));

/*
{
	"boolean": {
		"must": [
			// fulltext
			// stemmed_no
			// stemmed_en
			// ngram
		]
	}
};
*/
```

### Filter

```javascript
import { addQueryFilter } from '@enonic/js-utils/storage/query/addQueryFilter';

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

## Release

*  Remember to update changelog above.

````
git tag vX.Y.Z
git push origin vX.Y.Z
````

This will trigger release & publish on NPM.

