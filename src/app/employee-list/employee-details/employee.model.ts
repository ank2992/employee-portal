export class EmployeeDetail{
    public employeeId : string;
    public lastName : string;
    public mobileNumber : string;
    public emailId : string;
    public gender : string;
    public workAddress : string;
    public homeAddress : string;
    public currentProjectName : string;
    public hobbies : string;
    public rating:number;

    constructor(empId : string,lastName : string,
        mobileNumber : string,emailId : string,gender : string,workAddress : string,
        homeAddress : string,currentProjectName : string,hobbies : string,rating : number){
            this.employeeId=empId;
            this.lastName=lastName;
            this.mobileNumber=mobileNumber;
            this.emailId=emailId;
            this.gender=gender,
            this.workAddress=workAddress;
            this.homeAddress=homeAddress;
            this.currentProjectName=currentProjectName;
            this.hobbies=hobbies;
            this.rating=rating;

    }
    
}