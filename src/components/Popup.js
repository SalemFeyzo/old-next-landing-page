import React, { useEffect } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

const Popup = () => {
  useEffect(() => {
    // Cookies.set("test", "nice");
  }, []);

  return (
    <div>
      <CookieConsent
        // onAccept={(byScroll) => {
        //   alert(`yay! \n by scrolling? ${byScroll}`);
        // }}
        debug={false}
        enableDeclineButton
        // acceptOnScroll
        // acceptOnScrollPercentage={80}
        declineButtonText="Decline"
        // onDecline={() => {
        //   alert("nay!");
        // }}
        buttonText="Accept"
        cookieName="TECHOMODA"
        style={{ background: "#2B373B" }}
        expires={150}
      >
        We use cookies to enable the proper functioning and security of our
        website, and to offer you the best possible user experience.
      </CookieConsent>
    </div>
  );
};

export default Popup;
