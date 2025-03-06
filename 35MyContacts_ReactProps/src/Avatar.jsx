import React from "react";

function Avatar(props) {
    return(
        <img
          className="img circle-img"
          src={props.imgURL}
          alt="avatar_img"
        />
    );
}

export default Avatar;