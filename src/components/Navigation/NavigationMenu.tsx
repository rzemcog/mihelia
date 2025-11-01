import { useNavigation } from "../../helpers/useNavigation"
import { NavigationLink } from "./NavigationLink";

export function NavigationMenu() {
    const { 
        homeUrl, 
        exercisesUrl, 
        reportsUrl, 
        progressUrl 
    } = useNavigation();

    return(
         <nav>
            <NavigationLink url={homeUrl}/>
            <NavigationLink url={reportsUrl}/>
            <NavigationLink url={exercisesUrl}/>
            <NavigationLink url={progressUrl}/>
        </nav>
    )
}