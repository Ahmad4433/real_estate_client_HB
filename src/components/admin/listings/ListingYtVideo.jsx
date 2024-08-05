import React from "react";
import { ImYoutube2 } from "react-icons/im";
import "./listingYtVideo.css";
import Box from "../common/Box";
import SectionTitle from "../common/SectionTitle";
import FormPair from "../common/FormPair";
import Lable from "../common/Lable";
import Input from "../../ui/Input";
const ListingYtVideo = ({ onUrlChange, url }) => {
  return (
    <Box bg="white" padding="1rem" radius="10px">
      <div className="listing_yt_video_main">
        <SectionTitle title="Add Video" />
        <FormPair>
          <Lable>
            <ImYoutube2 style={{ fontSize: "2rem" }} />
            <Input
              name="videoUrl"
              value={url}
              onChange={onUrlChange}
              placeholder="Paste Video URL"
              type="url"
            />
          </Lable>
        </FormPair>
      </div>
    </Box>
  );
};

export default ListingYtVideo;
