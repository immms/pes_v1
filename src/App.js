/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Solution from './component/Solution';
import Problem from './component/Problem';
import Main from './component/Main';

import { useState, useEffect } from 'react';

function App() {
  const [problemData, setProblemData] = useState(null); // 상태 변수 추가

  useEffect(() => {
    // 컴포넌트가 마운트될 때 GET 요청을 보내도록 useEffect 사용
    const fetchData = async () => {
      try {
        const response = await fetch('https://52.79.205.96:443/api/problem/${problemId}/simple');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProblemData(data); // 응답 데이터를 상태 변수에 저장
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // fetchData 함수 호출

  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행






  return (
    <div className="App">

      <Header></Header>

      {/* problemData가 있을 때만 Problem 컴포넌트를 렌더링 */}
      {problemData && <Problem data={problemData}></Problem>}

    </div>
  );
}


export default App;
