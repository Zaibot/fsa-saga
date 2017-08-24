import { IFactory } from '@zaibot/fsa';

export type ActionType<TPayload = any, TMeta = any> = IFactory<TPayload, TMeta>;
