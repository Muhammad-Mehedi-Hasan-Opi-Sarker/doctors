import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentEmail = { email: email };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentEmail),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Data inside in Token', data);
                })
        }

    }, [user])
    return [token];
}
export default useToken;