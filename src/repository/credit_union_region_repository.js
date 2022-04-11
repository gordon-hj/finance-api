module.exports = (context) => { 
    this.ds = context.ds;
    return this;
};

class CreditUnionRegion {
    constructor(regionCode, regionName, baseAt) {
        this.regionCode = regionCode;
        this.regionName = regionName;
        this.baseAt = baseAt;
    }
}

exports.findAllByDate = (base_at) => {
    return new Promise((resolve, reject) => 
    this.ds.query(
        query = 'SELECT `regional_code`, `regional_name`, `base_at` FROM `credit_union_region` WHERE `base_at` = ?',
        data = [base_at],
        (result) => {
            if(result == undefined || result == null || result.length == 0) resolve(null)
            else resolve(result.map(row => new CreditUnionRegion(row.regional_code, row.regional_name, row.base_at)))
        },
        (err) => reject(err),
    )
)};

exports.findLastUpdatedDate = () => {
    return new Promise((resolve, reject) => 
    this.ds.query(
        query = 'SELECT `base_at` FROM `credit_union_region` ORDER BY `base_at` desc limit 1',
        data = [],
        (result) => {
            if(result == undefined || result == null || result.length == 0) resolve(null)
            else resolve(result[0].base_at)
        },
        (err) => reject(err),
    )
)};