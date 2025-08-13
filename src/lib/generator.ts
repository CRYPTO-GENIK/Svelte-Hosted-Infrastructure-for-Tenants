import type { Role } from './roles';

export interface Field {
  name: string;
  type: string;
  required?: boolean;
}

export interface CollectionDefinition {
  name: string;
  schema: Field[];
  listRule: string;
  viewRule: string;
  createRule: string;
  updateRule: string;
  deleteRule: string;
}

export function buildCollection(name: string, fields: Field[]): CollectionDefinition {
  const baseRule = 'role = "master"';
  return {
    name,
    schema: fields,
    listRule: baseRule,
    viewRule: '',
    createRule: baseRule,
    updateRule: baseRule,
    deleteRule: baseRule
  };
}
