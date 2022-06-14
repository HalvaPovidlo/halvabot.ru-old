const URL = "http://51.250.81.4:9090/api/v1/music";


export const handleEnqueue = async (song) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ song: song })
    };
    let response = await fetch(URL + '/enqueue', requestOptions);
    let result = await response.json();
    return result;
}

export const handleLoopStatus = async (song) => {
    const requestOptions = {
        crossDomain: true,
        mode: 'no-cors',
        method: 'GET',
    };
    const response = await fetch(URL + '/loopstatus', requestOptions);
    const data = await response.json();
    return data;
}

export const handleNow = async () => {
    const requestOptions = {
        method: 'GET',
    };
    const response = await fetch(URL + '/now', requestOptions);
    return response
}

export const handleLoop = async () => {
    const requestOptions = {
        crossDomain: true,
        mode: 'no-cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{"enable":true}'
    };
    const response = await fetch(URL + '/setloop', requestOptions);
    return response;
}

export const handleSkip = async () => {
    const requestOptions = {
        method: 'GET',
    };
    const response = await fetch(URL + '/skip', requestOptions);
    return response;
}

export const handleStats = async () => {
    const requestOptions = {
        crossDomain: true,
        mode: 'no-cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    const response = await fetch(URL + '/stats', requestOptions);
    const data = await response.json()
    return data;
}

export const handleRadio = async () => {
    const requestOptions = {
        crossDomain: true,
        mode: 'no-cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{"enable":true}'
    };

    const response = await fetch(URL + '/radio', requestOptions);
    const loopStatus = await response.json()
    requestOptions.body = { "enable": loopStatus };
}

