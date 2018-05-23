const path = '/api/users/';
const companyPath = '/api/company/';

class UserServices {
    public static getUser = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, {});
        }).then(res => {
            return { user: { id: 10001, name: 'Harry Potter' }, error: null };
        });
    };

    public static getCompany = async (companyId: string) => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000, {});
        }).then(a => {
            return { company: { id: 10001, name: 'Pottor Hari' }, error: null };
        });
    };

    // public static getUser = () => {
    //     return fetch(path, {
    //         method: 'GET',
    //         credentials: 'include',
    //     })
    //         .then(res => res.json())
    //         .then(user => {
    //             return {
    //                 user: user,
    //                 error: null,
    //             };
    //         })
    //         .catch(error => {
    //             return {
    //                 user: null,
    //                 error: error,
    //             };
    //         });
    // };

    // public static getCompany = (companyId: string) => {
    //     return fetch(companyPath + companyId, {
    //         method: 'GET',
    //         credentials: 'include',
    //     })
    //         .then(res => res.json())
    //         .then(company => {
    //             return {
    //                 company: company,
    //                 error: null,
    //             };
    //         })
    //         .catch(error => {
    //             return {
    //                 company: null,
    //                 error: error,
    //             };
    //         });
    // };
}

export { UserServices };
