/*
File: PrivacyPolicySection.tsx
Description: This file contains the privacy and policy section.
*/

import React from "react";

const PrivacyPolicySection = () => {
  return (
    <section>
      <a id="privacy-policy" className="anchor"></a>
      <div className="content-wrapper content-horizontal-padding py-[30px]">
        <div className="flex flex-col max-w-[700px] justify-center mx-auto">
          <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

          <h2 className="text-lg font-semibold mt-4 mb-2">Introduction</h2>
          <p>
            At our service, we are dedicated to safeguarding your privacy and
            ensuring that your personal information is handled responsibly and
            securely. This Privacy Policy outlines how we collect, use, and
            protect your personal data. By using our website and services, you
            agree to the practices detailed in this policy.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">
            Information We Collect
          </h2>

          <h3>Personal Information</h3>
          <p>We may collect and process the following personal information:</p>
          <ul className="list-disc pl-6">
            <li>None</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            Non-Personal Information
          </h3>
          <p>
            In addition to personal data, we may gather non-personal information
            about your website visit, including pages viewed, links clicked, and
            other site interactions. This data is aggregated and anonymized to
            analyze trends and enhance our website&apos;s performance.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">
            How We Use Your Information
          </h2>
          <p>
            We utilize your personal information for various purposes, including
            but not limited to:
          </p>
          <ul className="list-disc pl-6">
            <li>Providing and personalizing our services</li>
            <li>Responding to your inquiries and requests</li>
            <li>
              Sending promotional emails and newsletters (with the option to
              unsubscribe at any time)
            </li>
            <li>Conducting market research and analysis</li>
            <li>Improving our website and user experience</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-lg font-semibold mt-4 mb-2">Security</h2>
          <p>
            We are deeply committed to ensuring the security of your
            information. We have implemented appropriate physical, electronic,
            and managerial measures to safeguard and protect the data we collect
            online.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">Cookies</h2>
          <p>
            Our website employs cookies to enhance your browsing experience. You
            have the option to accept or decline cookies. While most web
            browsers automatically accept cookies, you can usually modify your
            browser settings to reject cookies if you prefer.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">
            Links to Other Websites
          </h2>
          <p>
            Our website may contain links to external websites of interest.
            However, please be aware that we do not have control over the
            content or privacy practices of these external sites. Therefore, we
            cannot be held responsible for the protection and privacy of your
            information while visiting such sites.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">Your Consent</h2>
          <p>
            By using our website, you consent to the terms outlined in this
            Privacy Policy.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may periodically update this Privacy Policy to reflect changes in
            our practices or for other operational, legal, or regulatory
            reasons. Any such modifications will become effective immediately
            upon being posted on this page.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">Contact Us</h2>
          <p>
            Should you have any questions or concerns about our Privacy Policy,
            please do not hesitate to contact us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
