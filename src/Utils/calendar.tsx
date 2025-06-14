const generateDays = () => Array.from({ length: 31 }, (_, i) => i + 1);
const generateMonths = () => [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const generateYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 100 }, (_, i) => currentYear - i);
};
export {
    generateDays,
    generateMonths,
    generateYears
}