import { IAction } from '@zaibot/fsa';
import { Channel } from 'redux-saga';
import * as effects from 'redux-saga/effects';
import { is } from 'redux-saga/utils';

import { Pattern } from './Pattern';
import { transform } from './transform';

export function take<T = IAction>(channel: Channel<T>): effects.ChannelTakeEffect<T>;
export function take<TPayload, TMeta>(pattern: Pattern<TPayload, TMeta>): effects.TakeEffect;
export function take(patternOrChannel: any): any {
    if (is.channel(patternOrChannel)) {
        // forward
        return effects.take(patternOrChannel);
    }
    return effects.take(transform(patternOrChannel));
}
