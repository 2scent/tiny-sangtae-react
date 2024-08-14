# Tiny Sangtae React

React integration for [`Tiny Sangtae`](https://github.com/2scent/tiny-sangtae).

`useSangtae` hook takes either a `sangtae` or `computed` as an argument and returns the state.

```tsx
// counter.ts
import { sangtae, computed } from 'tiny-sangtae';

export const $counter = sangtae(0);

export const $counterAdded10 = computed($counter, v => v + 10);

export const increase = sangtae.set(v => v + 1);
export const decrease = sangtae.set(v => v - 1);

// Counter.tsx
import { useSangtae } from '@tiny-sangtae/react';
import { $counter, $counterAdded10, increase, decrease } from './counter';

export default function Counter() {
  const counter = useStore($counter);
  const counterAdded10 = useStore($counterAdded10);

  return (
    <div>
      <h1>{counter} + 10 = {counterAdded10}</h1>
      <button type="button" onClick={increase}>+</button>
      <button type="button" onClick={decrease}>-</button>
    </div>
  );
}
```
