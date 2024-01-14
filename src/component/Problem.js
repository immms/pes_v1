import React from 'react';

function Problem() {
    return (
    
        <SolutionBar></SolutionBar>

    )
}



// 문제 제목 컴포넌트
function SolutionBar(){
    return(
    <div className="solution_container">
        <div className="solution_bar">
            {/* 타이틀 */}
            <div className="solution">
                <div className="solution_num">1001</div>
                <div className="solution_title">Analysis를 인당 2개씩 채워오세요!</div>
                <div className="solution_score">점수 : 100점</div>
            </div>
        </div>
    </div>
  )
}

export default Problem;
