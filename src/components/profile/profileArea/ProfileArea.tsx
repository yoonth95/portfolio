import { NavLink } from "react-router-dom";
import { profileImg } from "@/assets/images";
import { iconList, detailList } from "@/data/profileInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as P from "./ProfileArea.styled";

const ProfileArea = () => {
  return (
    <P.ProfileAreaSection>
      <P.ProfileImg src={profileImg} alt="프로필 이미지"></P.ProfileImg>
      <P.LinkList>
        {iconList.map((item) => (
          <NavLink to={item.link} target="_blank">
            <img src={item.icon} alt={item.text} />
          </NavLink>
        ))}
      </P.LinkList>
      <P.BoxList>
        {detailList.map((item) => (
          <P.Box>
            <P.Icon>
              <FontAwesomeIcon icon={item.icon} />
            </P.Icon>
            <P.Details>
              <p>{item.detail}</p>
            </P.Details>
          </P.Box>
        ))}
      </P.BoxList>
    </P.ProfileAreaSection>
  );
};

export default ProfileArea;
