/*
File: TermsOfUseSection.tsx
Description: This file contains the terms of use section.
*/

import React from "react";

const TermsOfUseSection = () => {
  const websiteName = "MaiaLabs";

  return (
    <section>
      <a id="terms-of-use" className="anchor"></a>
      <div className="content-wrapper content-horizontal-padding py-[30px]">
        <div className="flex flex-col max-w-[700px] justify-center mx-auto">
          <h1 className="text-3xl font-semibold mb-6">Terms of Use</h1>

          <h2 className="text-lg font-semibold mt-4 mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using this website, you agree to be bound by these
            Terms of Use, all applicable laws, and regulations, and agree that
            you are responsible for compliance with any applicable local laws.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on {websiteName}&apos;s website
            for personal, non-commercial transitory viewing only. This is the
            grant of a license, not a transfer of title, and under this license,
            you may not:
          </p>
          <ul className="list-disc pl-6">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              {websiteName}&apos;s website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transfer the materials to another person or mirror the materials
              on any other server.
            </li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by {websiteName} at any
            time. Upon terminating your viewing of these materials or upon the
            termination of this license, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">3. Disclaimer</h2>
          <p>
            The materials on {websiteName}&apos;s website are provided on an
            &apos;as is&apos; basis. {websiteName} makes no warranties,
            expressed or implied, and hereby disclaims and negates all other
            warranties, including without limitation, implied warranties or
            conditions of merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of
            rights.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">4. Limitations</h2>
          <p>
            In no event shall {websiteName} or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) anyarising out of the use
            or inability to use the materials on {websiteName}&apos;s website,
            even if {websiteName} or a {websiteName} authorized representative
            has been notified orally or in writing of the possibility of such
            damage. Because some jurisdictions do not allow limitations on
            implied warranties, or limitations of liability for consequential or
            incidental damages, these limitations may not apply to you.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">
            5. Revisions and Errata
          </h2>
          <p>
            The materials appearing on {websiteName}&apos;s website could
            include technical, typographical, or photographic errors.{" "}
            {websiteName} does not warrant that any of the materials on its
            website are accurate, complete, or current. {websiteName} may make
            changes to the materials contained on its website at any time
            without notice. {websiteName} does not, however, make any commitment
            to update the materials.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">6. Links</h2>
          <p>
            {websiteName} has not reviewed all of the sites linked to its
            website and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by{" "}
            {websiteName} of the site. Use of any such linked website is at the
            user&apos;s own risk.
          </p>

          <h2 className="text-lg font-semibold mt-4 mb-2">
            7. Site Terms of Use Modifications
          </h2>
          <p>
            {websiteName} may revise these terms of use for its website at any
            time without notice. By using this website, you are agreeing to be
            bound by the then-current version of these Terms and Conditions of
            Use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUseSection;
