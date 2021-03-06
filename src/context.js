module.exports = (phase) => { 
    this.ds = require('./datasource/rdb')(phase);

    this.credit_union_region_repository = require('./repository/credit_union_region_repository')(this);
    this.credit_union_local_repository = require('./repository/credit_union_local_repository')(this);
    this.credit_union_store_repository = require('./repository/credit_union_store_repository')(this);
    this.credit_union_product_repository = require('./repository/credit_union_product_repository')(this);

    this.credit_union_service = require('./service/credit_union_service')(this);

    return this;
};
