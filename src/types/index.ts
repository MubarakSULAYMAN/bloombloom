export interface MenuItem {
  name: string;
  path: string;
}

export interface MenuItems {
  name: string;
  children?: MenuItem[];
}

export type GlassMedia = {
  id: number;
  medium_type: string;
  mime_type: string;
  file_location: string;
  file_name: string;
  original_file_name: string;
  size: number;
  url: string;
  position: number;
};

export type FrameVariant = {
  id: number;
  name: string;
  configuration_name: string;
  barcode: string | null;
  harmonized_system_code: string | null;
  stock_keeping_unit: string | null;
  status: string;
  colour: {
    id: number;
    name: string;
    media: Partial<GlassMedia[]>;
  };
};

export type GlassVariant = Partial<GlassMedia[]> & {
  id: number;
  barcode: string | null;
  harmonized_system_code: string | null;
  stock_keeping_unit: string | null;
  inventory: boolean;
  home_trial_available: boolean;
  price: number;
  default_glass_variant: boolean;
  frame_variant: Partial<FrameVariant>;
  media: Partial<GlassMedia[]>;
};

export type GlassCollection = {
  id: number;
  name: string;
  configuration_name: string;
  default_collection_name: string | null;
  cost_breakdown: {
    id: number;
    materials: number;
    labour: number;
    transport: number;
    taxes: number;
    bloobloom_price: number;
    retail_price: number;
  };
};

export type Glasses = Partial<GlassCollection> & {
  glass_variants: Partial<GlassVariant[]>;
};
