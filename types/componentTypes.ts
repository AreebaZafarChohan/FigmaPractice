export interface NavBarLiProps {
  link: string;
  name: string;
}

export interface OurProductCardProps {
  name: string;
  image: string;
  newPrice: string;
  oldPrice?: string;
  rating?: string | number;
  width: number;
  height: number;
  ratingImage?: string;
  property?: string;
  property2?: string;
  property3?: string;
  property4?: string;
  colorImage?: string;
  badgeText?: string;
  badgeColor?: string;
  iconImage?: string;
  id?: string;
}

export interface ProductDetailProps {
  name: string;
  image: string;
  desc: string;
  price: string;
  category: string;
  id: string;
}
