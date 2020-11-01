# Workpay Design System Theme

Visual primitives for all things frontend at Workpay Africa.

## Getting Started

### Prerequisites

Ensure you are running:

- `node` atleast v10 xxx
- `yarn` atleast v1 xxx or `npm` v5 xxx

## Installation

The following steps will get you set up to contribute changes to this repo:

1. Clone the repo by clicking the blue <kbd>Clone</kbd> button at the top right
   of this page.

```bash

git clone https://github.com/maxwaiyaki/theme.git

```

2. Change directory, setup all dependencies and build. This monorepo uses `yarn`
   and `lerna`,so run `yarn prestart`. This command will install dependencies,
   and then bootstrap the repo using `lerna` to build all packages.

```bash

cd workpay-design-theme

yarn prestart

```

> If you run into any issues during this step related to `lerna`, install it
> globally( `yarn global add lerna` ) and then run `yarn prestart`

> You can also reach out to any member of the Frontend team to help you out.

## Development

To improve our development process, we've set up a couple of systems. Workpay
Design System uses a monorepo structure, this means each package can developed
and consumed independently.

### Tooling

- [Lerna](https://lerna.js.org/) to manage installation of dependencies and
  running various scripts. We also have yarn workspaces enabled by default.
- [Yarn](https://yarnpkg.com/) node package manager.
- [Next.js](https://nextjs.org/) for a blazing fast documentation website.
  versioning and changelogs.

### Commands

- **`yarn prestart`**: bootstraps the entire project, installs and symlinks all
  dependencies for cross-component development.

- **`yarn bootstrap`**: bootstraps the entire project and symlinks all
  dependencies for cross-component development.

- **`yarn docs:start`**: run the documentation site locally.


> more commands will be added later e.g testing and making releases.

## Think you found a bug?

You can either raise an issue in this repository or liase with the project
manager to include the bug in a bug sprint.

## Proposing new or changed API?

Please provide thoughtful comments and some sample API code. Proposals that
don't line up with our roadmap (liase with project manager) or don't have a
thoughtful explanation will be closed.

🚀 🇰🇪
