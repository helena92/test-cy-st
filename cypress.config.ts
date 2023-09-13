import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://stackadapt-interview.s3.amazonaws.com',

  },
  retries: 1
})