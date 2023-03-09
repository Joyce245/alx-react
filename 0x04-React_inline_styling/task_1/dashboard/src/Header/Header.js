import React from 'react';
import holbertonLogo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite/no-important';

export default function Header() {
    return (
        <header className={css(styles.AppHeader)}>
            <img src={holbertonLogo} alt="holberton-logo" className={css(styles.AppHeaderImg)}></img>
            <h1 className={css(styles.AppHeaderH1)}>School dashboard</h1>
        </header>
    );
}

const styles = StyleSheet.create({
    AppHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        borderBottom: '3px solid #e1484c'
    },
    AppHeaderImg: {
        width: 150
    },
    AppHeaderH1: {
        color: '#e1484c'
    }
})