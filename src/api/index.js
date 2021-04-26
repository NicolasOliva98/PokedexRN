const apiCall = async ({ url, method, body, headers }) => {
    try {
        const response = await fetch(url, {
            method, body, headers
        })
        return response.json()
    } catch (error) {
        console.log(error);
        throw Promise.reject(error)
    }
}
export default apiCall;