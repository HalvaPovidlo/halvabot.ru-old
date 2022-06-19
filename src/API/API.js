import axios from 'axios'
//const URL = "http://51.250.81.4:9091/api/v1/music";
export const URL = "http://192.168.1.113:9091/api/v1/music";


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
        method: 'POST',
        body: JSON.stringify({enable: true})
    };

    const response = await fetch(URL + '/setradio', requestOptions);
    return response;
}



export const getMockURL = async () => {
    const response = await axios.get("http://halvabot.ru/mock", { method: 'GET' });
    return response;    //async data needs to be used on fly
    //setMockURL(response.data);
}

export const getServerURL = async () => {
    const response = await axios.get("http://halvabot.ru/server", { method: "GET" });
    return response;    //async data needs to be used on fly
    //setServerURL(response.data);
}