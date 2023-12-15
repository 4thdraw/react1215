import React, { useState } from 'react'
import db from './data/db.json'


function Tab() {
    const [tabnum, settabnum] = useState(0);
    return (
        <section id="tabsection">
            <div >
                <ul className='d-flex'>
                    {
                        db.tab.map((v, i) => {

                            return (
                                <li id={`tablist${i}`}>
                                    <h3
                                        className={`h3${i}`}
                                        onClick={() => { settabnum(i) }}
                                        style={{ color: tabnum === i ? "red" : null }}
                                    >{v.tabtext}</h3>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    db.tab[tabnum] &&
                    <div>
                        <ul>
                            {

                                db.tab[tabnum].tabul.map((vv, ii) => <li><a href={vv.href}>
                                    {vv.atext}
                                    {
                                        vv.imgsrc && <img src={vv.imgsrc}></img>
                                    }

                                </a></li>)

                            }

                        </ul>
                    </div>
                }
            </div>
        </section >
    )
}

export default Tab
