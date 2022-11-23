import type {
	GroupKey,
	RoleKey,
	UserKey,
} from '/lib/xp/auth';
import {AccessControlEntry} from '/lib/xp/node';

// This wouldn't break backwards compatibility, but "loosens" the type, loosing good suggestions.
// Perhaps the best solution would be to move the generics and constans below into @enonic-types/core
// export type {
// 	PrincipalKey,
// } from '@enonic-types/core';

export type {Permission} from '/lib/xp/node';

//──────────────────────────────────────────────────────────────────────────────
// Generics
//──────────────────────────────────────────────────────────────────────────────
export type RoleKeyGeneric<T extends string> = `role:${T}`

export type UserKeyGeneric<
	IdProvider extends string,
	Login extends string
> = `user:${IdProvider}:${Login}`;


//──────────────────────────────────────────────────────────────────────────────
// Constants
//──────────────────────────────────────────────────────────────────────────────
export type RoleKeySystemAdmin = RoleKeyGeneric<'system.admin'>
export type RoleKeySystemAdminLogin = RoleKeyGeneric<'system.admin.login'>
export type RoleKeySystemAuthenticated = RoleKeyGeneric<'system.authenticated'>
export type RoleKeySystemAuditlog = RoleKeyGeneric<'system.auditlog'>
export type RoleKeySystemEveryone = RoleKeyGeneric<'system.everyone'>
export type RoleKeySystemUserAdmin = RoleKeyGeneric<'system.user.admin'>
export type RoleKeySystemUserApp = RoleKeyGeneric<'system.user.app'>

export type UserKeySystemSu = UserKeyGeneric<'system','su'>

export type PrincipalKeySystem =
	| RoleKeySystemEveryone
	| RoleKeySystemAuthenticated
	| RoleKeySystemAdmin
	| RoleKeySystemAdminLogin
	| RoleKeySystemAuditlog
	| RoleKeySystemUserAdmin
	| RoleKeySystemUserApp
	| UserKeySystemSu

//──────────────────────────────────────────────────────────────────────────────
// Backwards compatibility
//──────────────────────────────────────────────────────────────────────────────
export type PrincipalKeyUser = UserKey;
export type PrincipalKeyGroup = GroupKey;
export type PrincipalKeyRole = RoleKey;

export type PrincipalKey =
	| PrincipalKeySystem
	| GroupKey & Record<never, never>
	| RoleKey & Record<never, never>
	| UserKey & Record<never, never>

export type PermissionsParams = AccessControlEntry
