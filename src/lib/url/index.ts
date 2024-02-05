export const toSearchString = (data: Record<string, string | number>) =>  {
    const url = new URLSearchParams(data as Record<string, string>);
    return url.toString();
}