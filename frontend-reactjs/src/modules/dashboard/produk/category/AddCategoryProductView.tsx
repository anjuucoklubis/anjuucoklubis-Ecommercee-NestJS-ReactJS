import React from "react";
import {
  Modal,
  Input,
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
} from "@nextui-org/react";
import { MailIcon } from "../../../../components/icons/MailIcon.tsx";
import { LockIcon } from "../../../../components/icons/LockIcon.tsx";
import CategoryProductViewModelCreate from "./ViewModel/CategoryProductViewModelCreate.ts";

interface AddCategoryProductViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCategoryProductView: React.FC<AddCategoryProductViewProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    handleSubmitCreateCategoryProduct,
    handleInputChange,
    handleImageChange,
    formData,
  } = CategoryProductViewModelCreate({ onClose });

  return (
    <div>
      <Modal isOpen={isOpen} placement="top-center" onClose={onClose}>
        <form
          className="p-4 md:p-5"
          onSubmit={handleSubmitCreateCategoryProduct}
        >
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              Add Category Product
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                endContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Name Category"
                placeholder="Enter name..."
                variant="bordered"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input
                endContent={
                  <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Description Category"
                placeholder="Enter description"
                type="text"
                variant="bordered"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gambar Kategori
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center mb-1">
                      <svg
                        className="w-8 h-8 mb-0 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-0 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">
                          Klik untuk mengunggah{" "}
                        </span>
                        atau seret dan lepas
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>
              {formData.image && (
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Preview
                  </label>
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="Preview"
                    className="max-w-full h-auto max-h-24 rounded-lg"
                  />
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </div>
  );
};

export default AddCategoryProductView;
