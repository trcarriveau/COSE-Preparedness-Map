import { cose_map } from '../../../data/cose_map'
import { query_dummy } from '../../../data/query_dummy'

export default function handler(req, res) {
    res.status(200).json(query_dummy)
}