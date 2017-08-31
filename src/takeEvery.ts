import { IAction } from '@zaibot/fsa';
import { Channel } from 'redux-saga';
import * as effects from 'redux-saga/effects';
import { is } from 'redux-saga/utils';

import { Pattern } from './Pattern';
import { transform } from './transform';

export function takeEvery<T = IAction>(channel: Channel<T>, worker: effects.HelperFunc0<T>): effects.ForkEffect;
export function takeEvery<TPayload, TMeta>(pattern: Pattern<TPayload, TMeta>, worker: effects.HelperFunc0<IAction<TPayload, TMeta>>): effects.ForkEffect;
export function takeEvery(patternOrChannel: any, worker: any): effects.ForkEffect {
    if (is.channel(patternOrChannel)) {
        // forward
        return effects.takeEvery(patternOrChannel, worker);
    }
    return effects.takeEvery(transform(patternOrChannel), worker);
}
