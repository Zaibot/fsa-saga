# @zaibot/fsa-saga [![Coverage Status](https://coveralls.io/repos/github/Zaibot/fsa-saga/badge.svg?branch=master)](https://coveralls.io/github/Zaibot/fsa-saga?branch=master) [![Build Status](https://travis-ci.org/Zaibot/fsa-saga.svg?branch=master)](https://travis-ci.org/Zaibot/fsa-saga)

Easy type checked Flux Standard Action for TypeScript

## Installation

```sh
npm i -S @zaibot/fsa-saga
```

## Usage

```ts
import { Action } from '@zaibot/fsa';
import { takeEvery } from '@zaibot/fsa-saga';

export const HELLO_WORLD = Action<{ message: string; }>('HELLO_WORLD');

function* rootSaga() {
    yield takeEvery(HELLO_WORLD, (action) => {
        console.log(action.payload.message);
    });
}
```
