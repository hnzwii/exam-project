export interface IAppointment {
  info: {
    date: string;
    dentist: string;
    fullname: string;
    phone: number;
    price: number;
    service: string;
    serviceType: string;
  };

  email: string;
}
