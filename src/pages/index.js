import React from "react";

import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import Feature from "../sections/feature";
import CoreFeature from "../sections/core-feature";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import TeamSection from "../sections/team-section";
import TestimonialCard from "../sections/testimonial";

export default function IndexPage() {
  return (
    <>
      <Banner />
      <KeyFeature />
      <ServiceSection />
      <Feature />
      <CoreFeature />
      <WorkFlow />
      <Package />
      <TeamSection />
      <TestimonialCard />
    </>
  );
}
