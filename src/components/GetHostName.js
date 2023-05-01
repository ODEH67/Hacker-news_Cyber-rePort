function GetHostName(url) {
    try {
        const postURL = new URL(url)
        return postURL.hostname

    } catch(error) {
        console.error(`Error parsing URL ${url}: ${error.message}`);
        return null
    }
    
}

export default GetHostName;