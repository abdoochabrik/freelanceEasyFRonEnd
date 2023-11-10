import { CenterOfInterest } from "./CenterOfIneters.enum";
import { Role } from "./Role.enum";

export interface User {
   id:number;
   username:string;
   email:string;
   password:string;
   centerOfInterest:CenterOfInterest
   activateNotifications:boolean
   role:Role;
}
