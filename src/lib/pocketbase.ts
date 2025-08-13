import PocketBase from 'pocketbase';

export const POCKETBASE_URL = 'http://127.0.0.1:8090';

export const pb = new PocketBase(POCKETBASE_URL);

pb.autoCancellation(false);
