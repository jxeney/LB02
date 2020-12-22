export class IdUtil {
    static generateUserId() {
        return Math.floor(Math.random()*1000).toString()+'-'
            +Math.floor(Math.random()*1000).toString();
    }

    static generateBlogId() {
        return Math.floor(Math.random()*100).toString()+'-'
            +Math.floor(Math.random()*100).toString();
    }
}


