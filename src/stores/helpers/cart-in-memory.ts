import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

export function add(product: ProductCartProps[], newProduct: ProductProps) {
  const existingProduct = product.find(({ id }) => newProduct.id === id)

  if(existingProduct) {
    return product.map((product) => 
      existingProduct.id === product.id
      ? { ...product, quantity: product.quantity + 1 }
      : product
    )
  }

  return [...product, { ...newProduct, quantity: 1 }]
}

export function remove(products: ProductCartProps[], producRemovedtId: string) {
  const updatedProducts = products.map((product) => 
    product.id === producRemovedtId 
    ? {
        ...product,
        quantity: product.quantity  > 1 ? product.quantity - 1 : 0
      } 
    : product
  )

  return updatedProducts.filter((product) => product.quantity > 0)
}