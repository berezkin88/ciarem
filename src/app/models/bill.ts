import { Client } from './client';
import { Status } from './status';

export interface Bill {
  date: Date;
  serial: number;
  sum: number;
  enroll: string;
  status: Status;
  act: string;
  client: Client;
}
