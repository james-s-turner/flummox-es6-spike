import {Actions} from 'flummox';

export class MailActions extends Actions{

    createMailEntry(emailAddress){
        return{
            emailAddress : emailAddress,
            date: Date.now()
        };
    }

}