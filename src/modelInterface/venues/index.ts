export interface AddVenueObjProps {
  title?: string;
  subTitle?: string;
  lat: string;
  long: string;
  fullAddress?: string;
}
export interface GetVenueObjProps extends AddVenueObjProps {
  id: string;
}
