import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import AdminProductSlice from "./admin/products-slice/AdminProductSlice";
import adminOrderSlice from "./admin/order-slice/OrderSlice";

import shopProductsSlice from "./shop/products-slice/ShoppingProductSlice";
import shopCartSlice from "./shop/Cart-Slice/ShopCartSlice";
import shopAddressSlice from "./shop/address-slice/AddressSlice";
import shopOrderSlice from "./shop/Order-Slice/OrderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,

    AdminProducts: AdminProductSlice,
    adminOrder: adminOrderSlice,
    
    shopProducts: shopProductsSlice,
    shopCart: shopCartSlice,
    shopAddress: shopAddressSlice,
    shopOrder: shopOrderSlice
  },
});

export default store;
