import React from 'react';
import './style.css'


const LoginInput = (props) => {
    return (
        <div id="login">
        <div class="row">
            <form class="col s6">
                <div class="row">
                    <div class="input-field col s6">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" class="validate" />
                        <label for="icon_prefix" id="username">Username</label>
                    </div>
                    <div class="input-field col s6">
                        <i class="material-icons prefix">lock</i>
                        <input id="icon_telephone" type="tel" class="validate" />
                        <label for="icon_telephone" id="password">Password</label>
                    </div>
                    <button class="btn waves-effect waves-dark purple-text text-darken-2 card-panel purple lighten-2" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default LoginInput