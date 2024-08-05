// import React from "react";
// import "./propertyVideo.css";
// const PropertyVideo = ({ detail }) => {

//   console.log(detail?.data?.videoUrl)


//   return (
//     <div className="property_video_main">
//       <iframe
//         width="100%"
//         height={window.outerWidth < 430 ? "200" : "400"}
//         src={detail?.data?.videoUrl}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default PropertyVideo;


import React from "react";
import "./propertyVideo.css";

const PropertyVideo = ({ detail }) => {
  const videoUrl = detail?.data?.videoUrl;

  // Extract video ID from YouTube URL
  const getVideoId = (url) => {
    const match = url?.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|v\/|e\/|u\/\w\/|embed\/|watch\?v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);

  return (
    <div className="property_video_main">
      {videoId ? (
        <iframe
          width="100%"
          height={window.outerWidth < 430 ? "200" : "400"}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No video available</p>
      )}
    </div>
  );
};

export default PropertyVideo;

