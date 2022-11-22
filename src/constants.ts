import type {
	RoleKeySystemAdmin,
	RoleKeySystemAdminLogin,
	RoleKeySystemAuditlog,
	RoleKeySystemAuthenticated,
	RoleKeySystemEveryone,
	RoleKeySystemUserAdmin,
	RoleKeySystemUserApp,
	UserKeySystemSu
} from './types/Auth.d';
// import type {Roles} from '/lib/xp/auth';

export const COLON_SIGN = ':'; // Not good in repo names
export const DOT_SIGN = '.';
export const ELLIPSIS = '…';

export const RESPONSE_TYPE_JSON = 'text/json;charset=utf-8';
export const RESPONSE_TYPE_HTML = 'text/html;charset=utf-8';


export const PRINCIPAL_ROLE_SYSTEM_ADMIN :RoleKeySystemAdmin = 'role:system.admin';
export const PRINCIPAL_ROLE_SYSTEM_ADMIN_LOGIN :RoleKeySystemAdminLogin = 'role:system.admin.login';
export const PRINCIPAL_ROLE_SYSTEM_AUTHENTICATED :RoleKeySystemAuthenticated = 'role:system.authenticated';
export const PRINCIPAL_ROLE_SYSTEM_AUDITLOG :RoleKeySystemAuditlog = 'role:system.auditlog';
export const PRINCIPAL_ROLE_SYSTEM_EVERYONE :RoleKeySystemEveryone = 'role:system.everyone';
export const PRINCIPAL_ROLE_SYSTEM_USER_ADMIN :RoleKeySystemUserAdmin = 'role:system.user.admin';
export const PRINCIPAL_ROLE_SYSTEM_USER_APP :RoleKeySystemUserApp = 'role:system.user.app';

export const PRINCIPAL_USER_SYSTEM_SU :UserKeySystemSu = 'user:system:su';
