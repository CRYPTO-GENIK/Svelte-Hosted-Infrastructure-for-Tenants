export enum Role {
  MASTER = 'master',
  WHITE_LABEL = 'whitelabel',
  END_USER = 'user'
}

export const roleHierarchy = [Role.MASTER, Role.WHITE_LABEL, Role.END_USER];

export function hasRole(userRole: Role, required: Role): boolean {
  const userIndex = roleHierarchy.indexOf(userRole);
  const requiredIndex = roleHierarchy.indexOf(required);
  if (userIndex === -1 || requiredIndex === -1) return false;
  return userIndex <= requiredIndex;
}
