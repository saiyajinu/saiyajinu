import React from "react";
import { Icon } from "react-icons-kit";
import { paperPlane } from "react-icons-kit/fa/paperPlane";
import { ic_phone } from "react-icons-kit/md/ic_phone";
import { ic_place } from "react-icons-kit/md/ic_place";

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
      <div className='flex flex-col gap-4 p-6'>
        <div className='mb-2 text-lg font-medium'>{props.contactInfo.title}</div>
        <div className="flex flex-row gap-2 text-gray-300 hover:text-white">
          <Icon icon={ic_place} size={24} />
          <p>{props.contactInfo.address}</p>
        </div>
        <div className="flex flex-row gap-2 text-gray-300 hover:text-white">
          <Icon icon={ic_phone} size={26} className="phone-icon" />
          <div>
            <p className="phone-number">{props.contactInfo.phone}</p>
            <p>{props.contactInfo.openingTime}</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 text-gray-300 hover:text-white">
          <Icon icon={paperPlane} size={22} />
          <p>{props.contactInfo.email}</p>
        </div>
      </div>

  );
};

export default FooterContact;
