import { describe, it, expect } from 'vitest';
import { buildCollection } from '../src/lib/generator';

describe('buildCollection', () => {
  it('creates a collection with default rules', () => {
    const collection = buildCollection('test', [
      { name: 'title', type: 'text', required: true }
    ]);
    expect(collection.name).toBe('test');
    expect(collection.listRule).toContain('master');
    expect(collection.schema.length).toBe(1);
  });
});
