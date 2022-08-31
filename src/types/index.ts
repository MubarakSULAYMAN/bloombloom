export interface MenuItem {
  name: string;
}

export interface MenuItems {
  name: string;
  children?: MenuItem[];
}

export interface Props1 {
  labels?: string[];
}
