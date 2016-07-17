export function createAction(type: string, defaultPayload: any = {}) {
  const actionHandler = function (payload: any = {}) {
    const action = {
      type,
      payload: payload || defaultPayload
    };

    return action;
  }

  return actionHandler;
}

export function createActions(types: any): any {
  const actions = {};

  for (let key in types) {
    const actionType = types[key];
    const type = (typeof actionType == 'string') ? actionType : actionType.type;

    actions[key] = createAction(type, actionType.payload);
    actions[type] = type;
  }

  return actions;
}

export function createReducer(funcMap: any, initState: any) {
  return (state = initState, action) => funcMap.hasOwnProperty(action.type) ?
  funcMap[action.type](state, action) :
  state;
}
