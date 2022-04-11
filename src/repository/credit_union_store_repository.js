module.exports = (context) => { 
    this.ds = context.ds;
    return this;
};

class CreditUnionStore {
    constructor(store_code, store_name, local_code) {
        this.store_code = store_code;
        this.store_name = store_name;
        this.local_code = local_code;
    }
}

exports.findAllByLocal = (local_code, base_at) => {
    return new Promise((resolve, reject) => 
    this.ds.query(
        query = 'SELECT `store_code`, `store_name`, `local_code` FROM `credit_union_store` WHERE `local_code` = ? and `base_at` = ?',
        data = [local_code, base_at],
        (result) => {
            if(result == undefined || result == null || result.length == 0) resolve(null)
            else resolve(result.map(row => new CreditUnionStore(row.store_code, row.store_name, row.local_code)))
        },
        (err) => reject(err),
    )
)};
