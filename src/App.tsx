import React, { useState, useEffect } from "react";
import { Accessorie, Phone, Product, Tablet } from "./types/types";
import * as Services from "./utils/getAll";
import PhonesList from "./components/PhonesList/PhonesList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "./components/Loader";
import { AccessoriesList } from "./components/AccessoriesList/AccessoriesList";
import ProductsList from "./components/ProductsList/ProductsList";
import TabletsList from "./components/TabletsList/TabletsList";

export const App: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [accessories, setAccessories] = useState<Accessorie[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [tablets, setTablets] = useState<Tablet[]>([]);

  useEffect(() => {
    Services.getPhones()
      .then((fetchedPhones) => {
        setPhones(fetchedPhones);
      })
      .catch((error) => {
        toast.error("Error loading phones...", {
          position: "top-right",
          autoClose: 5000,
        });
        console.log(error);
      })
      .finally();
  }, []);

  useEffect(() => {
    Services.getAccessories()
      .then((fetchedAccessories) => {
        setAccessories(fetchedAccessories);
      })
      .catch((error) => {
        toast.error("Error loading accessories...", {
          position: "top-right",
          autoClose: 5000,
        });
        console.log(error);
      })
      .finally();
  }, []);

  useEffect(() => {
    Services.getProducts()
      .then((fetchedProducts) => {
        setProducts(fetchedProducts);
      })
      .catch((error) => {
        toast.error("Error loading products...", {
          position: "top-right",
          autoClose: 5000,
        });
        console.log(error);
      })
      .finally();
  }, []);

  useEffect(() => {
    Services.getTablets()
      .then((fetchedTablets) => {
        setTablets(fetchedTablets);
      })
      .catch((error) => {
        toast.error("Error loading tablets...", {
          position: "top-right",
          autoClose: 5000,
        });
        console.log(error);
      })
      .finally();
  }, []);

  return (
    <>
      {/* Header com Nav Links */}
      <div className="container">
        <Router />
      </div>
    </>
  );
};
