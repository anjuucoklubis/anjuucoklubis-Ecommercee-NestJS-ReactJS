import AccountView from "./modules/dashboard/manage-user/account/AccountView.tsx";
import RoleView from "./modules/dashboard/manage-user/role/RoleView.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryProductView from "./modules/dashboard/produk/category/CategoryProductView.tsx";
import ProductView from "./modules/dashboard/produk/product/ProductView.tsx";
import DiscountProductView from "./modules/dashboard/produk/discount/DiscountProductView.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
         
        <Route path="/admin/manageproduct-product" element={<ProductView/>} />
        <Route path="/admin/manageproduct-categoryproduct" element={<CategoryProductView/>} />
        <Route path="/admin/manageproduct-discountproduct" element={<DiscountProductView/>} />


        <Route path="/admin/manageuser-account" element={<AccountView/>} />

        <Route path="/admin/manageuser-role" element={<RoleView/>} />

      </Routes>
    </Router>
  );
};

export default App;
