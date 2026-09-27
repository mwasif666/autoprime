export const TEMP_REFERENCE_ASSETS = {
  productResearch: {
    src: 'https://pictures.autods.com/OfficialSite/New/20231212120119/PRODUCT-RESEARCH-SYSTEM1.png',
    alt: 'Temporary AutoDS product research interface reference',
    source: 'AutoDS',
  },
  listing: {
    src: 'https://pictures.autods.com/OfficialSite/New/20231212120404/Import-products-with-a-click-of-a-button1.png',
    alt: 'Temporary AutoDS product listing interface reference',
    source: 'AutoDS',
  },
  monitoring: {
    src: 'https://pictures.autods.com/OfficialSite/New/20231212120500/Price-stock-monitoring2.png',
    alt: 'Temporary AutoDS price and stock monitoring interface reference',
    source: 'AutoDS',
  },
  sellerHero: {
    src: 'https://cdn.prod.website-files.com/5f60c731c7ffa0706798ef87/6a0303fb3cb77587761567d7_e300dcc9e472c279be6a4aaf5aaa4d1d_Hero%20Image.webp',
    alt: 'Temporary 3Dsellers product interface reference',
    source: '3Dsellers',
  },
  sellerListing: {
    src: 'https://cdn.prod.website-files.com/5f60c731c7ffa0706798ef87/6a0303fb3cb77587761567c7_d3e44de1e8470ee689427ccf84bcafce_Feature%20Blue.webp',
    alt: 'Temporary 3Dsellers listing feature reference',
    source: '3Dsellers',
  },
  sellerManagement: {
    src: 'https://cdn.prod.website-files.com/5f60c731c7ffa0706798ef87/6a0303fb3cb77587761567a1_6e70452345f251cd64763e411d8c7b34_Feature%20Green.webp',
    alt: 'Temporary 3Dsellers seller-management feature reference',
    source: '3Dsellers',
  },
} as const;

export type TemporaryReferenceAssetKey = keyof typeof TEMP_REFERENCE_ASSETS;
