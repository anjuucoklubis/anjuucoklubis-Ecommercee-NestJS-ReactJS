import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import API_FRONTEND from "../../../../../api/api.ts";
import { GetAllCategoryProductForCreateProductInterface } from "../Interface/InterfaceProduct.ts";
import axios from "axios";
function ProductViewModelCreate({ onClose }) {
  const { API_URL_PRODUCT } = API_FRONTEND();
  const [showModalCreateProduct, setShowModalCreateProduct] =
    React.useState(false);
  const [formData, setFormData] = useState<{
    product_sku: string;
    product_name: string;
    product_description: string;
    product_short_description: string;
    product_price_original: string;
    product_price_discount: string;
    product_quantity: string;
    product_weight: string;
    categoryProductId: string;
  }>({
    product_sku: "",
    product_name: "",
    product_description: "",
    product_short_description: "",
    product_price_original: "",
    product_price_discount: "0",
    product_quantity: "",
    product_weight: "",
    categoryProductId: "",
  });

  const handleSubmitCreateProduct = async (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    console.log("Form Data:", formData);

    if (
      !formData.product_sku ||
      !formData.product_name ||
      !formData.product_description ||
      !formData.product_short_description ||
      !formData.product_price_original ||
      !formData.product_price_discount ||
      !formData.product_quantity ||
      !formData.product_weight
    ) {
      if (!formData.product_sku) {
        toast.error("Please enter product_sku of Product");
      }
      if (!formData.product_name) {
        toast.error("Please enter product_name of Product");
      }
      if (!formData.product_description) {
        toast.error("Please upload an product_description file");
      }
      if (!formData.product_short_description) {
        toast.error("Please upload an product_short_description file");
      }
      if (!formData.product_price_original) {
        toast.error("Please upload an product_price_original file");
      }
      if (!formData.product_price_discount) {
        toast.error("Please upload an product_price_discount file");
      }
      if (!formData.product_quantity) {
        toast.error("Please upload an product_quantity file");
      }
      if (!formData.product_weight) {
        toast.error("Please upload an product_weight file");
      }
      return;
    }

    try {
      const parsedFormData = {
        ...formData,
        categoryProductId: parseInt(formData.categoryProductId),
      };

      const response = await fetch(`${API_URL_PRODUCT}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedFormData),
      });

      console.log("Response received");
      if (response.ok) {
        setFormData({
          product_sku: "",
          product_name: "",
          product_description: "",
          product_short_description: "",
          product_price_original: "",
          product_price_discount: "0",
          product_quantity: "",
          product_weight: "",
          categoryProductId: "",
        });
        onClose();

        toast.success("Product created successfully", {
          position: "top-right",
          onClose: () => {
            window.location.reload();
          },
        });
      } else {
        const responseData = await response.json();
        if (responseData && responseData.message) {
          toast.error(responseData.message);
        } else {
          console.error("Failed to submit form:", response.statusText);
          toast.error("Failed to submit form");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("Input Changed:", name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Find Category All
  const [getAllCategoryforCreateProduct, setGetAllCategoryforCreateProduct] =
    useState<GetAllCategoryProductForCreateProductInterface[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchDataCategoryForCreateProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/categoryproduct/get"
        );

        const formattedData = response.data.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt).toISOString(),
          updatedAt: new Date(item.updatedAt).toISOString(),
        }));

        setGetAllCategoryforCreateProduct(formattedData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchDataCategoryForCreateProduct();
  }, []);

  const handleCategoryChange = (event) => {
    const categoryProductId = event.target.value;
    console.log(categoryProductId);
    setSelectedCategory(categoryProductId);
    setFormData({
      ...formData,
      categoryProductId: categoryProductId,
    });
  };
  return {
    handleSubmitCreateProduct,
    handleInputChange,
    formData,
    showModalCreateProduct,
    setShowModalCreateProduct,
    handleCategoryChange,
    selectedCategory,
    getAllCategoryforCreateProduct,
  };
}

export default ProductViewModelCreate;
