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
    description: [
      {
        title: "인공지능 온라인 시험 TestWith 개발 및 유지 보수",
        link: "https://testwith.io/kr",
        duration: "2022-01 ~ 2023-05",
        works: [
          "관리자 시험 생성 및 관리 시스템, 응시 인원 초대 및 관리 시스템 개발",
          "응시자 시험 및 결과 시스템 개발",
          "텍스트 에디터를 사용하여 이미지와 오디오 등의 간편한 시험 문제 생성 기능 개발",
          "MathJax를 활용하여 수식 에디터 개발",
          "AWS S3, SES API를 통한 파일 관리 및 대량 이메일 전송 기능 개발",
          "자체 문제 은행 페이지를 구축하여 관리자 별 문제 관리",
          "Server-Sent Events (SSE)를 이용한 ChatGPT API의 실시간 FAQ 답변 스트리밍 구현",
        ],
      },
      {
        title: "KMA 온라인 진단 시스템 LMS 개발 및 유지 보수",
        link: "https://kma.qualification.or.kr",
        duration: "2022-08 ~ 2023-05",
        works: [
          "수강생 및 관리자 시스템 기획부터 개발까지 진행",
          "video.js를 활용하여 동영상 진도율 추적 및 실시간 저장 등 다양한 제어 기능 구현",
          "pdf.js를 활용하여 pdf 렌더링과 암호화 생성 기능 개발",
          "canvas를 활용하여 수료증 및 자격증 템플릿 등록 및 저장 기능 개발",
        ],
      },
      {
        title: "인공지능 온라인 모의고사 시스템 개발 및 유지 보수",
        link: "https://testwith.io/mock_student/main/kr",
        duration: "2023-02 ~ 2023-05",
        works: ["토스페이먼츠 API를 통한 결제 시스템 구현", "클라이언트가 첨부한 PDF를 서버에서 암호화하여 사용자가 다운로드할 수 있도록 구현"],
      },
    ],
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
    start_date: "2021-03",
    end_date: "2021-08",
    title: "한경닷컴IT교육센터",
    subTitle: "",
    techStack: ["Python", "R", "MariaDB", "TensorFlow"],
    summary:
      "빅데이터 분석 과정에서 파이썬과 R을 사용하여 데이터 처리, 정제 및 시각화 기술 습득, 텐서플로우를 활용한 인공지능 모델 구축에 대한 학습으로 대용량 데이터셋 분석과 머신러닝, 딥러닝 알고리즘 적용하는 교육 진행",
  },
];

export { careerYear, careerData };
