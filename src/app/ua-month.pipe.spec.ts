import { UaMonthPipe } from './ua-month.pipe';

describe('UaMonthPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new UaMonthPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('expect to return Ukrainian months', () => {
    expect(pipe.transform('2020-01-15T02:30:15.01Z')).toBe('Січень');
    expect(pipe.transform('2020-02-15T02:30:15.01Z')).toBe('Лютий');
    expect(pipe.transform('2020-03-15T02:30:15.01Z')).toBe('Березень');
    expect(pipe.transform('2020-04-15T02:30:15.01Z')).toBe('Квітень');
    expect(pipe.transform('2020-05-15T02:30:15.01Z')).toBe('Травень');
    expect(pipe.transform('2020-06-15T02:30:15.01Z')).toBe('Червень');
    expect(pipe.transform('2020-07-15T02:30:15.01Z')).toBe('Липень');
    expect(pipe.transform('2020-08-15T02:30:15.01Z')).toBe('Серпень');
    expect(pipe.transform('2020-09-15T02:30:15.01Z')).toBe('Вересень');
    expect(pipe.transform('2020-10-15T02:30:15.01Z')).toBe('Жовтень');
    expect(pipe.transform('2020-11-15T02:30:15.01Z')).toBe('Листопад');
    expect(pipe.transform('2020-12-15T02:30:15.01Z')).toBe('Грудень');
  });

});
