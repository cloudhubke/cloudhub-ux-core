import create from 'zustand';
import appStore from './appStore';

export default function createAppStore<
  T extends {
    dispatch: (args: {
      [K in keyof T]?: T[K];
    }) => void;
  }
>() {
  return create<T>(appStore as any);
}
