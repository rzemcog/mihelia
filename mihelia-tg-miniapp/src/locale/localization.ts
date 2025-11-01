export function l(key: string) {
    const localesMap = locales();
    return localesMap.get(key);
}

function locales() {
    const localesMap = new Map<string,string>();
    localesMap.set("App.Title", "Mihelia");
    return localesMap;
}

