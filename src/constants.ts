import type {
	PrincipalKeyRole,
	PrincipalKeyUser
} from './types/Auth.d';


export const COLON_SIGN = ':'; // Not good in repo names
export const DOT_SIGN = '.';
export const ELLIPSIS = '…';

export const RESPONSE_TYPE_JSON = 'text/json;charset=utf-8';
export const RESPONSE_TYPE_HTML = 'text/html;charset=utf-8';


export const PRINCIPAL_ROLE_SYSTEM_ADMIN :PrincipalKeyRole = 'role:system.admin';
export const PRINCIPAL_ROLE_SYSTEM_ADMIN_LOGIN :PrincipalKeyRole = 'role:system.admin.login';
export const PRINCIPAL_ROLE_SYSTEM_AUTHENTICATED :PrincipalKeyRole = 'role:system.authenticated';
export const PRINCIPAL_ROLE_SYSTEM_AUDITLOG :PrincipalKeyRole = 'role:system.auditlog';
export const PRINCIPAL_ROLE_SYSTEM_EVERYONE :PrincipalKeyRole = 'role:system.everyone';
export const PRINCIPAL_ROLE_SYSTEM_USER_ADMIN :PrincipalKeyRole = 'role:system.user.admin';
export const PRINCIPAL_ROLE_SYSTEM_USER_APP :PrincipalKeyRole = 'role:system.user.app';

export const PRINCIPAL_USER_SYSTEM_SU :PrincipalKeyUser = 'user:system:su';
