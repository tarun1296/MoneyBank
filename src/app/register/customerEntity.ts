export class customerEntity{
    customerId : string;
    password : string;

    constructor(customerId: string,password: string){
        this.customerId = customerId;
        this.password = password;
    }
}