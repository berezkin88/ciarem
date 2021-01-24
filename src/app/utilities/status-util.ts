import { Status } from "../models/status";

export class StatusUtil {
  static valueOf( value: string ): Status {
    switch (value) {
      case 'complete':
        return Status.COMPLETE;
      case 'pending':
        return Status.PENDING;
      case 'failed':
        return Status.FAILED;
      default:
        console.log('Unknown status');
        return Status.UNKNOWN;
    }
  }
}
