const URL_PREFIX = 'http://www.pudge.wang:3080/api';

const http = {
    get(url, params) {
        // console.log(params); // {a: 3, b: 4}  ->  ?a=3&b=4
        if (params) {
            // Object.keys(params)   ["a", "b"]
            const arr = Object.keys(params).map(item => {
                return item + '=' + params[item];
            });
            const str = '?' + arr.join('&'); // ["a=3", "b=4"]
            url += str;
            console.log(url);
        }

        return new Promise(resolve => {
            fetch(URL_PREFIX + url)
                .then(reponse => reponse.json())
                .then(res => {
                    resolve(res);
                });
        });
    },
    post(url, data) {
        return new Promise(resolve => {
            fetch(URL_PREFIX + url, {
                body: JSON.stringify(data), // must match 'Content-Type' header
                headers: {
                    'content-type': 'application/json',
                },
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
            })
                .then(response => response.json())
                .then(res => {
                    resolve(res);
                });
        });
    },
};

export default http;
