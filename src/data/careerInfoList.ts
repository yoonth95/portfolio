const careerYear = [2020, 2021, 2022, 2023, 2024];

const careerData = [
  {
    type: "education",
    start_date: "2014-03",
    end_date: "2021-02",
    title: "한서대학교",
    subTitle: "항공전자공학과",
    major: "항공전자공학 전공",
    minor: "항공기계학 부전공",
    score: "3.83 / 4.5 학점",
  },
  {
    type: "experience",
    start_date: "2022-01",
    end_date: "2023-05",
    title: "(주)스마트디아그노시스",
    subTitle: "연구개발팀 / 연구원",
    techStack: ["JavaScript", "Flask", "MySQL", "AWS"],
  },
  {
    type: "active",
    start_date: "2021-03",
    end_date: "2021-08",
    title: "한경닷컴IT교육센터",
    subTitle: "",
    techStack: ["Python", "R", "MariaDB", "TensorFlow"],
    summary:
      "빅데이터 분석 과정에서 파이썬과 R을 사용하여 데이터 처리, 정제 및 시각화 기술 습득, 텐서플로우를 활용한 인공지능 모델 구축에 대한 학습으로 대용량 데이터셋 분석과 머신러닝, 딥러닝 알고리즘 적용하는 교육 진행",
  },
  {
    type: "active",
    start_date: "2023-06",
    end_date: "2023-08",
    title: "[유데미X웅진씽크빅] React 프로젝트 캠프",
    subTitle: "",
    techStack: ["React", "Redux toolkit"],
    summary: "역량 강화 코스를 통해 서비스 기획, React 개념 / 문법, 심화 과정을 습득하고, 프로젝트 코스를 통한 기업 실무 프로젝트 진행",
  },
  {
    type: "active",
    start_date: "2023-10",
    end_date: "2023-12",
    title: "멋쟁이사자처럼 프론트엔드 스쿨 (심화)",
    subTitle: "",
    techStack: ["React", "TypeScript", "Zustand"],
    summary: "프론트엔드 심화 교육 과정으로 React, TypeScript를 주로 사용하여 프로젝트 진행하는 단기 교육 과정",
  },
];

export { careerYear, careerData };
