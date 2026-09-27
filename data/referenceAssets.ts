export const TEMP_REFERENCE_ASSETS = {
  productResearch: {
    src: 'https://pictures.autods.com/OfficialSite/New/20240730092908/trending-dropshipping-products.jpg',
    alt: 'Dropshipping product research dashboard',
  },
  listing: {
    src: 'https://assets-global.website-files.com/5f60c731c7ffa072ec98ef9c/61e318235235f0641cd2d0cb_Lm6pIifR-XT-Z1i_Q6qI8kFzFFogLsbO2WUO0mbJh5MbtGz_lAEZkLzRPMX10fDVciWwMvAx_ydJRYB4lU4sGr0E19_uwW0J54GiIgQW4mPP5IdNq34A4IOySwZxlZKlpt4gvkv_.png',
    alt: 'eBay listing management dashboard',
  },
  monitoring: {
    src: 'https://pictures.autods.com/OfficialSite/New/20251016123656/11.-AutoDS_s-price-and-stock-monitoring.png',
    alt: 'Price and stock monitoring interface',
  },
  sellerHero: {
    src: 'https://assets-global.website-files.com/5f60c731c7ffa072ec98ef9c/622687e75033d26536453fc5_1eYr50BU0GbCUlRnGAo0k94Rg6KEuRy08aZbyAVHimcH0ut-c3_w8ZWzgThNWNuwF4dhUeiDweuwTKzP4Tx4a6vIHQeX6B8huLfN64sbqJ6sAO9iD8cY0u9BHL_tnhVvpI1cT2zZVEUWvNowRZw.png',
    alt: 'Seller performance dashboard',
  },
  sellerListing: {
    src: 'https://assets-global.website-files.com/5f60c731c7ffa072ec98ef9c/61e318235235f0641cd2d0cb_Lm6pIifR-XT-Z1i_Q6qI8kFzFFogLsbO2WUO0mbJh5MbtGz_lAEZkLzRPMX10fDVciWwMvAx_ydJRYB4lU4sGr0E19_uwW0J54GiIgQW4mPP5IdNq34A4IOySwZxlZKlpt4gvkv_.png',
    alt: 'Listing management interface',
  },
  sellerManagement: {
    src: 'https://assets-global.website-files.com/5f60c731c7ffa072ec98ef9c/622687e75033d26536453fc5_1eYr50BU0GbCUlRnGAo0k94Rg6KEuRy08aZbyAVHimcH0ut-c3_w8ZWzgThNWNuwF4dhUeiDweuwTKzP4Tx4a6vIHQeX6B8huLfN64sbqJ6sAO9iD8cY0u9BHL_tnhVvpI1cT2zZVEUWvNowRZw.png',
    alt: 'Seller management dashboard',
  },
} as const;

export type TemporaryReferenceAssetKey = keyof typeof TEMP_REFERENCE_ASSETS;
