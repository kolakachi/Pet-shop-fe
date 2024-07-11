import { Address } from "../models/Address";

export interface Checkout {
  shipping_address: Address;
  payment_details: Address;
  type_of_payment: string;
  card_details: {
    credit_card_number: string;
    expiry_date: string;
    cvv: string;
  };
  cash_on_delivery: {
    first_name: string;
    last_name: string;
    address_line_1: string;
    address_line_2: string;
    consent: boolean;
  };
  bank_transfer: {
    swift_code: string;
    iban: string;
    name: string;
    ref_code: string;
  };
}
