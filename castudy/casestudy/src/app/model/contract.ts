import {Customer} from "./customer";
import {Facility} from "./facility";

export interface Contract {
  id: number;
  code: string;
  customer: Customer;
  facility: Facility;
  startDate: string;
  endDate: string;
  deposit: string;
  total: string

}
