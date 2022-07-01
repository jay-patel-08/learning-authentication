export class Users {
    id: number;
    userName: string;
    password: string;

    constructor(userName: string, password: string) {
        this.id = 1;
        this.password = password;
        this.userName = userName;
    }
}