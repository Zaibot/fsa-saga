import { IAction } from '@zaibot/fsa';
import * as effects from 'redux-saga/effects';

import { Pattern } from './Pattern';
import { transform } from './transform';

export function takeEvery<TPayload, TMeta>(pattern: Pattern<TPayload, TMeta>, worker: effects.HelperFunc0<IAction<TPayload, TMeta>>): effects.ForkEffect {
    return effects.takeEvery(transform(pattern), worker);
}
