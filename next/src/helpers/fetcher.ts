export const fetcher = async (url: string, token: string) => await fetch(url, {
    method: 'GET',
    headers: {
        'authorization': `Token ${token}`,
    }
}).then(res => res.json())