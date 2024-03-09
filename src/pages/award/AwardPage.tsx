import React from "react";
import { AwardBox } from "@/components/award";
import { awards, certificates } from "@/data/awardList";
import { certifivation, trophyGif } from "@/assets/images";
import * as A from "./AwardPage.styled";

const AwardPage = () => {
  return (
    <A.AwardContainer>
      <section>
        <A.AwardTitle>
          <img src={trophyGif} alt="트로피gif" />
          <h2>수상내역</h2>
        </A.AwardTitle>
        <hr />
        <A.AwardInfo>
          <AwardBox data={awards} />
        </A.AwardInfo>
      </section>
      <section>
        <A.AwardTitle>
          <img src={certifivation} alt="인증gif" />
          <h2>자격증</h2>
        </A.AwardTitle>
        <hr />
        <A.AwardInfo>
          <AwardBox data={certificates} />
        </A.AwardInfo>
      </section>
    </A.AwardContainer>
  );
};

export default AwardPage;
