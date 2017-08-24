import * as effects from 'redux-saga/effects';

import { ActionType } from './ActionType';
import { Pattern } from './Pattern';

export function transform(actions: Pattern): effects.Pattern {
    if (actions instanceof Array) {
        return actions.map((action: ActionType) => action.type) as effects.ActionType[];
    } else {
        return actions.type as effects.ActionType;
    }
}
