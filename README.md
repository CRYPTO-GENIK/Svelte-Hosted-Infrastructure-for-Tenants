# Svelte-Hosted-Infrastructure-for-Tenants

S.H.I.T. - Svelte Hosted Infrastructure for Tenants. The S.H.I.T. that actually works! 🚀

A powerful, opinionated multi-tenant SaaS framework built with Svelte 5, SvelteKit, Tailwind and PocketBase.

## Features

- Multi-tenant architecture with role based access
- White label support for partners and their customers
- PocketBase powered auth and database
- TailwindCSS styling
- Collection generator to scaffold PocketBase collections from JSON

## Getting Started

```bash
npm install
npm run dev
```

By default the app connects to a PocketBase instance at `http://127.0.0.1:8090`. Change the constant in [`src/lib/pocketbase.ts`](src/lib/pocketbase.ts) to point to your instance.

Visit `/login` to authenticate against your PocketBase server. The dashboard route shows the raw authenticated user.

## Collection Generator

Generate PocketBase collections with standard permissions using a JSON field definition:

```bash
npm run generate <collectionName> collections/example.json
```

The generator will import the collection into the PocketBase instance configured by `PB_URL` environment variable.

## Testing

Vitest is configured:

```bash
npm test
```

## Documentation

- [`collections/example.json`](collections/example.json) – sample field definition
- [`scripts/generateCollection.ts`](scripts/generateCollection.ts) – imports collections

## License

MIT
