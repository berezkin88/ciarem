import { Status } from './status';

export interface Issue {
  id: number;
  date: Date;
  initiator: string;
  topic: string;
  status: Status;
}
