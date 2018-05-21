
const path = "/api/users";

class UserServices {

    static getUser = async () => {
        try {
            const response: Response = await fetch(path, {
                method: 'GET',
                credentials: 'include'
            });
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return await response.json();
        } catch (error) {
            return Promise.reject('Error when fetching data...');
        }
    };
}

export {
    UserServices
}
