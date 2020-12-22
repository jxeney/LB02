//Task-2a
import dbConnection from "../../database-connection";
//End Task

//Task-2b
/**
 * Fetch all guestbook entries from the database
 * and send it to the client
 * @param req: request
 * @param res: response
 * @param next: next step
 * @returns {*}
 */
export function holeGuestbookEintraege(req, res, next) {
    //initialize an array called liste
    let liste = [];

    //define an sql-query
    const abfrage = "select * from eintrag;";
    try {
        //submit sql query stored in the string abfrage.
        dbConnection.query(abfrage, (fehler, reihen) => {
            if (fehler){
                console.error(fehler);
            }
            // iterate through all returned records stored in reihen
            for (let index in reihen){
                if (index == null){
                    throw new Error('index of getall is null')
                }
                let eintrag = reihen[index];
                liste.push({
                    "titel": eintrag.titel,
                    "text": eintrag.text,
                    "autor": eintrag.autor,
                    "email": eintrag.email,
                    "datum": eintrag.datum
                })
            }
            //send to liste to the client
            return res.status(200).send(JSON.stringify(liste));
        });
    } catch (ex) {
        console.log(ex);
        next(ex);
        return res.status(500).send({message: 'index of getall is null'});
    }
}
//End Task

//Task-3a
/**
 * Main function for getting/processing post data
 * @param req
 * @param res
 * @returns {*}
 */
export function erzeugeGuestbookEintrag(req, res, next) {
    //define sql-query
    const abfrage = "insert into eintrag set ?";
    try {

        let today = new Date();
        let heutigesDatum = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


        //submit sql query stored in the string abfrage.
        let neuerEintrag = {
            titel: req.body.titel.toLowerCase(),
            text: req.body.text.toLowerCase(),
            autor: req.body.autor.toLowerCase(),
            email: req.body.email.toLowerCase(),
            datum: heutigesDatum
        };

        dbConnection.query(abfrage, neuerEintrag, (fehler, resultat) => {
            if (fehler) {
                console.error(fehler);
            }
        });
        return res.status(201).json({
            message: `blog inserted with ${neuerEintrag.titel}!`
        });
    } catch (ex) {
        next(ex);
    }
}
//End Task
