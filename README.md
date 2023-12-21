# activitybridge
The bridge from other systems to activitypub.

The goal of activitybridge is to provide a potentially growing list of bridges from other systems to activitypub.

# Bridges

## Matrix activitybridge

Enable matrix users to interact with users that are on any activitypub powered platform.

Provide a matrix bridge to deploy alongside a matrix server like synapse, which maps its matrix users to activitypub users and federates them by creating an activitypub server next to the matrix server.

The first goal is to get direct messages (DMs) working, as this is the most requested usecase for enabling users to communicate.

### Setup

Make sure to install the dependencies:

```bash
pnpm i
```

### Development Server

Start the development server on <http://localhost:3000>

```bash
pnpm dev
```

### Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nitro.unjs.io/deploy) for more information.
