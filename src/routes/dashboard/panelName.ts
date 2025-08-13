import { Role } from '$lib/roles';

export function panelName(role: Role): string {
  if (role === Role.MASTER) return 'MasterPanel';
  if (role === Role.WHITE_LABEL) return 'WhiteLabelPanel';
  return 'EndUserPanel';
}
