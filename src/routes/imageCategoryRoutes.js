const express = require('express');
const router = express.Router();
const imageProductController = require("../Controller/imageProductController")

router.get('/images',imageProductController.getAllImgeProduct );
router.post('/', imageProductController.createImageProduct );
router.put('/:id',imageProductController.updateImageProduct );
router.delete('/:id',imageProductController.deleteImageProduct );

module.exports = router;