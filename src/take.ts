import * as saga from 'redux-saga/effects';

import { Pattern } from './Pattern';
import { transform } from './transform';

export function take<TPayload, TMeta>(pattern: Pattern<TPayload, TMeta>): saga.TakeEffect {
    return saga.take(transform(pattern));
}
