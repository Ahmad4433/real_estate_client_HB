import React, { useState } from "react";
import AddReview from "./AddReview";
import "./reviews.css";
import ReviewList from "./ReviewList";
const Review = () => {
  const [savedReview,setRevedReview] = useState(null)
const onSaveReview = (review)=>{
  setRevedReview(review)
}




  return (
    <div>
      <AddReview onSaveReview={onSaveReview} />
      <ReviewList savedReview={savedReview} />
    </div>
  );
};

export default Review;
