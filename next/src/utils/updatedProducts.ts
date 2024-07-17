import { Manufacturer, Product } from "@/components/listWrapper/listWrapper";

export const getProductsWithManufactorNames = (products: Product[], manufacturers: Manufacturer[]) => {
    return products.map((product) => {
      const manufacturer = manufacturers.find((manufacturer) => manufacturer.id === product.manufacturerId);
      return {
        ...product,
        manufacturerName: manufacturer ? manufacturer.name : '',
      };
    });
  }
  

export const getManufacturerId = (name: string, manufacturers: Manufacturer[]) => {
  const manufacturer = manufacturers.find((manufacturer) => manufacturer.name === name);
  return manufacturer ? manufacturer.id : null;
};