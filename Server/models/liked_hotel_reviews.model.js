const sql = require('./database');

const LikedHotelReview = function(liked_review){
    this.liked_by = liked_review.liked_by,
    this.review_for = liked_review.review_for,
    this.review_by = liked_review.review_by
}

LikedHotelReview.create = (newLikedReview, result) => {
    sql.query(`INSERT INTO liked_hotel_reviews SET ?`, newLikedReview, (err,res) => {
        if(err){
            console.log('error while creating liked review')
            result(err,null)
            return
        }

        console.log('liked_review created')
        result(null, {...newLikedReview})
    })
}

LikedHotelReview.remove = (liked_by, review_for, review_by, result) => {
    sql.query(`DELETE FROM liked_hotel_reviews WHERE liked_by = ? AND review_for = ? AND review_by = ?`, [liked_by, review_for, review_by], (err,res) => {
        if(err){
            console.log('error while deleting liked_review', err)
            result(null,err)
            return
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log('deleted liked review')
        result(null,{...res,liked_by,review_for,review_by})
    })
}

module.exports = LikedHotelReview