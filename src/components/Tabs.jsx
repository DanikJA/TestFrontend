import {
  CustomIconAdministration,
  CustomIconHelp,
  CustomIconWaren,
  CustomIconAswah,
  CustomIconEin,
  CustomIconRechn,
  CustomIconAk,
  Verk,
  Statistic,
} from "./Icons.jsx";

import {
  FiGrid,
  FiPhone,
  FiMail,
  FiSettings,
  FiShoppingCart,
} from "react-icons/fi";

export const iconMap = {
  FiGrid: <FiGrid />,
  FiShoppingCart: <FiShoppingCart />,
  FiPhone: <FiPhone />,
  FiMail: <FiMail />,
  FiSettings: <FiSettings />,
  CustomIconAk: <CustomIconAk />,
  Verk: <Verk />,
  Statistic: <Statistic />,
  CustomIconHelp: <CustomIconHelp />,
  CustomIconWaren: <CustomIconWaren />,
  CustomIconAswah: <CustomIconAswah />,
  CustomIconEin: <CustomIconEin />,
  CustomIconRechn: <CustomIconRechn />,
  CustomIconAdministration: <CustomIconAdministration />,
};

export const tabs = [
  { name: "Dashboard", icon: "FiGrid", path: "/dashboard", order: 0 },
  { name: "Banking", icon: "FiShoppingCart", path: "/banking", order: 1 },
  { name: "Telefonie", icon: "FiPhone", path: "/telefonie", order: 2 },
  { name: "Accounting", icon: "CustomIconAk", path: "/accounting", order: 3 },
  { name: "Verkauf", icon: "Verk", path: "/verkauf", order: 4 },
  { name: "Statistik", icon: "Statistic", path: "/statistik", order: 5 },
  { name: "Post Office", icon: "FiMail", path: "/post", order: 6 },
  { name: "Administration", icon: "FiSettings", path: "/admin", order: 7 },
  { name: "Help", icon: "CustomIconHelp", path: "/help", order: 8 },
  {
    name: "Warenbestand",
    icon: "CustomIconWaren",
    path: "/warenbestand",
    order: 9,
  },
  {
    name: "Auswahllisten",
    icon: "CustomIconAswah",
    path: "/auswahllisten",
    order: 10,
  },
  { name: "Einkauf", icon: "CustomIconEin", path: "/einkauf", order: 11 },
  {
    name: "Rechnungen",
    icon: "CustomIconRechn",
    path: "/rechnungen",
    order: 12,
  },
].map((tab) => ({
  ...tab,
  id: tab.name,
  pinned: false,
}));
