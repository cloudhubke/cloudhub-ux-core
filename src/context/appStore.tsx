import create from 'zustand/vanilla';
import appReducer, { INITIAL_STATE } from './appReducer';

const appStore: any = create((set: any) => ({
  ...INITIAL_STATE,
  dispatch: (args) => set((state) => appReducer(state, args)),
}));

export default appStore;
