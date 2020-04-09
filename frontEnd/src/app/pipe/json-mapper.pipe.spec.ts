import { JsonMapperPipe } from './json-mapper.pipe';

describe('JsonMapperPipe', () => {
  it('create an instance', () => {
    const pipe = new JsonMapperPipe();
    expect(pipe).toBeTruthy();
  });
});
