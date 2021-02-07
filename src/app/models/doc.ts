import { Status } from './status';

export interface Doc {
  date: Date;
  serial: number;
  sum: number;
  enroll: string;
  status: Status;
  act: string;
  client: string;
}
