export const generatePastMonthsOptions = () => {
    const currentDate = new Date();
    const options = [];

    const customPeriodOption = { value: 'custom', label: 'Custom period' };
    options.push(customPeriodOption);

    const initialYear = 2023;
    const initialMonth = 0;
    let i = 0;

    while (true) {
        const endDate = new Date();
        endDate.setDate(currentDate.getDate() - (i * 7));

        const startDay = 4; // Thursday (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
        const startDate = new Date(endDate);
        startDate.setDate(endDate.getDate() - ((endDate.getDay() + 7 - startDay) % 7));

        // Add six days to the startDate to get the whole week's endDate (Wednesday)
        endDate.setDate(startDate.getDate() + 6);

        // Break the loop if the start date goes before January 2022
        if (
            startDate.getFullYear() < initialYear ||
            (startDate.getFullYear() === initialYear && startDate.getMonth() < initialMonth)
        ) {
            break;
        }

        const label = `${startDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })} - ${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
        const value = `${startDate.toISOString().slice(0, 10)} - ${endDate.toISOString().slice(0, 10)}`;

        options.push({ value, label });

        i++;
    }


    return options;
};
