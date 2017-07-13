import { finds } from '../services/Search';
export default {

  namespace: 'search',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *find({ payload }, { call, put }) {  // eslint-disable-line
      console.log("1")
      const data = yield call(finds, payload);
      console.log(payload);
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
