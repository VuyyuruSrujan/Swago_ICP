import React, { useState } from "react";
import { GoogleOAuthProvider, googleLogout, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

export default function MailLogin(){
    const navigate  = useNavigate();

    return(
        <>
            <div>
                <GoogleLogin 
                   onSuccess={credentialResponse => {
                    var credentialResponseDecode = jwtDecode(credentialResponse.credential);
                    console.log(credentialResponseDecode.email);
                    // setMail(credentialResponseDecode.email)
                    navigate('/Wallet');
                }}
                   onError={ ()=> {
                    console.log("Login Failed");
                   } }
                />
            </div>
        </>
    );
}

