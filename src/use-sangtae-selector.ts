import { useSyncExternalStore } from 'react';
import type { Sangtae } from 'tiny-sangtae';

/**
 * A React hook to use Sangtae state management with a selector.
 *
 * @template State The type of the state managed by Sangtae.
 * @template Value The type of the value returned by the selector.
 * @param {Sangtae<State>} sangtae The Sangtae instance to be used.
 * @param {function(State): Value} selector A function that selects a portion of the state.
 * @returns {Value} The selected portion of the state.
 */
export function useSangtaeSelector<State, Value>(
  sangtae: Sangtae<State>,
  selector: (state: State) => Value,
) {
  const getSnapshot = () => selector(sangtae.get());

  return useSyncExternalStore(sangtae.subscribe, getSnapshot, getSnapshot);
}
