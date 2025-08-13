import PocketBase from 'pocketbase';

export const POCKETBASE_URL = 'https://shit.pockethost.io/';

export const pb = new PocketBase(POCKETBASE_URL);

pb.autoCancellation(false);
