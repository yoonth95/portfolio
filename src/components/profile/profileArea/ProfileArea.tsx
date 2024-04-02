import { NavLink } from "react-router-dom";
import { LazyImage } from "@/components/common";
import { profileImg } from "@/assets/images";
import { iconList, detailList } from "@/data/profileInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as P from "./ProfileArea.styled";

const ProfileArea = () => {
  return (
    <>
      <P.ProfileResizeSection>
        <P.ProfileResizeImg>
          <img src={profileImg} alt="프로필 이미지" />
        </P.ProfileResizeImg>
        <P.ProfileResizeInfo>
          <P.ResizeInfoName>
            <h2>윤태현</h2>
            <h3>Web developer</h3>
          </P.ResizeInfoName>
          <P.ResizeInfoContacts>
            {iconList.map((item) => (
              <div className="link" key={item.text}>
                <NavLink to={item.link} target="_blank">
                  <LazyImage src={item.icon} alt={item.text} />
                </NavLink>
              </div>
            ))}
          </P.ResizeInfoContacts>
        </P.ProfileResizeInfo>
      </P.ProfileResizeSection>

      <P.ProfileAreaSection>
        <P.ProfileImg src={profileImg} alt="프로필 이미지"></P.ProfileImg>
        <P.LinkList>
          {iconList.map((item) => (
            <NavLink key={item.text} to={item.link} target="_blank">
              <LazyImage classNames="iconHover" src={item.icon} alt={item.text} />
            </NavLink>
          ))}
        </P.LinkList>
        <P.BoxList>
          {detailList.map((item) => (
            <P.Box key={item.detail}>
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
    </>
  );
};

export default ProfileArea;
