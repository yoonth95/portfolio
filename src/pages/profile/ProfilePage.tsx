import React from "react";
import { ProfileArea, ProfileInfo } from "@/components/profile";
import * as P from "./ProfilePage.styled";

const ProfilePage = () => {
  return (
    <P.ProfileContanier>
      <P.ProfileSection>
        <ProfileArea />
        <ProfileInfo />
      </P.ProfileSection>
    </P.ProfileContanier>
  );
};

export default ProfilePage;
