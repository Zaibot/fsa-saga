import { ActionType } from './ActionType';

export type Pattern<TPayload = any, TMeta = any> = ActionType<TPayload, TMeta> | Array<ActionType<TPayload, TMeta>>;
