export const createAccount = (data) => {
    return new Promise((resolve, reject) => {
        return fetch(`${process.env.REACT_APP_BASE_API}/user/`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        }).then((res) => {
            return res.json();
        }).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}
