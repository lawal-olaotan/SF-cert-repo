import { LightningElement } from 'lwc';

annualRevenue = null;

export default class AccountFinder extends LightningElement {

    handleChange(event){
        this.annualRevenue = event.target.value;
    }

    reset(){
        this.annualRevenue = null;
    }


}