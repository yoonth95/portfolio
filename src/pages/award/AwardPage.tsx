import { AwardBox } from "@/components/award";
import { LazyImage } from "@/components/common";
import { awards, certificates } from "@/data/awardList";
import { certifivation, trophyGif } from "@/assets/images";
import * as A from "./AwardPage.styled";

const AwardPage = () => {
  return (
    <A.AwardContainer>
      <section>
        <A.AwardTitle>
          <LazyImage src={trophyGif} alt={"트로피gif"} />
          <h2>수상내역</h2>
        </A.AwardTitle>
        <hr />
        <A.AwardInfo>
          <AwardBox data={awards} type={"award"} />
        </A.AwardInfo>
      </section>
      <section>
        <A.AwardTitle>
          <LazyImage src={certifivation} alt={"인증gif"} />
          <h2>자격증</h2>
        </A.AwardTitle>
        <hr />
        <A.AwardInfo>
          <AwardBox data={certificates} type={"certificates"} />
        </A.AwardInfo>
      </section>
    </A.AwardContainer>
  );
};

export default AwardPage;
