const sendRequest = async (method, url, data) => {
    let request
    if (method === 'GET') {
        request = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }
    else {
        request = await fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    
    return await request.json()
}

export { sendRequest }