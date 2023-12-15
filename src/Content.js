import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Modalpop from './Modal2'
import Tab from './Tab'

function Content() {
    return (
        <section>
            <Routes>
                <Route path='/' element={<>첫페이지</>}></Route>
                <Route path='/com' element={<>회사소개</>}></Route>
                <Route path='/board' element={<>고객센터</>}></Route>
            </Routes>
            <Modalpop></Modalpop>
            <Tab></Tab>
        </section>

    )
}

export default Content
