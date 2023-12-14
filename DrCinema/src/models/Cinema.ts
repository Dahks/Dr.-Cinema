export interface Cinema {
  id: number;
  name: string;
  description: string;
  address: string; // could be converted to Address type
  phone: string;
  websiteUrl: string;
  googleMap: string;
}

export interface APICinema {
  "address\t": string;
  city: string;
  name: string;
  phone: string;
  description: string;
  website: string;
  id: number;
  google_map: string;
}

const getAddress = (
  address: string | undefined,
  city: string | undefined
): string => {
  if (address && city) return `${address}, ${city}`;
  return address ?? city ?? "Unknown";
};
const processDescription = (description: string | null) => {
  return description?.replace(/<br\s*\/?>|<b>/gi, "") ?? "";
};

export const cinemaSort = (a: Cinema, b: Cinema) => {
  const icelandicAlphabet = "aábdðeéfghiíjklmnoóprstuúvxyýzþæö";

  const aName = a.name.toLowerCase();
  const bName = b.name.toLowerCase();

  for (let i = 0; i < Math.min(aName.length, bName.length); i++) {
    const aIndex = icelandicAlphabet.indexOf(aName[i]);
    const bIndex = icelandicAlphabet.indexOf(bName[i]);

    if (aIndex !== bIndex) {
      return aIndex - bIndex;
    }
  }
};

export const toCinema = (apiCinema: APICinema) => {
  const cinema: Cinema = {
    id: apiCinema.id,
    name: apiCinema.name,
    description: processDescription(apiCinema.description),
    address: getAddress(apiCinema["address\t"], apiCinema.city),
    phone: apiCinema.phone,
    websiteUrl: apiCinema.website,
    googleMap: apiCinema.google_map,
  };

  return cinema;
};
