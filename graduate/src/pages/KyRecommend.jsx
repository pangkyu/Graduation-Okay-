import react from 'react';
import '../css/KyRecommend.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import KyRecommendRow from '../components/KyRecommendRow';
import KyRecommendRow2 from '../components/KyRecommendRow2';

// 교양과목을 추천해주는 페이지
function KyRecommend() {
    const [inputData, setInputData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                'http://localhost:8089/KyRecommend/',
            );
            // const response = await axios.get(
            //     'http://13.125.25.62:8089/KyRecommend/',
            // );
            setInputData(response.data);
        };
        fetchData();
    }, []);

    return (
        <>
            <main>
                <div className="main">
                    {/* <div className="title">✨인기 교양 추천✨</div> */}
                    <div className="title">
                        ( 교양 과목 찾기 : ctrl+f + 과목명 )
                    </div>
                    <br />
                    <br />
                    <div className="starOrder">
                        <button id="btnStarOrder">
                            {' '}
                            ⭐에브리타임 별점순⭐
                        </button>
                        <KyRecommendRow2></KyRecommendRow2>
                    </div>
                    <button id="btnNumOrder"> ☝수강 횟수 순✌</button> <br />
                    <div className="KyTableWrapper">
                        <table className="KyTable">
                            <tr className="menu">
                                <th className="grade_table_th rank_width">
                                    순위
                                </th>
                                <th className="grade_table_th name_width">
                                    과목명
                                </th>
                                <th className="grade_table_th ky_width">
                                    교양 인재상
                                </th>
                                <th className="grade_table_th core_width">
                                    핵심 역량
                                </th>
                                <th className="grade_table_th gradenum_width">
                                    학점
                                </th>
                                <th className="grade_table_th num_width">
                                    수강횟수
                                </th>
                            </tr>
                            {inputData.map((e) => {
                                return <KyRecommendRow KyRecommend={e} />;
                            })}
                            <br />
                            <br />
                        </table>
                    </div>
                </div>
                <br />
                <br /> <br />
                <br />
            </main>
        </>
    );
}

export default KyRecommend;
