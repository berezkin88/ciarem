import { Status } from './../models/status';
import { StatusUtil } from './status-util';

describe('StatusUtil', () => {

  it('should return COMPLETE Status', () => {
    const actualStatus = StatusUtil.valueOf('complete');

    expect(actualStatus).toBe(Status.COMPLETE);
  });

  it('should return PENDING Status', () => {
    const actualStatus = StatusUtil.valueOf('pending');

    expect(actualStatus).toBe(Status.PENDING);
  });

  it('should return FAILED Status', () => {
    const actualStatus = StatusUtil.valueOf('failed');

    expect(actualStatus).toBe(Status.FAILED);
  });

  it('should return UNKNOWN Status', () => {
    const actualStatus = StatusUtil.valueOf('foo');

    expect(actualStatus).toBe(Status.UNKNOWN);
  });
});
