const ROLES = ['ADMIN'];

export class User
{
    constructor(display_name){
        this.display_name = display_name
        this.creation_date = new Date()
        this.roles = []
        this.deleted_date = null;  
    }
}