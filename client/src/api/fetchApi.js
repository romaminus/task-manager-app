export const fetchApi = async (url, method = 'GET', body = null) => {
    const response = await fetch(url, {
        method,
        body: body ? JSON.stringify(body) : null,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};

export const getApi = async (url) => {
    return fetchApi(url);
};

export const postApi = async (url, body) => {
    return fetchApi(url, 'POST', body);
};

export const putApi = async (url, body) => {
    return fetchApi(url, 'PUT', body);
};

export const deleteApi = async (url, body) => {
    return fetchApi(url, 'DELETE', body);
};