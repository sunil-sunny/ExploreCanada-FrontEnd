import { BookingDetails } from './bookingdetails.model';

export class UserDetails{

  userId: string;
  firstName: string;
  lastName: string;
  dateofBirth: string;
  address: string;
  country: string;
  pinCode: string;
  mobileNumber: number;
  bookingList: BookingDetails[];

}
