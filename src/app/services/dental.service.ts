import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IService } from "../shared/service";
import { IDentist } from "../shared/dentist";

@Injectable({
  providedIn: "root",
})
export class DentalService {
  constructor(private http: HttpClient) {}

  url: string = "https://dental-realtime-database-default-rtdb.firebaseio.com";

  // getServices() {
  //   return this.http.get<IService[]>(`${this.url}/services.json`);
  // }

  // getDentists() {
  //   return this.http.get<IDentist[]>(`${this.url}/dentists.json`);
  // }
}
