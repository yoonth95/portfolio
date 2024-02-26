import React from "react";
import { ProfileArea, ProfileInfo, ProfileChart } from "@/components/profile";
import * as P from "./ProfilePage.styled";

const ProfilePage = () => {
  return (
    <P.ProfileContanier>
      <P.ProfileSection>
        <ProfileArea />
        <ProfileInfo />
      </P.ProfileSection>
      <ProfileChart />
    </P.ProfileContanier>
  );
};

export default ProfilePage;
