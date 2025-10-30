import { useNavigation } from "../../helpers/useNavigation";
import { ExercisesIcon, HomeIcon, ProgressIcon, ReportsIcon } from "../Icons/Icons";

interface NavigationIconProps {
    url: string;
}

export function NavigationIcon(props: NavigationIconProps) {
    const { url } = props;

    const { 
        isHomeUrl, 
        isProgressUrl, 
        isExercisesUrl, 
        isReportsUrl, 
        homeUrl, 
        progressUrl, 
        exercisesUrl, 
        reportsUrl 
    } = useNavigation();

    if (url === homeUrl) {
        return <HomeIcon active={isHomeUrl} />
    }
    if (url === exercisesUrl) {
        return <ExercisesIcon active={isExercisesUrl} />
    }

    if (url === progressUrl) {
        return <ProgressIcon active={isProgressUrl} />
    }

    if (url === reportsUrl) {
        return <ReportsIcon active={isReportsUrl} />
    }

    return <></>
}