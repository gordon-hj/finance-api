module.exports = (context) => { 
    this.credit_union_region_repository = context.credit_union_region_repository;
    this.credit_union_local_repository = context.credit_union_local_repository;
    this.credit_union_store_repository = context.credit_union_store_repository;
    this.credit_union_product_repository = context.credit_union_product_repository;
    return this;
};

exports.getAllRegions = () => {
    return new Promise((resolve, reject) => 
    this.credit_union_region_repository.findLastUpdatedDate()
    .then((date) => {
        if(date == null) return resolve(null)
        return this.credit_union_region_repository.findAllByDate(date);
    }).then((regions) =>
        resolve(regions)
    ))
}

exports.getAllLocals = (region_code, base_at) => {
    return this.credit_union_local_repository.findAllByRegion(region_code, base_at)
}

exports.getAllStores = (local_code, base_at) => {
    return this.credit_union_store_repository.findAllByLocal(local_code, base_at)
}

exports.getAllProducts = (local_code, store_code, base_at) => {
    return this.credit_union_product_repository.findAllByLocalAndStore(local_code, store_code, base_at)
}