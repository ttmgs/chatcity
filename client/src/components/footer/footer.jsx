import React from "react";
import "../styles/styles.css";


function Footer(){
  return(


    <div className="footer">
    <span className="text-muted">      
    <a href="https://app.termly.io/document/privacy-policy/8f6fd013-da4c-4f17-a4b8-00af5a550e57" style={{color: "black"}}>Private Policy  </a>
</span>

<span className="text-muted">
      <a href="https://app.termly.io/document/terms-of-use-for-ios-app/44b04866-c38a-4d9c-8a07-0783b4875259" style={{color: "black"}}> &nbsp; Terms and Conditions</a>
    </span>

    <span className="text-muted">
      <a href="https://app.termly.io/document/disclaimer/ae2e9ef0-f66f-4dc6-9f3a-aa5e9a3a00b9" style={{color: "black"}}> &nbsp; Disclaimer</a>
    </span>
</div>



  )
}

export default Footer;