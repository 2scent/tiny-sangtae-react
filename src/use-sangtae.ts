import { useSyncExternalStore } from 'react';
import type { Sangtae } from 'tiny-sangtae';

/**
 * A React hook to use Sangtae state management.
 *
 * @template State The type of the state managed by Sangtae.
 * @param {Sangtae<State>} sangtae The Sangtae instance to be used.
 * @returns {readonly [State, (updater: State | ((prev: State) => State)) => void]}
 * A tuple containing the current state and a function to update the state.
 */
export function useSangtae<State>(sangtae: Sangtae<State>) {
  const state = useSyncExternalStore(sangtae.subscribe, sangtae.get, sangtae.get);

  return [state, sangtae.set] as const;
}
