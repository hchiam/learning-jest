# learning-jest
Learning Jest for JS TDD.

Just one of the things I'm learning. https://github.com/hchiam/learning

## Get Started:
To get started, create this folder within Terminal to hold jest-cli and its dependencies:
```
mkdir node_modules
```

Then install jest-cli:
```
npm install --save-dev jest-cli
```

## Run Test:
Then to run the test, do this in Terminal:
```
npm run test
```

(Or just `npm test` or `npm t`.)

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
