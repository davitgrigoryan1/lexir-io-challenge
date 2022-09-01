import React from "react";
import Image from "next/image";
import UserIcon from "../../assets/images/navbar/user.png";

interface Props {
  username: string;
}

const UserProfile: React.FC<Props> = ({ username }) => {
  return (
    <div className="flex items-center">
      <Image src={UserIcon} height={20} width={20} />
      <span className="ml-[9px] cursor-pointer">Hello, {username}</span>
    </div>
  );
};

export default UserProfile;
