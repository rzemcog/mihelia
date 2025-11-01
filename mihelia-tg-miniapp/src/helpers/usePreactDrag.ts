import { useDrag as useReactDrag } from '@use-gesture/react';
import type { Handler, UserDragConfig } from '@use-gesture/react';
import type { JSX } from 'preact';

export type PreactGestureBindings = () => JSX.HTMLAttributes<any>;

/**
 * Обёртка useDrag для Preact.
 * При вызове возвращает функцию биндинга, типизированную для Preact.
 */
export function usePreactDrag<EventType = PointerEvent | MouseEvent | TouchEvent | KeyboardEvent>(
  handler: Handler<'drag', EventType>,
  config?: UserDragConfig
): PreactGestureBindings {
  const bind = useReactDrag(handler, config);
  return bind as unknown as PreactGestureBindings;
}

