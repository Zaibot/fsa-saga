import { IAction } from '@zaibot/fsa';
import * as saga from 'redux-saga/effects';

export function put<A extends IAction>(action: A): saga.PutEffect<A> {
    return saga.put(action);
}
