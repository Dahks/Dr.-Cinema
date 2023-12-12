export type Cinema = {
  id: string,
  name: string,
  description: string,
  address: string, // could be converted to Address type
  phone: string,
  websiteUrl: string,
  googleMap: string,
};

export type APICinema = {
  address: string,
  city: string,
  name: string,
  phone: string,
  description: string,
  website: string,
  id: string,
  google_map: string,
};

export const toCinema = (apiCinema: APICinema) => {
  const cinema: Cinema = {
    id: apiCinema.id,
    name: apiCinema.name,
    description: apiCinema.description ?? "",
    address: `${apiCinema.address}, ${apiCinema.city}`,
    phone: apiCinema.phone,
    websiteUrl: apiCinema.website,
    googleMap: apiCinema.google_map,
  };

  return cinema;
};
