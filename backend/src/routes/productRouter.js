import { Router } from "express";
import productDetails from '../controllers/productDetails.js'

const router = Router();


router.route("/register").post(productDetails)


export default router