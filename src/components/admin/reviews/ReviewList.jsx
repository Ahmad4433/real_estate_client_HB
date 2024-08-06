import React, { useEffect, useState } from "react";
import "./reviewList.css";
import useNetwork from "../../../hooks/useNetwork";
import useProvideState from "../../../hooks/useProvideState";
import Box from "../common/Box";
import SectionTitle from "../common/SectionTitle";
import { MdDeleteOutline } from "react-icons/md";
import { SlEye } from "react-icons/sl";
import toast from "react-hot-toast";
const ReviewList = ({ savedReview }) => {
  const [review, setReviews] = useState([]);
  const { dispatch } = useProvideState();
  const { apiData, httpAction } = useNetwork();
  const { getReviewList, deleteReview } = apiData();
  useEffect(() => {
    setReviews((prevReview) => [...prevReview, savedReview]);
  }, [savedReview]);

  useEffect(() => {
    const getReviews = async () => {
      const result = await dispatch(httpAction(getReviewList()));
      if (result?.status) {
        setReviews(result?.list);
      }
    };

    getReviews();
  }, []);

  const deleteHandler = async (index, id) => {
    const result = await dispatch(httpAction(deleteReview(id)));
    if (result?.status) {
      toast.success(result?.message);
      const updatedReviews = [...review];
      updatedReviews.splice(index, 1);
      setReviews(updatedReviews);
    }
  };

  return (
    <div className="review_list_main">
      <Box bg="white" padding="1rem" radius="1rem">
        <SectionTitle title="Review List" />
        <div>
          <table className="review_table">
            <thead>
              <tr className="review_table_header">
                <th>ID</th>
                <th>Image</th>
                <th>User Name</th>
                <th>Review</th>
                <th>Post Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {review?.map((item, index) => {
                return (
                  <tr className="review_table_row" key={index}>
                    <td>{item?._id.substring(0, 8)}</td>
                    <td>
                      <img
                        className="review_table_image"
                        src={item?.data?.image}
                      />
                    </td>
                    <td>{item?.data?.name}</td>
                    <td className='admin_review_message' >{item?.data?.message}</td>
                    <td>{new Date(item?.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="review_table_actions">
                        <MdDeleteOutline
                          onClick={() => deleteHandler(index, item._id)}
                          className="review_table_action"
                        />
                        <SlEye className="review_table_action" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Box>
    </div>
  );
};

export default ReviewList;
