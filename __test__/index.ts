import { Configuration, FleetApi, ResponseError } from '../dist'

export const config = new Configuration({
  accessToken: "NO_TOKEN"
});

const badRequest = async () => {
  const fleet = new FleetApi(config);
  const res = await fleet.getShipCooldown('asdfasdfasa');
  if (res) {
    return res.data;
  }
  return undefined
};


badRequest()
  .then((result) => console.log('Result from fulfilled promise:', result))
  .catch(async (err: ResponseError) => {
    const { response } = err
    console.log('Full response', response)
    console.log('JSON body:', await response.json())
    console.log('status:', response.status)
  })
