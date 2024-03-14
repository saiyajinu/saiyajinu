import React from "react";
import { Icon } from "react-icons-kit";
import { paperPlane } from "react-icons-kit/fa/paperPlane";
import { ic_phone } from "react-icons-kit/md/ic_phone";
import { ic_place } from "react-icons-kit/md/ic_place";
import FooterP from "./FooterP";

interface FooterContactProps {
  contactInfo: {
    title: string;
    address: string;
    phone: string;
    openingTime: string;
    email: string;
  };
}

const FooterContact = (props: FooterContactProps) => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="mb-2 text-lg font-medium">{props.contactInfo.title}</div>
      <div className="flex flex-row gap-4 items-center">
        <Icon icon={ic_place} size={26} />
        <FooterP text={props.contactInfo.address} />
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Icon icon={ic_phone} size={24} className="self-center" />
        <div>
          <FooterP text={props.contactInfo.phone} />
          <FooterP text={props.contactInfo.openingTime} />
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Icon icon={paperPlane} size={22} />
        <FooterP text={props.contactInfo.email} />
      </div>
    </div>
  );
};

export default FooterContact;
