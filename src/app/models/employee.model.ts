/**
 * This is the Model class for the Employee, it contains all the employee attributes
 */
export class EmployeeDetail {
    private _employeeId: string;
    private _lastName: string;
    private _mobileNumber: string;
    private _emailId: string;
    private _gender: string;
    private _workAddress: string;
    private _homeAddress: string;
    private _currentProjectName: string;
    private _hobbies: string;
    private _rating: number;

    constructor(empId: string, lastName: string,
        mobileNumber: string, emailId: string, gender: string, workAddress: string,
        homeAddress: string, currentProjectName: string, hobbies: string, rating: number) {
        this._employeeId = empId;
        this._lastName = lastName;
        this._mobileNumber = mobileNumber;
        this._emailId = emailId;
        this._gender = gender,
        this._workAddress = workAddress;
        this._homeAddress = homeAddress;
        this._currentProjectName = currentProjectName;
        this._hobbies = hobbies;
        this._rating = rating;

    }

    get employeeId(): string {
        return this._employeeId
    }
    set employeeId(value) {
        this._employeeId = value;
    }
    get lastName(): string {
        return this._lastName
    }
    set lastName(value) {
        this._lastName = value;
    }
    get mobileNumber(): string {
        return this._mobileNumber
    }
    set mobileNumber(value) {
        this._mobileNumber = value;
    }
    get emailId(): string {
        return this._emailId
    }
    set emailId(value) {
        this._emailId = value;
    }
    get gender(): string {
        return this._gender
    }
    set gender(value) {
        this._gender = value;
    }
    get workAddress(): string {
        return this._workAddress
    }
    set workAddress(value) {
        this._workAddress = value;
    }
    get homeAddress(): string {
        return this._homeAddress
    }
    set homeAddress(value) {
        this._homeAddress = value;
    }
    get currentProjectName(): string {
        return this._currentProjectName
    }
    set currentProjectName(value) {
        this._currentProjectName = value;
    }
    get hobbies(): string {
        return this._hobbies
    }
    set hobbies(value) {
        this._hobbies = value;
    }
    get(): number {
        return this._rating;
    }
    set rating(value) {
        this._rating = value;
    }

}