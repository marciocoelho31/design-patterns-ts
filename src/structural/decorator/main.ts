import { ProductCustomizedDecorator } from './product/product-customized-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { Tshirt } from './product/tshirt';

const tshirt = new Tshirt();
const tshirtWithStamp = new ProductStampDecorator(tshirt);

const tshirtWithStampFrontAndBack = new ProductStampDecorator(tshirtWithStamp);

console.log(tshirt.getPrice(), tshirt.getName());
console.log(tshirtWithStamp.getPrice(), tshirtWithStamp.getName());
console.log(
  tshirtWithStampFrontAndBack.getPrice(),
  tshirtWithStampFrontAndBack.getName(),
);

const customizedTshirt = new ProductCustomizedDecorator(tshirt);
console.log(customizedTshirt.getPrice(), customizedTshirt.getName());
