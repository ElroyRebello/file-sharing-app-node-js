const router = require('express').Router();
const File = require('../models/file');

router.get('/', async (req, res) => {
    
        
            return res.render('index');
      
});


module.exports = router;