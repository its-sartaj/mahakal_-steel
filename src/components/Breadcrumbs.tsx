import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

// Breadcrumb trail removed as per user instruction ("HOME/ Product/ Steel Sheets & ye sab nhi show hona chahiye")
export const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
  return null;
};
