
const path = "/api/users/";
const companyPath = "/api/company/";

class UserServices {

    // static getUser = async () => {
    //     try {
    //         const response: Response = await fetch(path, {
    //             method: 'GET',
    //             credentials: 'include'
    //         });
    //         if (!response.ok) {
    //             return Promise.reject(response.statusText);
    //         }
    //         return await response.json();
    //     } catch (error) {
    //         return Promise.reject('Error when fetching data...');
    //     }
    // };

    // static getCompany = async (companyId: string) => {
    //     try {
    //         const response: Response = await fetch(companyPath + companyId, {
    //             method: 'GET',
    //             credentials: 'include'
    //         });
    //         if (!response.ok) {
    //             return Promise.reject(response.statusText);
    //         }
    //         return await response.json();
    //     } catch (error) {
    //         return Promise.reject('Error when fetching data...');
    //     }
    // };


    static getUser = () => {
        return fetch(path, {
                method: 'GET',
                credentials: 'include'
            })
            .then(res => res.json())
            .then(user => {
                return {
                    user: user,
                    error: null
                }
            })
            .catch(error => { 
                return { 
                    user: null,
                    error: error 
                }
            });
    };

    static getCompany = (companyId: string) => {
        return fetch(companyPath + companyId, {
            method: 'GET',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(company => {
            return {
                company: company,
                error: null
            }
        })
        .catch(error => { 
            return { 
                company: null,
                error: error 
            }
        });
    };
}

export {
    UserServices
}
