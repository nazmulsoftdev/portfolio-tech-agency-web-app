import React from "react";

import DocumentTextOne from "./DocumentTextOne";
import DocumentTextTwo from "./DocumentTextTwo";
import DocumentTextThree from "./DocumentTextThree";
import DocumentTextFour from "./DocumentTextFour";
import DocumentTextFive from "./DocumentTextFive";
import DocumentTextSix from "./DocumentTextSix";
import DocumentTextSaven from "./DocumentTextSaven";
function AttentionDocumentText() {
  return (
    <section className="mt-10 md:mt-20 lg:mt-20">
      {/* Document Text 1 */}
      <DocumentTextOne />
      {/* Document Text 2 */}
      <DocumentTextTwo />
      {/* Document Text 3 */}
      <DocumentTextThree />
      {/* Document Text 4 */}
      <DocumentTextFour />
      {/* Document Saven */}
      <DocumentTextSaven />
      {/* Document Text 5 */}
      <DocumentTextFive />
      {/* Document Text 6 */}
      <DocumentTextSix />
    </section>
  );
}

export default AttentionDocumentText;
