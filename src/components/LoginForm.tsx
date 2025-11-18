import React from 'react';

export const LoginForm = () => (
  <form action="/signin" method="post" className="proceed maskable" autoComplete="off" name="login" noValidate>
    <div id="passwordSection" className="clearfix splitEmail showHideButtonForEligibleBrowser">
      <div id="splitEmailSection" className="splitPhoneSection splitEmailSection">
        <div className="textInput" id="login_emaildiv">
          <div className="fieldWrapper">
            <input 
              id="email" 
              name="login_email" 
              type="email" 
              className="hasHelp validateEmpty" 
              required 
              autoComplete="username" 
              placeholder="E-Mail-Adresse oder Handynummer"
            />
            <label htmlFor="email" className="fieldLabel">E-Mail-Adresse oder Handynummer</label>
          </div>
        </div>
      </div>

      <div className="textInput" id="login_passworddiv">
        <div className="fieldWrapper">
          <input 
            id="password" 
            name="login_password" 
            type="password" 
            className="hasHelp validateEmpty pin-password" 
            required 
            placeholder="Passwort"
          />
          <label htmlFor="password" className="fieldLabel">Passwort</label>
          <button type="button" className="showPassword hide show-hide-password">Anzeigen</button>
          <button type="button" className="hidePassword hide show-hide-password">Ausblenden</button>
        </div>
        <a href="#" className="recoveryOption forgotPassword">Passwort vergessen?</a>
      </div>
    </div>

    <div className="actions">
      <button className="button actionContinue" type="submit" id="btnLogin" name="btnLogin" value="Login">
        Einloggen
      </button>
    </div>

    <div id="signupContainer" className="signupContainer">
      <div className="loginSignUpSeparator">
        <span className="textInSeparator">oder</span>
      </div>
      <button type="button" className="button secondary" id="createAccount">
        Neu anmelden
      </button>
    </div>
  </form>
);