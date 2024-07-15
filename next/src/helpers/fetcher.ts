export const fetcher = async (url: string, token: string) => await fetch(url, {
    method: 'GET',
    headers: {
        'authorization': `Token ${token}`,
    }
}).then(res => res.json())

// export const fetcher = (url: string, init?: RequestInit) => fetch(url, init).then(res => res.json())