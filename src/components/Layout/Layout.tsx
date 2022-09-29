import React from 'react';
import s from './Layout.module.css';

type PropsType ={
    children: React.ReactNode
}

const Layout: React.FC<PropsType> = (props) =>{

    return (
    <main className={s.layout}>
        {props.children}
    </main>
    )
}

export default Layout;