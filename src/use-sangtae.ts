import { useSyncExternalStore } from 'react';
import type { Computed, Sangtae } from 'tiny-sangtae';

/**
 * A React hook that integrates `Sangtae` or `Computed` with React's state management.
 *
 * @param sangtae The `Sangtae` or `Computed` state object to be used.
 * @returns The current state value.
 */
export function useSangtae<State>(sangtae: Sangtae<State> | Computed<State>) {
  return useSyncExternalStore(sangtae.subscribe, sangtae.get, sangtae.get);
}
