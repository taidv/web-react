import { user } from './stubs/userData';

const TIMEOUT = 800;

class UserServices {

    static getUser() {
        console.log('getting user....');
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('return user: ', user);
                resolve(user);
            }, TIMEOUT);
        });
    }
}

export {
    UserServices
}
