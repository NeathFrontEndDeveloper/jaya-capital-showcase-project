"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Instagram({ className }: { className?: string }) {
  return <FontAwesomeIcon icon={faInstagram} className={className} />;
}
