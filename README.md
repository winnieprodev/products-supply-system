# 1. Run Project

All commends run in the project directory.

## `start development`

To install all dependencies and start development:

```
yarn
yarn start
```

# tests

Every component should have tests right now. They're not extra fancy, it's usually a simple snapshot test, but that should be a required minimum for every single component.

To run tests:

```
yarn test
```

To update snapshots:

```
yarn test -u
```

you can also add `--watchAll` flag to include all files, not only the changed one (if, for example, you add some changes in the previous commit and forgot to update snapshots).

# Build

```
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

# code-gen for GraphQL

in `/queries` folder, there's a `/hooks` folder that should be exposed to other components. The rest should remain internal.

The flow to working with code-gen and in general GraphQL is following:

1. add / modify `*.graphql` query file in `/queries/src` file
2. run frontend project (`yarn && yarn start`)
3. login, then open browser's console and simply run `getBearerToken()`
4. copy the result of the function, it should be quite a long string (~1000 letters)
5. set env variable `authToken` in your system (`export authToken=_PASTE_HERE_` for mac, `set authToken=_PASTE_HERE` for Windows)
6. run

```
yarn run gql-gen
```

7. now, you will see the files in `/queries/gen` will get updated. remember - don't edit them, but please add them to your commit.
8. Now you create your hook in `/queries/hooks` that can return new `Async<T>` const ready to use - please see other hooks for reference.
