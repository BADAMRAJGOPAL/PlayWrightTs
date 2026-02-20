import { faker } from '@faker-js/faker';

export interface SignupData {
  title: string;
  name: string;
  password: string;
  day: string;
  month: string;
  year: string;
  newsletter: boolean;
  offers: boolean;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  address2: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

export function generateSignupData(
  overrides: Partial<SignupData> = {}
): SignupData {

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  const defaultData: SignupData = {
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

  return { ...defaultData, ...overrides };
}