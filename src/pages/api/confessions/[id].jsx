import { confessions } from 'data';

const confessionHandler = (req, res) => {
  const { id } = req.query;
  const item = confessions.find((p) => p.id === id);

  return item
    ? res.status(200).json(item)
    : res.status(404).json({ message: `User with id: ${id} not found.` });
};

export default confessionHandler;
