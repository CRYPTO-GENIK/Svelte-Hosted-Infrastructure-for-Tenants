import { describe, it, expect } from 'vitest';
import { hasRole, Role } from '../src/lib/roles';

describe('hasRole', () => {
  it('allows masters access to all roles', () => {
    expect(hasRole(Role.MASTER, Role.END_USER)).toBe(true);
    expect(hasRole(Role.MASTER, Role.WHITE_LABEL)).toBe(true);
  });

  it('restricts end users from higher roles', () => {
    expect(hasRole(Role.END_USER, Role.MASTER)).toBe(false);
    expect(hasRole(Role.END_USER, Role.WHITE_LABEL)).toBe(false);
  });

  it('rejects unknown roles', () => {
    expect(hasRole('invalid' as Role, Role.END_USER)).toBe(false);
  });
});
