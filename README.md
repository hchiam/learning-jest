# learning-jest
Learning Jest for JS TDD.

Just one of the things I'm learning. https://github.com/hchiam/learning

## Get Started:
To get started, create this folder within Terminal to install jest-cli:
```
mkdir node_modules
npm install --save-dev jest-cli
```

You can check that jest-cli was properly installed:
```
jest --version
```

## Run Test:
Then to run the test, do this in Terminal:
```
npm run test
```
(Or just `npm test` or `npm t`.)
(Also note that this uses `npm`, unlike Tape, which uses `node`.)

Or simply:
```
jest
```

This tests `add.js` using `add.test.js`.

And you should see something like this:

```
> @ test /.../learning-jest
> jest

 PASS  ./add.test.js
  ✓ The add method (5ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.592s, estimated 1s
Ran all test suites.
```

## Note:

This is set inside package.json to suppress the simulation of a browser with the global variable `window`.
```
"testEnvironment": "node"
```

## Resources:

https://facebook.github.io/jest/
