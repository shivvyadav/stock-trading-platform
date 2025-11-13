import React from "react";

const Profile = ({ Image, Name, Position, Bio }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center text-sm leading-7 text-neutral-700 md:text-base ml-12">
      <img
        src={Image}
        alt="Image"
        className="lg:size-74 size-44 md:size-60  rounded-full"
      />
      <h2>{Name}</h2>
      <p>{Position}</p>
      <p>{Bio}</p>
    </div>
  );
};

export default Profile;
