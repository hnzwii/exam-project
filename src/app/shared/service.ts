export interface IService {
  serviceName: string;
  icon: string;
  definition: string;
  description: string;
  id: number;
  types: Types[];
}
export interface Types {
  name: string;
  price: number;
  definition: string;
}
