export interface SetProps {
    id: string | number;
    index: string | number;
    onSwipeLeft?: (id: string | number) => void;
    onSwipeRight?: (id: string | number) => void;
    onDoubleTap?: (id: string | number) => void;
}