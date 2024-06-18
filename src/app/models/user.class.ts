export class User {
  customIdName!: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: number;
  street: string;
  zipCode: string;
  city: string;
  constructor(obj?: any) {
    this.firstName = obj ?obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.email  = obj ? obj.email : '';
    this.birthDate = obj ? obj.birthDate : 0;
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
    this.customIdName = obj ? obj.customIdName : '';
  }

  toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city
    }
  }
}