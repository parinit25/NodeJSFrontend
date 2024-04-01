import AddProductComponent from "@/components/products/AddProductComponent";

const { default: Guard } = require("@/components/layout/Gaurd");

const AddProductMainPage = () => {
  return (
    <Guard>
      <AddProductComponent />
    </Guard>
  );
};
export default AddProductMainPage;
