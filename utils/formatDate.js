export default function formatDate(isoString) {
    const date = new Date(isoString);

    const months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day} ${month} ${year}, ${hours}.${minutes}`;
}