/*
File: ImprintSection.tsx
Description: This file contains the imprint section.
*/

import React from "react";

const ImprintSection = () => {
  const email: string = "support@maialabs.com";

  return (
    <section>
      <a id="imprint" className="anchor"></a>
      <div className="content-wrapper content-horizontal-padding py-[30px] w-full">
        <div className="flex flex-col max-w-[700px] justify-start mx-auto">
          <div className="flex flex-col gap-16">
            <div className="">
              <h1 className="text-3xl font-semibold mb-4">Contact</h1>
              <p className="text-primary">Get In Contact: </p>
              <p className="text-primary text-2xl mt-0">Email: {email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprintSection;
