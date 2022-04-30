const sql = require('./database')

const Review = function(review){
    this.user = review.user
    this.owner = review.owner
    this.rating = review.rating
    this.review_title = review.review_title
    this.date_of_stay = review.date_of_stay
    this.review = review.review
}

Review.create = (newReview, result) => {
    sql.query(`INSERT INTO reviews SET ?`, newReview, (err,res) => {
        if(err){
            console.log('err')
            result(err,null)
            return
        }

        console.log("review created: ", {id: res.insertId, ...newReview})
        result(null, {id: res.insertId, ...newReview})
    })
}

Review.findAll = (result) => {
    sql.query(`SELECT CONCAT(r.user, ' ', r.owner) as "id", r.review_title, r.review, r.rating, u.name, 
    (SELECT count(*) from liked_hotel_reviews WHERE review_for = r.owner AND review_by = r.user) as 'likes'  
    FROM reviews r 
    JOIN users u ON r.user = u.id `, (err,res) => {
        if(err){
            console.log('err occured while getting reviews by hotel')
            result(err,null)
            return
        }

        if(res.length) {
            console.log("found reviews: ", res)
            result(null,[...res])
            return
        }

        //not found reviews with the id
        result({kind: "not_found"}, null)
    })
}

Review.findByOwner = (owner, result) => {
    sql.query(`SELECT r.user, r.owner as "hotel", r.review_title, r.review, r.rating, r.date_of_stay, r.updated_on, u.username, u.name, u.profilepicture, 
    (SELECT count(*) from liked_hotel_reviews WHERE review_for = r.owner AND review_by = r.user) as 'likes'  
    FROM reviews r 
    JOIN users u ON r.user = u.id 
    WHERE owner = ${owner}`, (err,res) => {
        if(err){
            console.log('err occured while getting reviews by hotel')
            result(err,null)
            return
        }

        if(res.length) {
            console.log("found reviews: ", res)
            result(null,[...res])
            return
        }

        //not found reviews with the id
        result({kind: "not_found"}, null)
    })
}

Review.findByUser = (user, result) => {
    sql.query(`SELECT r.review_title, r.review, r.date_of_stay, r.rating, r.created_on, r.owner as 'hotel',
    (SELECT name FROM owners WHERE id=r.owner) as 'review_for', 
    (SELECT count(liked_by) FROM liked_hotel_reviews WHERE review_by = r.user AND review_for = r.owner) as 'total_likes' 
    FROM reviews r WHERE r.user=${user}`, (err,res) => {
        if(err){
            console.log('err')
            result(err,null)
            return
        }

        if(res.length) {
            console.log("found reviews: ", res)
            result(null,res)
            return
        }

        //not found reviews with the id
        result({kind: "not_found"}, null)
    })
}

Review.updateById = (user,hotel,review,result) => {
    sql.query(`UPDATE reviews SET review = "${review}" WHERE user = ${user} AND owner=${hotel}`,
    (err, res) => {
        if(err) {
            console.log("err")
            result(null,err)
            return
        }
        if(res.affectedRows == 0) {
            //not found review with the id
            result({kind: "not_found"}, null)
            return
        }

        console.log("updated review: ", {id: id, review})
        result(null, {id: id, review})
    })
}

Review.remove = (user, hotel, result) => {
    sql.query("DELETE FROM reviews WHERE user = ? AND owner = ?", [user, hotel], (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          if (res.affectedRows == 0) {
              console.log("not_found")
            // not found reviews with the id
            result({ kind: "not_found" }, null);
            return;
          }
      
          console.log("deleted reviews with userid: ", user, "and hotelId: ", hotel);
          result(null, res);
    })
}

module.exports = Review