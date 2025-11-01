import { defaultIconProps, defaultActiveIconProps } from './IconProps';
import Dumbells from '../../assets/icons/Dumbbells.svg?react';
import Progress from '../../assets/icons/Progress.svg?react';
import Exercises from '../../assets/icons/Exercises.svg?react';
import Report from '../../assets/icons/Report.svg?react';

interface IconProps { 
    active: Boolean
}

export function HomeIcon(props: IconProps) {
    const { active } = props;
    const currentProps = active ? defaultActiveIconProps : defaultIconProps;

    return(
        <Dumbells { ...currentProps }/>
    );
}

export function ProgressIcon(props: IconProps) {
    const { active } = props;
    const currentProps = active ? defaultActiveIconProps : defaultIconProps;

    return(
        <Progress { ...currentProps }/>
    );
}

export function ExercisesIcon(props: IconProps) {
    const { active } = props;
    const currentProps = active ? defaultActiveIconProps : defaultIconProps;

    return(
        <Exercises { ...currentProps }/>
    );
}   

export function ReportsIcon(props: IconProps) {
    const { active } = props;
    const currentProps = active ? defaultActiveIconProps : defaultIconProps;

    return(
        <Report { ...currentProps }/>
    );
}