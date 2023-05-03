function CreatedAt(postCreationTime) {
	console.log(postCreationTime)
    
    
    const now = Math.floor(new Date() )
	console.log('now',now)
    const date = new Date(postCreationTime * 1000);
	console.log('date', date)
    
    const diffInHours = (() => {
        const diffInMilliseconds = now - date;
        return diffInMilliseconds / (1000 * 60 * 60);
    })();

	console.log('diff', diffInHours)
    
    //const day = 24
    const numOfDays = Math.floor(diffInHours / 24)
	console.log('days', numOfDays)
    const numOfWeeks = Math.floor(numOfDays / 7)
	console.log("weeks", numOfWeeks);
    const numOfMonths = Math.floor(numOfWeeks / 4)
	console.log("month", numOfMonths);
    const numOfYears = Math.floor(numOfMonths / 12)
	console.log("years", numOfYears);

    return timeFormatter(numOfYears, numOfMonths, numOfWeeks, numOfDays, diffInHours)
}

export default CreatedAt;

const timeFormatter = (
	numOfYears,
	numOfMonths,
	numOfWeeks,
	numOfDays,
	diffInHours
) => {
	if (numOfYears > 1) {
		return `${numOfYears} years ago |`;
	} else if ((numOfYears === 1)) {
		return `1 year ago |`;
	} else if (numOfMonths > 1) {
		return `${numOfMonths} months ago |`;
	} else if ((numOfMonths === 1)) {
		return `1 month ago |`;
	} else if (numOfWeeks > 1) {
		return `${numOfWeeks} weeks ago |`;
	} else if ((numOfWeeks === 1)) {
		return `1 week ago |`;
	} else if (numOfDays > 1) {
		return `${numOfDays} days ago |`;
	} else if ((numOfDays === 1)) {
		return `1 day ago |`;
	} else if (diffInHours > 1) {
		return `${Math.floor(diffInHours)} hours ago |`;
	} else {
		return `1 hour ago |`;
	}
};

console.log('THIS HERE*****************',CreatedAt(1683054783))