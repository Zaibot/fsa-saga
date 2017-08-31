import * as effects from 'redux-saga/effects';

import { ActionType } from './ActionType';
import { Pattern } from './Pattern';

function transformAction<TPayload, TMeta>(action: ActionType<TPayload, TMeta>): effects.ActionType {
    if (typeof action === 'function' && typeof action.type === 'string') {
        return action.type as effects.ActionType;
    }
    throw Error(`expected function with type property`);
}

export function transform(actions: Pattern): effects.Pattern {
    if (actions instanceof Array) {
        return actions.map(transformAction) as effects.ActionType[];
    } else {
        return transformAction(actions);
    }
}
