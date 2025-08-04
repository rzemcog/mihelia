import {useDraggable} from '@dnd-kit/core';
import { l } from '../locale/localization';
import { CSS } from '@dnd-kit/utilities'
 
export function Draggable(props) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: "Draggable"
    })

    const style = transform ? {
        transform: CSS.Transform.toString(transform),
    } : undefined;

    const buttonProps = {
        ...listeners,
        ...attributes,
        role: 'button' as const, 
        'aria-disabled': false,
        tabIndex: 0
    }

    return (
        <button ref={setNodeRef} style={style} {...buttonProps}>
            {props.children}
        </button>
    )
}