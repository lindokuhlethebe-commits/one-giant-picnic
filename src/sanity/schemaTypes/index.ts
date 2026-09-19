import { eventType } from "./event";
import { artistType } from "./artist";
import { performanceType } from "./performance";
import { experienceItemType } from "./experience";
import { productType } from "./product";
import { galleryItemType } from "./gallery";
import { faqType } from "./faq";

export const schema = {
  types: [
    eventType,
    artistType,
    performanceType,
    experienceItemType,
    productType,
    galleryItemType,
    faqType
  ],
};
