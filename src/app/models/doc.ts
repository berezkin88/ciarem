import { Client } from './client';

export interface Doc {
  date: Date;
  serial: number;
  sum: number;
  enroll: string;
  status: string;
  act: string;
  client: Client;
}
