# More advanced stuff for [React](https://github.com/hchiam/learning-reactjs)

Testing React Apps: <https://jestjs.io/docs/en/tutorial-react>

Snapshot Testing: <https://jestjs.io/docs/en/snapshot-testing>

`react-test-renderer` renders snapshots. Snapshots let you check whether the UI renders the same as before. If it's different, then either something unexpected/incorrect is happening, or the snapshot needs to be updated to match the new UI behaviour. Either way, you'll be notified of a change. Kinda functional tests as opposed to unit tests.

Functional tests can be written with [`react-testing-library`](https://github.com/testing-library/react-testing-library), [Enzyme](https://airbnb.io/enzyme/), or React's [TestUtils](https://reactjs.org/docs/test-utils.html), to let you do things like click, change, and check label text.

## [create-react-app](https://github.com/facebook/create-react-app) CLI commands I used

```bash
npm install -g create-react-app
yarn create react-app my-app
cd my-app
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```

But use files as shown here: <https://github.com/facebook/jest/tree/master/examples/snapshot>

```bash
# cd my-app
jest # or: yarn test
```

## To update snapshots

```bash
# cd my-app
jest --updateSnapshot
```

You can limit with the `--testNamePattern` option.
