import { Configuration, FleetApi } from '../dist'

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


badRequest().then((result) => console.log('Result from fulfilled promise:', result)).catch((err) => console.error('ERROR:', err))
