import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import { SetProps } from "../models/SetProps";
import { AdjustDraggableAttributes } from "../models/DraggableAttributes";
import { useMergedHandlers } from "../helpers/useMergedHandlers";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { FullGestureState } from "@use-gesture/react";
import { useRef } from "react";
import { l } from "../locale/localization";

export function Set(props: SetProps) {
    const lastTap = useRef(0);
    const cooldown = useRef(false);

    const { id, onSwipeLeft, onSwipeRight, onDoubleTap } = props;
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id});

    const draggableAttibutes = AdjustDraggableAttributes(attributes);
    const animatedDivRef = useRef(null);

    const combinedRef = (node: HTMLDivElement) => {
        setNodeRef(node);
        animatedDivRef.current = node;
    };

    const [{ x, opacity }, api] = useSpring(() => (
        { 
            x: 0, 
            opacity: 1,
            config: {
                tension: 300, // ← "жесткость" пружины 0–1000
                friction: 30, // ← "сопротивление" движению 0-100
            }
        }
    ));
    const swipe = useDrag((state) => onSwipping(state),
            {
               axis: 'x',
               swipe: {
                    duration: 200,
                    velocity: 0.1,
                    distance: 25,          
                },
                preventDefault: false,
                filterTaps: true,
                eventOptions: { passive: false }
            });

    //todo: replace with spring animation
    const style = {
        'will-change': 'transform, opacity',
        transform: CSS.Transform.toString(transform),
        transition,
        x,
        opacity
    };

    const mergedListeners = useMergedHandlers(listeners, swipe());

    return (
        <animated.div class="draggable-item" 
            ref={combinedRef} 
            style={style} 
            {...draggableAttibutes}
            {...mergedListeners}
            onClick={handleClick}
            >
                <p>{props.id}: {props.index}</p>
        </animated.div>
    )

    function handleClick() {
        const now = Date.now();
        const DOUBLE_TAP_DELAY = 300;

        if (cooldown.current) return;

        if (now - lastTap.current < DOUBLE_TAP_DELAY) {
            console.log('Double tap!');
            onDoubleTap(id);
            cooldown.current = true;
            setTimeout(() => (cooldown.current = false), 500);
        }

        lastTap.current = now;
    }

    function onSwipping(state: Omit<FullGestureState<'drag'>, "event">) {
        const { swipe: [swipeX], movement: [mx] , active, cancel } = state;

        const trigger = Math.abs(swipeX);
        const onSwipe = swipeX === -1 ? 
                        onSwipeLeft : 
                            swipeX === 1 ? 
                            onSwipeRight : null;

        if (!active && trigger) {
            const exitX = mx > 0 ? window.innerWidth : -window.innerWidth;
            api.start({
                x: exitX,
                opacity: 0,
                onRest: () => {
                    onSwipe?.(id);
                }
            });
            return;
        }
        if (Math.abs(mx) >= window.innerWidth) cancel();
        api.start(
            { 
                x: active ? mx : 0,
                immediate: active
            });
    }
}