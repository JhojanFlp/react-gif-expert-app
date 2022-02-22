import { getGif } from "../../helpers/gifService"


describe('Test in gifService.js', () => {
  test('should response 10 elements', async() => {
    const gifs = await getGif('Kimetsu');
    expect(gifs.length).toBe(10)
  })
  test('should response 0 elements', async() => {
    const gifs = await getGif();
    expect(gifs.length).toBe(0)
  })
})
