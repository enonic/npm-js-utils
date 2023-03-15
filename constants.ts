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


export const EVENT_TYPE_PREFIX_CUSTOM = 'custom';

export const EVENT_TYPE_APPLICATION = 'application';

export const EVENT_TYPE_APPLICATION_CLUSTER = 'application.cluster';
export const EVENT_TYPE_APPLICATION_CLUSTER_EVENT_TYPE_START = 'start';
export const EVENT_TYPE_APPLICATION_CLUSTER_EVENT_TYPE_STATE = 'state';
export const EVENT_TYPE_APPLICATION_CLUSTER_EVENT_TYPE_STOP = 'stop';
export const EVENT_TYPE_APPLICATION_CLUSTER_EVENT_TYPE_UNINSTALL = 'uninstall';
export const EVENT_TYPE_APPLICATION_CLUSTER_EVENT_TYPE_UNINSTALLED = 'uninstalled';
export const EVENT_TYPE_APPLICATION_CLUSTER_EVENT_TYPES = [
	EVENT_TYPE_APPLICATION_CLUSTER_EVENT_TYPE_START,
	EVENT_TYPE_APPLICATION_CLUSTER_EVENT_TYPE_STATE,
	EVENT_TYPE_APPLICATION_CLUSTER_EVENT_TYPE_STOP,
	EVENT_TYPE_APPLICATION_CLUSTER_EVENT_TYPE_UNINSTALL,
	EVENT_TYPE_APPLICATION_CLUSTER_EVENT_TYPE_UNINSTALLED,
] as const;

export const EVENT_TYPE_APPLICATION_EVENT_TYPE_INSTALLED = 'INSTALLED';
export const EVENT_TYPE_APPLICATION_EVENT_TYPE_STARTED = 'STARTED';
export const EVENT_TYPE_APPLICATION_EVENT_TYPE_STOPPED = 'STOPPED';
export const EVENT_TYPE_APPLICATION_EVENT_TYPE_UNINSTALLED = 'UNINSTALLED';
export const EVENT_TYPE_APPLICATION_EVENT_TYPES = [
	EVENT_TYPE_APPLICATION_EVENT_TYPE_INSTALLED,
	EVENT_TYPE_APPLICATION_EVENT_TYPE_STARTED,
	EVENT_TYPE_APPLICATION_EVENT_TYPE_STOPPED,
	EVENT_TYPE_APPLICATION_EVENT_TYPE_UNINSTALLED,
] as const;

export const EVENT_TYPE_NODE_CREATED = 'node.created';
export const EVENT_TYPE_NODE_DELETED = 'node.deleted';
export const EVENT_TYPE_NODE_UPDATED = 'node.updated';
export const EVENT_TYPES_NODE = [
	EVENT_TYPE_NODE_CREATED,
	EVENT_TYPE_NODE_DELETED,
	EVENT_TYPE_NODE_UPDATED
] as const;

export const EVENT_TYPE_TASK_FINISHED = 'task.finished';
export const EVENT_TYPE_TASK_REMOVED = 'task.removed';
export const EVENT_TYPE_TASK_UPDATED = 'task.updated';

export const EVENT_TYPES_TASK = [
	EVENT_TYPE_TASK_FINISHED,
	EVENT_TYPE_TASK_REMOVED,
	EVENT_TYPE_TASK_UPDATED,
] as const;

export const EVENT_TYPES = [
	EVENT_TYPE_APPLICATION,
	EVENT_TYPE_APPLICATION_CLUSTER,
	EVENT_TYPE_NODE_CREATED,
	EVENT_TYPE_NODE_DELETED,
	EVENT_TYPE_NODE_UPDATED,
	EVENT_TYPE_TASK_FINISHED,
	EVENT_TYPE_TASK_REMOVED,
	EVENT_TYPE_TASK_UPDATED,
] as const;


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
