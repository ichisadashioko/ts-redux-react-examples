import React from 'react'

export class Login extends React.Component {
    render() {
        return (
            <form>
                <label>
                    Username:
                    <input type='text' />
                </label>
            </form>
        )
    }
}