import { confessions } from 'data';

const handler = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(confessions);
};

export default handler;
