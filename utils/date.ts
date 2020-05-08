const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function getDate(): string {
    const now = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
    const PST = new Date(now);
    return days[PST.getDay()];
}
