import React, { useState } from 'react'
import db from './data/db.json'


function Tab() {
    const [tabnum, settabnum] = useState(0);
    // useState는 값의 변경되면 화면 컴포넌트 랜더링을 처리

    return (
        <section id="tabsection">
            <div className='d-flex'>
                {
                    db.tab.map((v, i) => {
                        const colorvar = tabnum === i ? "red" : null;
                        // colorvar의 값은 red 이거나 null로 세팅
                        // i는 맵실행을 구분하는 역활 key값에 넣어서 인식했던 이유가 똑같음
                        return (
                            <>
                                <h3
                                    className={`h3${i}`}
                                    onClick={() => { settabnum(i) }}
                                    style={{ color: colorvar }}
                                >{v.tabtext}</h3>
                                {
                                    //하위맵
                                    v.tabul.map((vv, ii) => {
                                        return ii + "번의 데이터는 " + vv.atext
                                    })
                                }
                            </>
                        )
                    })
                }
            </div>
        </section >
    )
}

export default Tab
