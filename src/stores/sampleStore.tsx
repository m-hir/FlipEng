import {observable, computed, action} from 'mobx';

export default class SampleStore {
    @observable num: Number = 0;

    @computed get double() {
        return this.num * 2;
    }

    @action changeNum = (newNum) => 
    {
        console.log(newNum);
        this.num =newNum;
    }
}