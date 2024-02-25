import { javascript, typescript, react, nodejs, flask, mysql, aws, firebase } from "@/assets/images";

const stackInfoList = [
  {
    name: "프론트엔드",
    stackList: [
      {
        stack: "JavaScript",
        img: javascript,
        description: {
          title: "Vanilla JS를 활용하여 다양한 웹 애플리케이션을 개발한 경험이 풍부합니다.",
          text: [
            "오디오 및 비디오 플레이어, 텍스트 및 수식 에디터, 차트 및 수료증 생성기, 엑셀 및 PDF 렌더링 및 생성 등을 순수 자바스크립트로 구현해봤습니다.",
            "이러한 프로젝트를 통해 DOM 조작, 이벤트 처리, 비동기 프로그래밍 등 자바스크립트의 핵심 개념을 더 잘 이해하려고 하며, 사용자 경험을 우선시하는 웹 페이지 제작에 점점 익숙해지고자 합니다.",
            "코드의 가독성과 유지보수를 중점으로 두어, 시간이 지나도 누구나 쉽게 이해할 수 있도록 작성하는 데 노력하고 있습니다.",
          ],
        },
      },
      {
        stack: "React",
        img: react,
        description: {
          title: "React 기반의 소 · 중규모 프로젝트 경험에 익숙합니다.",
          text: [
            "컴포넌트의 재사용성을 항상 고려하면서 코드를 구현합니다.",
            "가장 좋은 코드는 무엇인지 어떻게 하면 최적화할 수 있는지 관련 글이나 프로젝트를 자주 봅니다.",
            "Redux, Zustand 클라이언트 및 Tanstack-Query 서버 상태 관리를 개선하기 위해 상태 관리 기법을 적극적으로 활용하고 공부하고 있습니다.",
          ],
        },
      },
      {
        stack: "TypeScript",
        img: typescript,
        description: {
          title: "어떠한 프로젝트를 진행할 때, 타입스크립트를 효율적으로 사용하려고 노력합니다.",
          text: [
            "데이터베이스를 설계하거나 API관련 협업을 할 때, 데이터 타입을 먼저 정의하려고 노력합니다.",
            "esLint를 사용하여 any, unknown 타입은 지양하려고 합니다.",
            "아직 익숙하지 않지만 관련 글이나 유튜브 등을 통해 계속 배워 나가고 있습니다.",
          ],
        },
      },
    ],
  },
  {
    name: "백엔드",
    stackList: [
      {
        stack: "NodeJS",
        img: nodejs,
        description: {
          title: "소 · 중규모 프로젝트의 서버 구축 경험에 익숙합니다.",
          text: [
            "JWT를 활용한 인증 시스템에 능숙합니다.",
            "Multer와 AWS S3를 활용하여 이미지 업로드를 구현하고, 이미지 압축 기술을 적용하여 파일 크기를 최적화 경험이 있습니다.",
            "MySQL을 통합하여 데이터 처리를 구현하고, 트랜잭션 기능을 활용해 데이터 일관성 및 안전성을 높이는데 노력하는 중입니다.",
          ],
        },
      },
      {
        stack: "Flask",
        img: flask,
        description: {
          title: "실제 서비스 되고있는 기업 프로젝트의 서버 구축 경험이 있습니다.",
          text: [
            "멀티 스레드를 통한 메일 전송 최적화를 구현해봤습니다.",
            "예약 메일 발송이나 SSE를 이용한 실시간 단방향 데이터 전송 등을 구현해봤습니다.",
          ],
        },
      },
      {
        stack: "MySQL",
        img: mysql,
        description: {
          title: "다양한 프로젝트에서 데이터베이스의 전체 생명 주기 개발에 참여한 경험이 있습니다.",
          text: [
            "데이터 무결성을 보장하고 쿼리 성능을 최적화하기 위해 ERD 설계에 노력하고 있습니다.",
            "ERD 설계 경험을 바탕으로 데이터 구조를 명확하게 정의하고 팀 협업을 강화했습니다.",
            "배포 전, MySQL Workbench의 원격 설정을 통해 팀원들과의 원활한 데이터베이스 접근 및 협업을 용이하게 진행하였습니다.",
          ],
        },
      },
    ],
  },
  {
    name: "클라우드",
    stackList: [
      {
        stack: "AWS",
        img: aws,
        description: {
          title: "소 · 중규모 프로젝트 배포 경험 및 여러 서비스 이용",
          text: [
            "AWS S3, CloudFront, Route 53을 활용하여 정적 웹사이트 호스팅 경험이 있습니다.",
            "EC2와 Load Balancer를 통한 API 서버 환경 구축 및 RDS를 이용한 데이터베이스 관리 경험이 있습니다.",
            "AWS S3를 이용한 이미지 호스팅 및 관리, SES를 통한 이메일 서비스 구현 및 운영 경험이 있습니다.",
          ],
        },
      },
      {
        stack: "Firebase",
        img: firebase,
        description: {
          title: "간단한 소규모 프로젝트 배포 경험이 있습니다.",
          text: ["소규모 프로젝트의 배포 및 인증 서비스, 데이터베이스 관리 경험이 있습니다."],
        },
      },
    ],
  },
];

export { stackInfoList };
