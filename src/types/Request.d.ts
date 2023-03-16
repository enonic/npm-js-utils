import {StringObject} from './Utility.d';


export namespace Enonic {
	export namespace Xp {
		export namespace Http {

			export type DefaultHeaders = {
				Accept ?:string
				'Accept-Charset' ?:string
				'Accept-Encoding' ?:string
				Authorization ?:string

				// Could be made stricter
				// Cookie: value1; value2; name1=value1
				// SubCoookies: name=a=b&c=d&e=f&g=h
				Cookies ?:string

				'If-None-Match' ?:string
				Language ?:string
				'User-Agent' ?:string
			}

			export type Method = 'GET'|'POST'|'HEAD'|'PUT'|'DELETE'|'PATCH'

			export type Mode = 'edit'|'inline'|'live'|'preview'

			export type Request<
				Body = string,
				Cookies extends StringObject = StringObject,
				Headers extends StringObject = DefaultHeaders,
				Params extends StringObject = StringObject,
				PathParams extends StringObject = StringObject
			> = {
				body ?:Body
				branch ?:string
				contextPath ?:string
				cookies ?:Cookies
				headers ?:Headers
				host ?:string
				method ?:Method
				mode ?:Mode
				params ?:Params
				path ?:string
				pathParams ?:PathParams
				port ?:string|number
				rawPath ?:string
				remoteAddress ?:string
				scheme ?:string
				url ?:string
			} // Request

		} // Http
	} // Xp
} // Enonic
