/*
File: LegalPage.tsx
Description: This shows legal informations for the application.
*/

import ImprintSection from "@/components/legal/ImprintSection";
import PrivacyPolicySection from "@/components/legal/PrivacyPolicySection";
import TermsOfUseSection from "@/components/legal/TermsOfUseSection";

export default function LegalPage() {
  return (
    <main>
      <div className="bg-white py-12">
        <ImprintSection />
        <PrivacyPolicySection />
        <TermsOfUseSection />
      </div>
    </main>
  );
}
