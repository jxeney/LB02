### Async version of blog-db
#### Path
```
dev-server/api/blog/blog-db.js
```
#### Code
```
import dbConnection from '../../database-connection';

/**
 * Get all guestbook-entries
 * @returns {Promise<unknown>}
 */
function getall() {
    return new Promise((resolve, reject) => {
        const query = "select * from eintrag;";
        dbConnection.query(query, (error, results) => {
                if (error){
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
}

export { getall }
```

### Async version of blog-controller
#### Path
```
dev-server/api/blog/blog-controller.js
```

#### Code
```
export async function guestbookListAsync(req, res, next) {
    var list = [];
    const init = {
        'status': 200,
        'statusText': 'welcome to our guest book!'
    };
    try {
        await database.getall()
            .then(function (res) {
                //let blog= JSON.stringify(res[0], null, 3);
                for (let index in res){
                    if (index == null){
                        return res.status(500).send({message: 'index of getall is null'});
                    }
                    let blog = res[index];
                    list.push({
                        "titel": blog.titel,
                        "text": blog.text,
                        "autor": blog.autor,
                        "email": blog.email,
                        "datum": blog.datum
                    })
                }
            });
        return res.status(200).send(JSON.stringify(guestbookList));
    } catch (ex) {
        console.log(ex);
        next(ex);
    }
}



export async function createDb(req,res, next) {
    try {
        let new_blogEntry = new Blog(
            req.body.nickname.toLowerCase(),
            req.body.title.toLowerCase(),
            req.body.content.toLowerCase()
        );

        if (new_blogEntry.nickname) {
            await database.blogentries.create(
                new_blogEntry.nickname,
                new_blogEntry.title,
                new_blogEntry.content
            );
        }
        return res.status(201).json({
            message: `blog inserted with ${new_blogEntry.title}!`
        });
    } catch (ex) {
        next(ex);
    }
}



//not used at the moment
export function show(req,res) {
    return res.json();
}
export function update(req,res) {
    return res.json();
}
export function remove(req,res) {
    return res.json();
}
```

### Async version of blog-db
#### Path
```
dev-server/api/blog/blog-routes.js
```
#### Code
```
/* For implementation in future
//get a specific blog from a bunch of orders by id
router.get('/blog/:id', controller.show);
//update
router.put('/blog', controller.update);
//delete
router.delete('/blog', controller.remove);
*/
```
