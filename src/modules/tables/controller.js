const Controller = require('../../helpers/controller');

class TablesController extends Controller {
	async getTasks(req, res) {
		try {
			res.json({});
		} catch (error) {
			console.error(error);
			res.status(500).json({ error });
		}
	}
}

module.exports = TablesController;
