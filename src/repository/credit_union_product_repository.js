module.exports = (context) => { 
    this.ds = context.ds;
    return this;
};

class CreditUnionStore {
    constructor(product_code, product_name, interest, store_code, local_code) {
        this.product_code = product_code;
        this.product_name = product_name;
        this.interest = interest;
        this.store_code = store_code;
        this.local_code = local_code;
    }
}

exports.findAllByLocalAndStore = (local_code, store_code, base_at) => {
    return new Promise((resolve, reject) => 
    this.ds.query(
        query = 'SELECT `product_code`, `product_name`, `interest`, `store_code`, `local_code` FROM `credit_union_product` WHERE `local_code` = ? and `store_code` = ? and `base_at` = ?',
        data = [local_code, store_code, base_at],
        (result) => {
            if(result == undefined || result == null || result.length == 0) resolve(null)
            else resolve(result.map(row => new CreditUnionStore(row.product_code, row.product_name, row.interest, row.store_code, row.local_code)))
        },
        (err) => reject(err),
    )
)};
