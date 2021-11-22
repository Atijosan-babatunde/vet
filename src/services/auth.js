export const obtainAuthToken = (data) => {
    return new Promise((resolve, reject) => {
        return fetch(`${process.env.REACT_APP_BASE_API}/obtain/`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        }).then((res) => {
            return res.json();
        }).then((data) => {
            resolve(data)
        }).catch((err) => {
            reject(err);
        })
    })
}

export const verifyOTP = (props) => {
    console.log(props)
    return new Promise((resolve, reject) => {
        return fetch(`${process.env.REACT_APP_BASE_API}/otp/`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(props)
        }).then((res) => {
            return res.json()
        }).then((data) => {
            resolve(data)
        }).catch((err) => {
            console.log(err);
            reject(err);
        })
    })
}