import React, { useEffect } from "react";
import axios from "axios";
import * as P from "./ProfileChart.styled";

const ProfileChart: React.FC = () => {
  const fetchUserCommits = async (userName: string, repoName: string) => {
    const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}/commits`);
    return response.data;
  };

  // 사용자가 속한 조직 목록 가져오기
  const fetchUserOrganizations = async (username: string) => {
    const response = await axios.get(`https://api.github.com/users/${username}/orgs`);
    return response.data; // 조직 목록 반환
  };

  // 조직의 저장소 목록 가져오기
  const fetchOrganizationRepos = async (orgName: string) => {
    const response = await axios.get(`https://api.github.com/orgs/${orgName}/repos`);
    return response.data; // 저장소 목록 반환
  };

  useEffect(() => {
    const testAPI = async () => {
      const test = await fetchUserCommits("yoonth95", "portfolio");
      console.log(test);
    };

    const test2API = async () => {
      const test2 = await fetchUserOrganizations("yoonth95");
      console.log(test2);
    };
    // testAPI();
    // test2API();
  }, []);

  return <P.ProfileChartSection></P.ProfileChartSection>;
};

export default ProfileChart;
