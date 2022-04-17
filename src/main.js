// TODO phase process.env
const phase = process.argv[2];
console.log("Request phase =>", phase);
const context = require('./context')(phase);
const express = require('express');
const app = express(); 

app.use(express.json());

app.get("/api/finance/credit_union/regions", (req, res) => 
    context.credit_union_service.getAllRegions()
    .then((regions) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(regions);        
    })
);

app.get("/api/finance/credit_union/locals", (req, res) => {
    const region_code = req.query.region_code
    const base_at = req.query.base_at
    context.credit_union_service.getAllLocals(region_code, base_at)
    .then((locals) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(locals);        
    })}
);

app.get("/api/finance/credit_union/stores", (req, res) => {
    const local_code = req.query.local_code
    const base_at = req.query.base_at
    context.credit_union_service.getAllStores(local_code, base_at)
    .then((stores) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(stores);        
    })}
);

app.get("/api/finance/credit_union/products", (req, res) => {
    const local_code = req.query.local_code
    const store_code = req.query.store_code
    const base_at = req.query.base_at
    context.credit_union_service.getAllProducts(local_code, store_code, base_at)
    .then((products) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(products);        
    })}
);

app.get("*", (req, res) => {
    const path = req.path
    console.log(path)
    res.statusCode = 200;
    res.sendFile(path, {root: './static/public'});
});

app.get("/", (req, res) => {
    console.log('Requests: %s', req.headers);
    console.log('Request IP: %s',  req.headers['x-forwarded-for'] ||  req.socket.remoteAddress);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Under construction, Contact gordon_hj@naver.com, https://github.com/gordon-hj');
});

app.listen(80, () => console.log('Server running on port 80'));