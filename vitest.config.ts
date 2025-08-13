import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      $app: path.resolve('tests/mocks/app'),
      $lib: path.resolve('src/lib')
    }
  },
  test: {
    environment: 'node'
  }
});
