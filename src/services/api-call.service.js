const apiOrigin = "http://localhost:7001";

export const get = (url) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiOrigin}${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            const result = extractResponse(response);
            // Check if the response is ok
            if (response.ok) {
                resolve(result);
            } else {
                reject(result.data);
            }
        }).catch((error) => {
            reject(error);
        })
    })
}

export const post = (url, data) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiOrigin}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => {
            const result = extractResponse(response);
            if (response.ok) {
                resolve(result);
            } else {
                reject(result);
            }
        }).catch((error) => {
            reject(error);
        })
    })
}

const extractResponse = (response) => {
    const contentType = response.headers.get('Content-Type');
    let result;
    if (contentType === "application/json") {
        result = response.json();
    } else if (contentType === "application/pdf") {
        result = response.blob();
    }
    return result;
}