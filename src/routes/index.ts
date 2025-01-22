export function setRoutes(app) {
    const IndexController = require('../controllers/index').default;
    const indexController = new IndexController();

    app.get('/api/kanji/:level', (req, res) => {
        const level = req.params.level;
        indexController.getKanjiByLevel(level)
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ error: err.message }));
    });
}