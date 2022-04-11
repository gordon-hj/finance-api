module.exports = (context) => { 
    this.ds = context.ds;
    return this;
};

class CreditUnionLocal {
    constructor(regionCode, localCode, localName) {
        this.regionCode = regionCode;
        this.localCode = localCode;
        this.localName = localName;
    }
}

exports.findAllByRegion = (region_code, base_at) => {
    return new Promise((resolve, reject) => 
    this.ds.query(
        query = 'SELECT `local_code`, `local_name`, `regional_code` FROM `credit_union_local` WHERE `regional_code` = ? and `base_at` = ?',
        data = [region_code, base_at],
        (result) => {
            if(result == undefined || result == null || result.length == 0) resolve(null)
            else resolve(result.map(row => new CreditUnionLocal(row.local_code, row.local_name, row.regional_code)))
        },
        (err) => reject(err),
    )
)};
