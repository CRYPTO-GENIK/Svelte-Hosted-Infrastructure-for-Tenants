import { describe, it, expect, vi } from 'vitest';
import { login } from '../src/routes/login/login';
import { load } from '../src/routes/dashboard/+page.server';
import { pb } from '../src/lib/pocketbase';
import { panelName } from '../src/routes/dashboard/panelName';
import { Role } from '../src/lib/roles';

vi.mock('$app/navigation', () => ({ goto: vi.fn() }));

describe('authentication flow', () => {
  it('redirects to dashboard on successful login', async () => {
    const { goto } = await import('$app/navigation');
    const authMock = vi.fn().mockResolvedValue({});
    vi.spyOn(pb, 'collection').mockReturnValue({ authWithPassword: authMock } as any);

    await login('a@b.com', 'secret');

    expect(authMock).toHaveBeenCalledWith('a@b.com', 'secret');
    expect(goto).toHaveBeenCalledWith('/dashboard');
  });

  it('redirects unauthenticated users from dashboard', async () => {
    pb.authStore.clear();
    await expect(load()).rejects.toMatchObject({ location: '/login' });
  });
});

describe('dashboard panels', () => {
  it('maps roles to correct panel names', () => {
    expect(panelName(Role.MASTER)).toBe('MasterPanel');
    expect(panelName(Role.WHITE_LABEL)).toBe('WhiteLabelPanel');
    expect(panelName(Role.END_USER)).toBe('EndUserPanel');
  });
});
