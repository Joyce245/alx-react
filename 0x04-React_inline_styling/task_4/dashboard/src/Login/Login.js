import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export default function Login() {
    return (
        <div className={css(styles.AppBody)}>
            <p>
                Login to access the full dashboard
            </p>
            <form className={css(styles.AppBodyForm, styles.small)}>
                <div>
                    <label htmlFor="email" className={css(styles.AppBodyLabel)}>
                        Email
                    </label>
                    <input type="email" name="email" className={css(styles.AppBodyInput)}/>
                </div>
                <div>
                    <label htmlFor="password" className={css(styles.AppBodyLabel)}>
                        Password
                    </label>
                    <input type="password" name="password" className={css(styles.AppBodyInput)}/>
                </div>
                <button type="submit" className={css(styles.AppBodyButton)}>OK</button>
            </form>
        </div>
    )
}

const styles = StyleSheet.create({
    AppBody: {
        padding: '36px 24px'
    },
    AppBodyInput: {
        padding: '0 16px 0 8px',
        border: '1px solid #D3D3D3',
        borderRadius: '3px'
    },
    AppBodyLabel: {
        marginRight: '5px'
    },
    AppBodyForm: {
        display: 'flex',
        gap: '1rem'
    },
    AppBodyButton: {
        border: '1px solid #D3D3D3',
        borderRadius: '3px',
        background: 'transparent',
        width: 50
    },
    small: {
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
        }
    }
})