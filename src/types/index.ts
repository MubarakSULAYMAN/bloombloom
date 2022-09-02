export interface MenuItem {
  name: string;
  path: string;
}

export interface MenuItems {
  name: string;
  children?: MenuItem[];
}
