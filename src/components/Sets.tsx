import { closestCenter, DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, TouchSensor, UniqueIdentifier, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'preact/hooks';
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers';
import { useAutoAnimate } from '@formkit/auto-animate/preact';
import { Set } from './Set';
import { swipeBehavior, isSwipeBehaviorSupported  } from '@telegram-apps/sdk';

interface Item {
    id: string | number;
    index: string | number;
}

export function Sets() {
    const uids: Item[] = [];
    for (let i = 1; i <= 100; i++) uids.push( { id: i, index: i-1 });
    const [lastId, setLastId] = useState(100);
    const [items, setItems] = useState([...uids]);
    const [activeId, setActiveId] = useState<UniqueIdentifier>(null);

    //todo: replace autoAnimate with spring animations
    const [parent] = useAutoAnimate();

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                delay: 200,
                tolerance: 5
            }
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 250,
                tolerance: 5
            }
        })
    );

    return (    
        <DndContext
            sensors={sensors}   
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        >
            <SortableContext
                items={items}
                strategy={verticalListSortingStrategy}
            >
                <div 
                    ref={parent}
                    class="sets-container"
                >
                    { items.map((item) => {
                                const { id, index } = item;
                                return <Set
                                            key={id} 
                                            id={id}
                                            index={index}
                                            onSwipeLeft={handleSwipeLeft}
                                            onSwipeRight={handleSwipeRight}
                                            onDoubleTap={handleDoubleTap}
                                        >
                                </Set>
                            })}
                    </div>
            </SortableContext>
        </DndContext>
    )

    function handleDragStart(event: DragStartEvent) {
        setActiveId(event.active.id);
        console.log('drag is starting');
    }

    function handleDragEnd(event: DragEndEvent) {
        console.log('drag is ended');
        const {active, over} = event;
        
        if (active.id !== over.id) {
            setItems((items) => {
                const oldItem = items.find(item => item.id === active.id);
                const oldIndex = items.indexOf(oldItem);
                const newItem = items.find(item => item.id === over.id);
                const newIndex = items.indexOf(newItem);
                
                return arrayMove(items, oldIndex, newIndex);
            });
        }
        setActiveId(null);
    }

    function handleSwipeLeft(id: UniqueIdentifier) {
        console.log(`сохраняем в отчет ${id}`);
        removeExerciseById(id);
    }

    function handleSwipeRight(id: UniqueIdentifier) {   
        console.log(`удаляем ${id}`);
        removeExerciseById(id);
    }   

    function removeExerciseById(idToRemove: UniqueIdentifier) {
        setItems((items) => { 
            return items.filter((item) => item.id !== idToRemove);
        });
    }

    function handleDoubleTap(id: UniqueIdentifier) {
        duplicateExerciseById(id);
    }

    function duplicateExerciseById(id: UniqueIdentifier) {
        setItems((items) => { 
            const copy = [...items];
            const item = copy.find(item => item.id === id);
            const itemIndex = copy.indexOf(item);
            const newItem = { id: lastId+1, index: item.id};
            copy.splice(itemIndex+1, 0, newItem);
            setLastId(newItem.id);
            return copy;
        });
    }

}


