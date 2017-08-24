import { IAction } from '@zaibot/fsa';
import * as effects from 'redux-saga/effects';

import { Pattern } from './Pattern';
import { transform } from './transform';

export function takeLatest<TPayload, TMeta>(pattern: Pattern<TPayload, TMeta>, worker: effects.HelperFunc0<IAction<TPayload, TMeta>>): effects.ForkEffect {
    return effects.takeLatest(transform(pattern), worker);
}
