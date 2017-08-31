import { IAction } from '@zaibot/fsa';
import { Channel } from 'redux-saga';
import * as effects from 'redux-saga/effects';
import { is } from 'redux-saga/utils';

import { Pattern } from './Pattern';
import { transform } from './transform';

export function takeLatest<T = IAction>(channel: Channel<T>, worker: effects.HelperFunc0<T>): effects.ForkEffect;
export function takeLatest<TPayload, TMeta>(pattern: Pattern<TPayload, TMeta>, worker: effects.HelperFunc0<IAction<TPayload, TMeta>>): effects.ForkEffect;
export function takeLatest(patternOrChannel: any, worker: any): effects.ForkEffect {
    if (is.channel(patternOrChannel)) {
        // forward
        return effects.takeLatest(patternOrChannel, worker);
    }
    return effects.takeLatest(transform(patternOrChannel), worker);
}
