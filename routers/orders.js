const express= require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message:"handling get require to /product"
    });
});

router.post('/', (req, res, next)=>{
    res.status(201).json({
        message:"handling post require to .product"
    });
});

router.get('/:orderId', (req, res, next)=>{
    res.status(200).json({
        message:"update product"
    
    });
});

module.exports = router;