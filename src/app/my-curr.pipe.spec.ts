import { MyCurrPipe } from './my-curr.pipe';

describe('MyCurrPipe', () => {
  it('create an instance', () => {
    const pipe = new MyCurrPipe();
    expect(pipe).toBeTruthy();
  });
});
