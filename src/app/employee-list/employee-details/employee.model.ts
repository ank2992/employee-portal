export class EmployeeDetail{
    private employeeId : number;
    private lastName : string;
    private mobileNumber : string;
    private emailId : string;
    private gender : string;
    private workAddress : string;
    private homeAddress : string;
    private currentProjectName : string;
    private hobbies : string;
    private rating:number;

    constructor(empId : number,lastName : string,
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
     getEmpId(){
        return this.employeeId;
    }
    setRatings(rating:number){
    this.rating=rating;
    }
    
}