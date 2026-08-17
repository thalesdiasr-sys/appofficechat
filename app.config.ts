import { defineConfig } from '@tanstack/react-start/config'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  vite: {
    plugins: [
      viteTsconfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
})
