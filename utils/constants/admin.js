const NewsTypes = {
  NEWS: 2,
  NOTICES: 1,
};

const NewsStatus = {
  DRAFT: "draft",
  PUBLISHED_PENDING: "published_pending",
  PUBLISHED: "published",
};

const NewsPublishedStatus = {
  YES: 1,
  NO: 0,
};

const DisplaySetting = {
  CATEGORY: 1,
  PRODUCT: 2,
  DONATION: 3,
  DONOR_INFORMATION: 4,
  NEWS: 5,
  MUNICIPALITY: 6,
  LUXURIQUE_STAFF: 7,
  INQUIRY: 8,
  DONATION_USE_CATEGORY: 9,
  PRODUCT_FOR_MUNICIPALITY: 10,
  FEEDBACK: 11,
};

const donationStatusListEn = [
  {
    id: 1,
    name: "Register",
    value: 1,
    disabled: false,
  },
  {
    id: 2,
    name: "Payment success",
    value: 2,
    disabled: false,
  },
  {
    id: 3,
    name: "Awaiting shipment",
    value: 3,
    disabled: false,
  },
  {
    id: 4,
    name: "Shipping",
    value: 4,
    disabled: false,
  },
  {
    id: 5,
    name: "Shipped",
    value: 5,
    disabled: false,
  },
  {
    id: 6,
    name: "Complete",
    value: 6,
    disabled: false,
  },
];

const donationStatusListJa = [
  {
    id: 1,
    name: "寄附申込",
    value: 1,
  },
  {
    id: 2,
    name: "寄附入金完了",
    value: 2,
  },
  {
    id: 3,
    name: "出荷準備中",
    value: 3,
  },
  {
    id: 4,
    name: "配送中",
    value: 4,
  },
  {
    id: 5,
    name: "配送完了",
    value: 5,
  },
  {
    id: 6,
    name: "請求書受領",
    value: 6,
  },
];

const TypeForm = {
  ADD: "add",
  EDIT: "edit",
};

const DEFAULT_IMAGE = "https://i.ibb.co/C72HgPM/product-default.png";
const ACCOUNT_STATUS = { ACTIVE: "3", DEACTIVE: "9" };
export {
  NewsTypes,
  NewsStatus,
  DisplaySetting,
  TypeForm,
  NewsPublishedStatus,
  donationStatusListEn,
  donationStatusListJa,
  DEFAULT_IMAGE,
  ACCOUNT_STATUS,
};
