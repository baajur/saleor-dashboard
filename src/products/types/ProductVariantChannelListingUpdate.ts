/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ProductVariantChannelListingInput, ProductErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: ProductVariantChannelListingUpdate
// ====================================================

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_attributes_attribute_values {
  __typename: "AttributeValue";
  id: string;
  name: string | null;
  slug: string | null;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_attributes_attribute {
  __typename: "Attribute";
  id: string;
  name: string | null;
  slug: string | null;
  valueRequired: boolean;
  values: (ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_attributes_attribute_values | null)[] | null;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_attributes_values {
  __typename: "AttributeValue";
  id: string;
  name: string | null;
  slug: string | null;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_attributes {
  __typename: "SelectedAttribute";
  attribute: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_attributes_attribute;
  values: (ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_attributes_values | null)[];
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_costPrice {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_images {
  __typename: "ProductImage";
  id: string;
  url: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_price {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_product_images {
  __typename: "ProductImage";
  id: string;
  alt: string;
  sortOrder: number | null;
  url: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_product_thumbnail {
  __typename: "Image";
  url: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_product_variants_images {
  __typename: "ProductImage";
  id: string;
  url: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_product_variants {
  __typename: "ProductVariant";
  id: string;
  name: string;
  sku: string;
  images: (ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_product_variants_images | null)[] | null;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_product {
  __typename: "Product";
  id: string;
  images: (ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_product_images | null)[] | null;
  name: string;
  thumbnail: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_product_thumbnail | null;
  variants: (ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_product_variants | null)[] | null;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_channelListing_channel {
  __typename: "Channel";
  id: string;
  name: string;
  currencyCode: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_channelListing_costPrice {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_channelListing_price {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_channelListing {
  __typename: "VariantChannelListing";
  channel: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_channelListing_channel;
  costPrice: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_channelListing_costPrice;
  price: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_channelListing_price;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_stocks_warehouse {
  __typename: "Warehouse";
  id: string;
  name: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_stocks {
  __typename: "Stock";
  id: string;
  quantity: number;
  quantityAllocated: number;
  warehouse: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_stocks_warehouse;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant {
  __typename: "ProductVariant";
  id: string;
  attributes: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_attributes[];
  costPrice: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_costPrice | null;
  images: (ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_images | null)[] | null;
  name: string;
  price: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_price | null;
  product: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_product;
  channelListing: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_channelListing[] | null;
  sku: string;
  stocks: (ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant_stocks | null)[] | null;
  trackInventory: boolean;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_errors {
  __typename: "ProductChannelListingError";
  field: string | null;
  message: string | null;
  code: ProductErrorCode;
  channels: string[] | null;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate {
  __typename: "ProductVariantChannelListingUpdate";
  productVariant: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_productVariant | null;
  errors: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_errors[];
}

export interface ProductVariantChannelListingUpdate {
  productVariantChannelListingUpdate: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate | null;
}

export interface ProductVariantChannelListingUpdateVariables {
  input: ProductVariantChannelListingInput[];
}