import React from "react";
import Script from "next/script";

const contact = () => {
  return (
    <div>
      <Script id="alert">
        {` alert("Welcome to conctact")`}
      </Script>
    </div>
  )
};

export default contact;

export const metadata = {
  title: "Contact Facebook - Connect with the World",
  description: "This is `Contact` facebook, and we can connect with world",
};
