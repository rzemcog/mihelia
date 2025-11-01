import { useLocation } from "preact-iso";
import { useMemo } from "preact/hooks";

export function useNavigation() {
    const { url: currentUrl } = useLocation();
    
    const homeUrl = "/";
    const progressUrl = "/progress";
    const exercisesUrl = "/exercises";
    const reportsUrl = "/reports";

    const isHomeUrl = useMemo(() => currentUrl === "/", [currentUrl]);
    const isProgressUrl = useMemo(() => currentUrl === "/progress", [currentUrl]);
    const isExercisesUrl = useMemo(() => currentUrl === "/exercises", [currentUrl]);
    const isReportsUrl = useMemo(() => currentUrl === "/reports", [currentUrl]);

    return { homeUrl, progressUrl, exercisesUrl, reportsUrl, isHomeUrl, isProgressUrl, isExercisesUrl, isReportsUrl };
}
