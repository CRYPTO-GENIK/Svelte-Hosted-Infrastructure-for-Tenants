import PocketBase from 'pocketbase';
import { readFileSync } from 'fs';
import { buildCollection, type Field } from '../src/lib/generator';

const pbUrl = process.env.PB_URL || 'http://127.0.0.1:8090';
const pb = new PocketBase(pbUrl);

async function main() {
  const [,, name, jsonPath] = process.argv;
  if (!name || !jsonPath) {
    console.error('Usage: ts-node generateCollection.ts <name> <fields.json>');
    process.exit(1);
  }
  const fields: Field[] = JSON.parse(readFileSync(jsonPath, 'utf-8'));
  const collection = buildCollection(name, fields);
  await pb.collections.import({
    collections: [collection]
  }, { deleteMissing: false });
  console.log('Imported collection', name);
}

main();
