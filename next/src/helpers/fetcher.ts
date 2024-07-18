
export const fetcher = async (url: string, token: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      authorization: `Token ${token}`,
    },
  });

  const data = await response.json();

  return {
    data,
    headers: response.headers,
  };
};

export const fetcherPost = async (url: string, token: string, body: any) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {  
      "Content-Type": "application/json",
      authorization: `Token ${token}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return {
    data,
    headers: response.headers,
  };
}; 

export const fetcherUpdate = async (url: string, token: string, body: any) => {
  const response = await fetch(url, {
    method: "PATCH",
    headers: {  
      "Content-Type": "application/json",
      authorization: `Token ${token}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return {
    data,
    headers: response.headers,
  };
}; 


export const fetcherDelete = async (url: string, token: string) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {  
      authorization: `Token ${token}`,
    }
  });

  const data = await response.json();

  return {
    data,
    headers: response.headers,
  };
}; 
