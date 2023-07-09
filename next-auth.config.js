// next-auth.config.js

const { PostgreSqlAdapter } = require('next-auth/adapters')

const config = {
  // Configure one or more authentication providers
  providers: [
    // Your authentication providers go here
  ],

  // Configure the database adapter
  adapter: PostgreSqlAdapter({
    // Configure the PostgreSQL connection string
    connectionString: process.env.DATABASE_URL,
  }),

  // Specify other NextAuth.js options
  session: {
    // Configure session options
  },

  // Add any additional custom configuration options here
}

export default config
