const db = require('../utils/database');

const Clothing_87 = class Clothing_87 {
    constructor(cid, name, cat_id, price, remote_url, local_url){
        this.cid = cid;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    static fetchAll(){
        return db.execute("SELECT * FROM category_87");
    }

    static fetchProductByCategory(cid){
        return db.execute("SELECT * FROM clothing_87 where cat_id = ?",[cid]);
    }
}

module.exports = Category_87;