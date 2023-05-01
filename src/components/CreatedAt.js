function CreatedAt(postCreationTime) {
    
    
    const now = Math.floor(new Date())
    const date = new Date(postCreationTime * 1000);
    
    const diffInHours = (() => {
        const diffInMilliseconds = now - date;
        return diffInMilliseconds / (1000 * 60 * 60);
    })();
    
    const day = 24
    const numOfDays = Math.floor(diffInHours / day)
    const numOfWeeks = Math.floor(numOfDays / 7)
    const numOfMonths = Math.floor(numOfDays / 31)
    const numOfYears = Math.floor(numOfMonths / 12)

    return timeFormatter(diffInHours, numOfDays, numOfWeeks, numOfMonths, numOfYears)
}

export default CreatedAt;

const timeFormatter = (diffInHours, numOfDays, numOfWeeks, numOfMonths, numOfYears) => {
    if (numOfYears > 1) {
			return `${numOfYears} years ago |`;
		} else if (numOfYears = 1) {
			return `1 year ago |`;
		} else if (numOfMonths > 1) {
			return `${numOfMonths} months ago |`;
		} else if (numOfMonths = 1) {
			return `1 month ago |`;
		} else if (numOfWeeks > 1) {
			return `${numOfWeeks} week(s) ago |`;
		} else if (numOfWeeks = 1) {
			return `1 week ago |`;
		} else if (numOfDays > 1) {
			return `${numOfDays} day(s) ago |`;
		} else if ((numOfDays = 1)) {
			return `1 day ago |`;
		} else if (diffInHours > 1) {
			return `${diffInHours} hours ago |`;
		} else {
			return `1 hour ago |`;
		}
};