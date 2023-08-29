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

## Examples

### DSL

```typescript
import {storage} from '@enonic/js-utils';

const and = storage.query.dsl.and;
const bool = storage.query.dsl.bool;
const fulltext = storage.query.dsl.fulltext;
const ngram = storage.query.dsl.ngram;
const stemmed = storage.query.dsl.stemmed;

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
			{
				"boolean": {
					"should": [
						{
							"fulltext": {
								"fields": [
									"url"
								],
								"query": "fun video",
								"operator": "OR",
								"boost": 1.2
							}
						},
						{
							"fulltext": {
								"fields": [
									"title"
								],
								"query": "fun video",
								"operator": "OR",
								"boost": 1.1
							}
						},
						{
							"fulltext": {
								"fields": [
									"text"
								],
								"query": "fun video",
								"operator": "OR"
							}
						}
					]
				}
			},
			{
				"boolean": {
					"should": [
						{
							"stemmed": {
								"fields": [
									"url"
								],
								"query": "fun video",
								"operator": "OR",
								"language": "no",
								"boost": 1.08
							}
						},
						{
							"stemmed": {
								"fields": [
									"title"
								],
								"query": "fun video",
								"operator": "OR",
								"language": "no",
								"boost": 0.9900000000000001
							}
						},
						{
							"stemmed": {
								"fields": [
									"text"
								],
								"query": "fun video",
								"operator": "OR",
								"language": "no",
								"boost": 0.9
							}
						}
					]
				}
			},
			{
				"boolean": {
					"should": [
						{
							"stemmed": {
								"fields": [
									"url"
								],
								"query": "fun video",
								"operator": "OR",
								"language": "en",
								"boost": 0.96
							}
						},
						{
							"stemmed": {
								"fields": [
									"title"
								],
								"query": "fun video",
								"operator": "OR",
								"language": "en",
								"boost": 0.8800000000000001
							}
						},
						{
							"stemmed": {
								"fields": [
									"text"
								],
								"query": "fun video",
								"operator": "OR",
								"language": "en",
								"boost": 0.8
							}
						}
					]
				}
			},
			{
				"boolean": {
					"should": [
						{
							"ngram": {
								"fields": [
									"url"
								],
								"query": "fun video",
								"operator": "OR",
								"boost": 0.84
							}
						},
						{
							"ngram": {
								"fields": [
									"title"
								],
								"query": "fun video",
								"operator": "OR",
								"boost": 0.77
							}
						},
						{
							"ngram": {
								"fields": [
									"text"
								],
								"query": "fun video",
								"operator": "OR",
								"boost": 0.7
							}
						}
					]
				}
			}
		]
	}
};
*/
```

### Filter

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


## Release

````
git tag vX.Y.Z
git push origin vX.Y.Z
````

This will trigger release & publish on NPM.

