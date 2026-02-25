import {faker} from '@faker-js/faker'
import { signupModel } from "../models/signup.model"

export function getSignupData(customSignupData:Partial<signupModel>={}):signupModel{
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const defaultData: signupModel = {
    title: 'Mr.',
    name: `${firstName} ${lastName}`,
    password: faker.internet.password(),
    day: '01',
    month: '01',
    year: '2000',
    newsletter: true,
    offers: false,
    firstName,
    lastName,
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobileNumber: '99999999'
  };
 return {...defaultData,...customSignupData};
}
