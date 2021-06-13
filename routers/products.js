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

router.patch('/:productId', (req, res, next)=>{
    res.status(200).json({
        message:"update product"
    });
});

router.delete('/:productId', (req, res, next)=>{
    res.status(200).json({
        message:"Delete product"
    });
});

router.post('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message:"tou discovered the special ID",
            id: id
        })
    } else {
        res.status(200).json({
        message:"youyou passed an ID"
        })
    }
});

module.exports= router;