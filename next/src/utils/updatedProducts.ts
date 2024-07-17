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