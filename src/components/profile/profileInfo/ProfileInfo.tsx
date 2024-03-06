import React from "react";
import Slick from "@/components/slick/Slick";
import { useProfileInfo } from "@/hooks";
import { stackInfoList } from "@/data/stackInfoList";
import * as P from "./ProfileInfo.styled";

const ProfileInfo: React.FC = () => {
  const { state, dispatch, slideIndex, setSlideIndex } = useProfileInfo();
  const { hoveredItem, filterItem } = state;

  const slickSetting = {
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setSlideIndex(next),
    afterChange: (index: number) =>
      dispatch({ type: "SET_HOVERED_ITEM", payload: { hoveredItem: stackInfoList[index].stackList[0].stack, slideIndex: index } }),
  };

  const onMouseOver = (stack: string) => {
    if (hoveredItem !== stack) dispatch({ type: "SET_HOVERED_ITEM", payload: { hoveredItem: stack, slideIndex } });
  };

  return (
    <P.ProfileInfoSection>
      <P.ProfileInfoTitle>
        <h2>👋 안녕하세요, 프론트엔드 개발자 윤태현입니다!</h2>
      </P.ProfileInfoTitle>
      <P.ProfileIntro>
        <p>새로운 기술을 향한 도전을 주저하지 않으며, 사용자 중심의 혁신을 추구합니다.</p>
        <br />
        <p>웹 프론트엔드 개발을 위주로 하며, 백엔드 기술도 겸비한 개발자입니다!</p>
      </P.ProfileIntro>
      <hr />
      <P.ProfileTechStack>
        <P.ProfileTechStackTitle>
          <h2>Tech Stack</h2>
          <span>{stackInfoList[slideIndex].name}</span>
        </P.ProfileTechStackTitle>
        <P.ProfileSkill>
          <Slick slickSetting={slickSetting}>
            {stackInfoList.map((slideItems, index) => (
              <P.SlickList key={index}>
                {slideItems.stackList.map((item) => (
                  <P.SlickItem key={item.stack} onMouseOver={() => onMouseOver(item.stack)} $isHovered={hoveredItem === item.stack}>
                    <img src={item.img} alt="아이콘" />
                    <p>{item.stack}</p>
                  </P.SlickItem>
                ))}
              </P.SlickList>
            ))}
          </Slick>
        </P.ProfileSkill>
        <P.ProfileSkillDetail>
          <P.ProfileInfoTitle>{filterItem.description.title}</P.ProfileInfoTitle>
          <ul>
            {filterItem.description.text.map((text, index) => (
              <P.DetailLi key={index}>{text}</P.DetailLi>
            ))}
          </ul>
        </P.ProfileSkillDetail>
      </P.ProfileTechStack>
    </P.ProfileInfoSection>
  );
};

export default ProfileInfo;
