import express from 'express';
import { deleteProduct, getProducts, saveProduct, updateProduct, getProductById } from '../controller/productController.js'; // ✅ add getProductById

const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:productId', getProductById); // ✅ NEW: fetch single product by productId
productRouter.post('/', saveProduct);
productRouter.put('/:productId', updateProduct);
productRouter.delete('/:productId', deleteProduct);

export default productRouter;
