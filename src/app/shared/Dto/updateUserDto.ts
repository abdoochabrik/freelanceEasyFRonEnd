import { CenterOfInterest } from "../enums/CenterOfInterest";

export class UpdateUserDto {
  username?:string;
  email?:string;
  password?:string;
  centerOfInterest?:CenterOfInterest;
  activateNotifications?:boolean
}
