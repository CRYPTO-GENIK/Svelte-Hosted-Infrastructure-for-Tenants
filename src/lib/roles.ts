export enum Role {
  MASTER = 'master',
  WHITE_LABEL = 'whitelabel',
  END_USER = 'user'
}

export const roleHierarchy = [Role.MASTER, Role.WHITE_LABEL, Role.END_USER];
