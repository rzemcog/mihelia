import { NavigationIcon } from "./NavigationIcon";

interface NavigationLinkProps {
    url: string;
}

export function NavigationLink({ url }: NavigationLinkProps) {
    return (
        <a href={url}>
            <NavigationIcon url={url} />
        </a>
    )
}