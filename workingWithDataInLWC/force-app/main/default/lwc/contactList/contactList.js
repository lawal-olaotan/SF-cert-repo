import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName'
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import getContacts from '@salesforce/apex/ContactController.getContacts'

const COLUMNS = [
    {label: 'First Name', fieledName:FIRSTNAME_FIELD.fieledApiName, type:'text'},
    {label: 'Last Name', fieledName:LASTNAME_FIELD.fieledApiName, type:'text'},
    {label: 'Email', fieledName:EMAIL_FIELD .fieledApiName, type:'text'},

]

export default class ContactList extends LightningElement {

    columns = COLUMNS; 
    @wire(getContacts)
    contacts;
    get errors(){
        return this.contacts.error ? reduceErrors(this.contacts.error) : [];
    }

}