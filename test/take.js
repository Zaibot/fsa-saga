const { assert } = require(`chai`);
const { Factory, isTypeOneOf } = require(`@zaibot/fsa`);
const { take, put } = require(`../es5`);

const actionMarco = Factory(`Marco`);
const actionPolo = Factory(`Polo`);

function* test() {
    yield put(actionMarco({}));
    yield put(actionPolo({}));
}

describe(`isTypeOneOf`, () => {
    describe(`Marko/Polo`, () => {
        it(`marco`, () => {
            const generator = test();
            assert.deepEqual(generator.next().value, put(actionMarco({})));
            assert.deepEqual(generator.next().value, put(actionPolo({})));
        });
    });
});
