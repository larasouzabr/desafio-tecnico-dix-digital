export interface News {
  id?: number;
  title: string;
  description: string;
}
export interface City {
  id: number;
  state_id: number;
  title: string;
  iso: number;
  iso_ddd: number;
  status: number;
  slug: string;
  population: number;
  lat: string;
  long: string;
  income_per_capita: string;
  created_at: null | string;
  updated_at: null | string;
}

export interface Home {
  message: string;
  data: {
    home: HomeItem[];
    pages: Page[];
    banners: Banner[];
  };
}

interface HomeItem {
  id: number;
  name: string;
  note: string | null;
  is_active: number;
  order: number;
  _lft: number;
  _rgt: number;
  parent_id: number | null;
  created_at: string;
  updated_at: string;
  site_id: number;
  is_home: number;
  order_home: number;
  class: string;
  code: string;
  home_start: number;
  position: string;
  contents: ContentItem[];
}

interface ContentItem {
  id: number;
  type: number;
  position: number;
  image: string;
  title: string;
  descritive: string;
  attachment: string | null;
  model: string | null;
  url: string | null;
  status: string;
  open: string;
  start_date: string;
  end_date: string;
  tags: string[] | null;
  bond: string | null;
  credits: string | null;
  note: string | null;
  published_at: string;
  slug: string;
  subtitle: string | null;
  created_at: string;
  updated_at: string;
  site_id: number;
  code: string | null;
  page_id: number;
  emphasis: number | null;
  size_images_id: number | null;
  endpoint: string | null;
}

export interface Page {
  id: number;
  name: String;
  note: null;
  is_active: number;
  order: number;
  _lft: number;
  _rgt: number;
  parent_id: null;
  created_at: String;
  updated_at: String;
  site_id: number;
  is_home: number;
  order_home: number | null;
  class: String;
  code: String;
  home_start: number | null;
  position: String | null;
  children: [];
}
export interface Banner {
  id: number;
  name: string;
  image: string;
  url: string;
  is_active: number;
  position: ['2'];
  type: number;
  sequence: number;
  created_at: '2023-02-16T20:43:05.000000Z';
  updated_at: '2023-02-16T20:51:19.000000Z';
  site_id: number;
}
export interface Report {
  title: string;
  content: string;
  date: string;
  mainHeadline: string;
  img: string;
}

export interface Colunist {
  name: string;
  img: string;
  smalldescription: string;
  columnname: string;
  reportagens: Report[];
}
