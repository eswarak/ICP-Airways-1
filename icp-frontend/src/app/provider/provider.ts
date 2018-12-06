import { Injectable } from '@angular/core';
@Injectable()
export class Provider {
    public apiUrl: any;
    public userData: any = null;
    public token: any = null;
    public rawData: any = null;
    public url: any = "169.61.62.89";
    public gethURL: any = "http://169.61.62.89:30001"
    public abi: any;
    constructor() {
        this.abi = [
            {
                "constant": true,
                "inputs": [],
                "name": "value",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_value",
                        "type": "string"
                    }
                ],
                "name": "set",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "get",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ]
        this.apiUrl = {
            login: "https://" + this.url + "/loginsvc/login",
            signup: "https://" + this.url + "/signupsvc/createUser",
            book: "http://" + this.url + ":30090/book",
            listBookingByUser: "http://" + this.url + ":30090/listBookingByUser",
            checkin: "http://" + this.url + ":30091/checkin",
            listFlightsByID: "https://" + this.url + "/listingsvc/listFlights",
            listFlights: "https://" + this.url + "/listingsvc/listFlights",
            getBlockchain: "http://" + this.url + ":30089/getBlockchain",
            setBlockchain: "http://" + this.url + ":30089/setBlockchain",
            setODM: "http://" + this.url + ":30095/odm",
            postEmail: "http://" + this.url + ":30989/postEmail",
            xrp: "http://localhost:3066/xrp"
        }
    }
}