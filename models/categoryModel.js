const db = require('../utils/database');

const Category_87 = class Category_87 {
    constructor(cid, name, size, remote_url, local_url){
        this.cid = cid;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    static fetchAll(){
        return db.execute("SELECT * FROM category_87");
    }
}

module.exports = Category_87;