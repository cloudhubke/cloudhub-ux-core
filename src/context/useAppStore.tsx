import create, { StoreApi, UseBoundStore } from 'zustand';
import shallow from 'zustand/shallow';
import appStore from './appStore';

export const useStore = create(appStore);

export default function useAppStore<S>() {
  return function (callBack: (store: S) => Partial<S>) {
    const state: S = useStore(callBack, shallow);

    return state;
  };
}
