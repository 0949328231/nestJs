import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, categoryId: 2, price: 800, productName: 'Thức dâm' },
    { id: 2, categoryId: 2, price: 1000, productName: 'Khánh dâm' },
    { id: 3, categoryId: 2, price: 299, productName: 'Chó ngu dâm' },
    { id: 4, categoryId: 2, price: 83300, productName: 'Mèo béo dâm' },
  ];
  getProducts(): Product[] {
    return this.products;
  }

  createProduct(productDto: ProductDto): Product {
    const product: Product = {
      id: Math.random(),
      ...productDto,
    };
    this.products.push(product);
    return product;
  }
  detailProduct(id: number): Product {
    return this.products.find((item) => item.id === Number(id));
  }

  updateProduct(productDto: ProductDto, id: number): Product {
    const index = this.products.findIndex((item) => item.id === Number(id));

    this.products[index] = productDto;
    return productDto;
  }
  deleteProduct(id: number): boolean {
    // const dataTemplate = this.products.filter((item) => item.id !== Number(id));
    // this.products = dataTemplate;
    // return true;
    const index = this.products.findIndex((item) => item.id === Number(id));
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    } else return false;
  }
}
