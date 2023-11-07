# Streeq

## Development

### Install Bun

```
brew tap oven-sh/bun
brew install bun
```

### Install dependencies

`bun i`

### Create PostgreSQL database

> Install PostgreSQL using Homebrew `brew install postgresql`

1. First, create a new user for this project.

`createuser --interactive --pwprompt`

2. Second, create a new database.

`createdb -O streeq streeq`

3. Create connection string

Example: `postgresql://username:password@host:port/database`

| Element      | Description                  |
| ------------ | ---------------------------- |
| `postgresql` | URL scheme, like HTTPS       |
| `username`   | Database username            |
| `password`   | Database password            |
| `host`       | Database server address      |
| `port`       | Database port (default 5432) |
| `database`   | Database name                |

### Setup Prisma

1. Initialize Prisma.

> We're using `bun` as a binary runner. If you try to do `prisma init`, it will fail because `prisma` is not a global executable. When we do `bun prisma`, it looks for a `prisma` binary in `node_modules` and runs it.

> You can also do `yarn prisma`

`bun prisma init`

This will create the Prisma schema file and a `.env` if it doesn't already exist.

2. Push Prisma schema to PostgreSQL

`bun prisma db push`

3. Now your Prisma client is ready!

> Look at [this doc](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices)

### Run app

`bun dev`
