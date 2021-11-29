# Ipsum Store Monorepo
This repository contains the a fictional app called the "Ipsum Store".  It's purpose is to illustrate best practices for the React / Typescript / MUI / MobX / Firebase stack, as well as the practices surrounding monorepos with multiple targets, and reusable component libraries.

It contains 

* Shared types and utilities that allow a single ontology for UI frameworks as well as the actual app domain
* A shared UI library that multiple web targets can employ for uniformity, code reuse, etc
* An example web target (`web-app`) that provides some simple Chat (and later Classifieds) functionality.   
* firebase auth (implemented on client)
* firestore and cloud functions (coming later)

## Dashboard Web App (Tooling / stack)

* Typescript with shared types on web and server tier (see above)
* Clean architecture and code structure. See [Front End Architecture and Approach](docs/WEB_ARCHITECTURE.md)
* Built with Webpack, Babel, React Router, Material UI, and Mobx (no SSR for now)
* Clean sharing between Material js world and sass; clean sass-only typography and layout


## Topical README's 

* [Front End Architecture and Approach](docs/web-architecture.md)

* [Auth and Multitenancy](docs/auth-and-multitenancy.md)


## Typescript (installed globally)

The build process assumes that `Typescript` is installed globally. 

```
npm install -g typescript

```
## Yarn 1.22.x

```
npm install -g yarn
```
To confirm version:
```
yarn --version
> 1.22.5
```

If you yarn > 2.0 is used, there will be issues.

## Install dependencies for entire workspace
```
yarn install
```
This effeciently installs dependencies according to `yarn`'s workspace mechanism into a combination of shared and packages-specific directories. 


## Web Build (bundle web)


```
yarn build:web
```
Builds the shared packages and then bundles the web package


## Run Web App locally (webpack dev server; localhost:8080)
```
yarn serve:web
```
Builds the shared packages and then serves the web code locally using webpack's dev server (no need to build first)


### Deploying packages
To deploy the shared types and utils to github packages 
- change the version in the package.json
- run `npm publish`
- update the version in the dependencies in the server and web directories respectively
- run `yarn install` to reinstall dependencies

