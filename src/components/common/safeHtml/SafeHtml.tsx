import React from "react";
import DOMPurify from "dompurify";

interface SafeHtmlProps {
  html: string;
}
const SafeHtml: React.FC<SafeHtmlProps> = ({ html }) => {
  // 사용자 입력 HTML을 정화
  const cleanHTML = DOMPurify.sanitize(html);

  // 정화된 HTML을 dangerouslySetInnerHTML을 통해 렌더링
  // React에서 HTML 문자열을 직접 DOM에 삽입하려면 dangerouslySetInnerHTML을 사용해야 함
  return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
};

export default SafeHtml;
