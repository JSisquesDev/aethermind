import React from 'react';

import Introduction from '@/components/privacyPolicy/introduction/Introduction';
import InformationCollection from '@/components/privacyPolicy/informationCollection/InformationCollection';
import MethodsOfCollection from '@/components/privacyPolicy/methodsOfCollection/MethodsOfCollection';
import UseOfInformation from '@/components/privacyPolicy/useOfInformation/UseOfInformation';
import SharingInformation from '@/components/privacyPolicy/sharingInformation/SharingInformation';
import InformationProtection from '@/components/privacyPolicy/informationProtection/InformationProtection';
import UserRights from '@/components/privacyPolicy/userRights/UserRights';
import Cookies from '@/components/privacyPolicy/cookies/Cookies';
import ExternalLinks from '@/components/privacyPolicy/externalLinks/ExternalLinks';
import Changes from '@/components/privacyPolicy/changes/Changes';
import Contact from '@/components/privacyPolicy/contact/Contact';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Política de Privacidad</h1>
      <Introduction />
      <InformationCollection />
      <MethodsOfCollection />
      <UseOfInformation />
      <SharingInformation />
      <InformationProtection />
      <UserRights />
      <Cookies />
      <ExternalLinks />
      <Changes />
      <Contact />
    </div>
  );
};

export default PrivacyPolicy;
