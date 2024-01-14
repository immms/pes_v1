import { useState, useEffect } from 'react';

// 문제 요약칼럼 get
//function getProblem() {

    
//     useEffect{()=>{
//         fetch('http://localhost:3000/api/problem/${problemId}/simple')
//         .then()
//     }}

//     const uri = `api/problem/${problemId}/simple`;
//     fetch(url + uri, {
//         method: "GET",
//         headers: {
//             // 'Authorization': storageToken
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             console.log("서버응답 : ", response); // 토큰을 콘솔에 출력
//             throw new Error("데이터 가져오기 실패: " + response.status + " " + response.statusText);
//         }
//         return response.json(); // JSON 형식의 응답 데이터를 파싱
//     })
//     .then(data => {
//         //문제id
//         document.querySelector(".solution_num").textContent = "문제id: " + data.problemId;
//         //문제제목
//         document.querySelector(".solution_title").textContent = "문제제목: " + data.problemTitle;
//         //문제점수
//         //document.querySelector(".problem_detail").textContent = "문제점수: " + data.problemContent;
//     })
//     .catch(error => {
//         console.error("데이터 가져오기 실패:", error);
//     });
// }



// 풀이 목록 get


//getProblem(serverUrl)

