import { describe, it, expect, beforeEach } from 'vitest';
import { hasRole, CORE_ROLES, extendRoles } from '../src/lib/roles';

describe('hasRole', () => {
  beforeEach(() => extendRoles([]));

  it('allows masters access to all roles', () => {
    expect(hasRole(CORE_ROLES.MASTER, CORE_ROLES.END_USER)).toBe(true);
    expect(hasRole(CORE_ROLES.MASTER, CORE_ROLES.WHITE_LABEL)).toBe(true);
  });

  it('restricts end users from higher roles', () => {
    expect(hasRole(CORE_ROLES.END_USER, CORE_ROLES.MASTER)).toBe(false);
    expect(hasRole(CORE_ROLES.END_USER, CORE_ROLES.WHITE_LABEL)).toBe(false);
  });

  it('treats custom roles as end user level', () => {
    extendRoles(['gold']);
    expect(hasRole('gold', CORE_ROLES.END_USER)).toBe(true);
    expect(hasRole('gold', CORE_ROLES.WHITE_LABEL)).toBe(false);
    expect(hasRole(CORE_ROLES.WHITE_LABEL, 'gold')).toBe(true);
  });
});
