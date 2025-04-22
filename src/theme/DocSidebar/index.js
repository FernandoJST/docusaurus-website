import React from 'react';
import OriginalSidebar from '@theme-original/DocSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBug,
  faWrench,
  faCode,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

// 🔧 Estas claves están en minúsculas, sin tildes
const iconMap = {
  'introduccion': faInfoCircle,
  'como acceder al inspector': faCode,
  'paneles del inspector': faWrench,
  'extras': faBug,
};

export default function DocSidebar(props) {
  const modifiedItems = props.sidebar.map((item) => {
    // 🔤 Normaliza: minúsculas + sin tildes
    const labelKey = item.label?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const icon = iconMap[labelKey];

    return {
      ...item,
      label: icon ? (
        <>
          <FontAwesomeIcon icon={icon} color="#007acc" style={{ marginRight: '8px' }} />
          {item.label}
        </>
      ) : item.label,
    };
  });

  return <OriginalSidebar {...props} sidebar={modifiedItems} />;
}
