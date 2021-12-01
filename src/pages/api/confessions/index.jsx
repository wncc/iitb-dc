import { confessions } from '../../../data';

const handler = (req, res) => {
  res.status(200).json(confessions)
}

export default handler
