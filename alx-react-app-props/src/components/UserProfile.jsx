import React from "react";
import UserInfo from "./UserInfo";
import UserContext from "./UserContext";
function ProfilePage() {
  const userData = useContext(UserContext);
  return (
    <>
      <UserInfo />
      <div>
        <UserInfo />
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    </>
  );
}

export default UserProfile;
