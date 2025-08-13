import { pb } from './pocketbase';

export const CORE_ROLES = {
  MASTER: 'master',
  WHITE_LABEL: 'whitelabel',
  END_USER: 'user'
} as const;

export type Role = typeof CORE_ROLES[keyof typeof CORE_ROLES] | string;

export const roleHierarchy: Role[] = [
  CORE_ROLES.MASTER,
  CORE_ROLES.WHITE_LABEL,
  CORE_ROLES.END_USER
];

let customRoles: string[] = [];

export function extendRoles(roles: string[]): void {
  customRoles = roles;
}

export async function loadCustomRoles(ownerId: string): Promise<string[]> {
  const records = await pb
    .collection('roles')
    .getFullList({ filter: `owner="${ownerId}"` });
  const names = records.map((r: any) => r.name);
  extendRoles(names);
  return names;
}

function normalize(role: Role): Role {
  return customRoles.includes(role) ? CORE_ROLES.END_USER : role;
}

export function hasRole(userRole: Role, required: Role): boolean {
  const userIndex = roleHierarchy.indexOf(normalize(userRole));
  const requiredIndex = roleHierarchy.indexOf(normalize(required));
  return userIndex !== -1 && requiredIndex !== -1 && userIndex <= requiredIndex;
}
