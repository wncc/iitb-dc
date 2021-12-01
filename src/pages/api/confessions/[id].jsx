import { confessions } from '../../../data';

const confessionHandler = (req, res) => {
  const id = req.query.id
  const filtered = confessions.filter((p) => p.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}


export default confessionHandler
