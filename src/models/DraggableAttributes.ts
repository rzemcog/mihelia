import type { JSX } from 'preact';
import { DraggableAttributes as dndKitDraggableAttributes } from '@dnd-kit/core';

type AriaRole = JSX.HTMLAttributes<HTMLElement>['role'];

export interface DraggableAttributes {
   role: AriaRole;
   tabIndex: number;
  'aria-disabled': boolean;
  'aria-pressed': boolean | undefined;
  'aria-roledescription': string;
  'aria-describedby': string;
}

export function AdjustDraggableAttributes(attributes: dndKitDraggableAttributes) {
    const { role, ...otherAttibutes } = attributes;

    return {
        role: role as AriaRole,
        ...otherAttibutes
    }
}

