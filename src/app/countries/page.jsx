"use client";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "antd";
import CountryCard from "../../components/CountryCard";
import CountryModal from "../../components/CountryModal";
import Loading from "../../components/Loading";
import styles from "./Countries.module.css";

const regions = ["africa", "americas", "antarctic", "asia", "europe", "oceania"];

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountries = async (region = "") => {
    setIsLoading(true);
    try {
      const url = region
        ? `https://restcountries.com/v3.1/region/${region}`
        : "https://restcountries.com/v3.1/all";
      const response = await axios.get(url);
      setCountries(response.data);
      sessionStorage.setItem("countries", JSON.stringify(response.data));
      if (!region) {
        setAllCountries(response.data);
        sessionStorage.setItem("allCountries", JSON.stringify(response.data));
      }
    } catch (error) {
      console.error("Erro ao carregar países:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cachedCountries = sessionStorage.getItem("countries");
    const cachedAll = sessionStorage.getItem("allCountries");
    if (cachedCountries) {
      setCountries(JSON.parse(cachedCountries));
      if (cachedAll) setAllCountries(JSON.parse(cachedAll));
      setIsLoading(false);
    } else {
      fetchCountries();
    }
  }, []);

  const resetFilter = () => fetchCountries();

  const handleButtonClick = (region) => {
    fetchCountries(region);
    toast.success(`Região selecionada: ${region}`);
  };

  const handleButtonCountry = (country) => {
    setSelectedCountry(country);
    toast.success(`País selecionado: ${country.name.common}`);
  };

  return (
    <div className={styles.container}>
        <ToastContainer position="top-right" autoClose={4000} theme="light" />
      <h1>Lista de Países do Mundo</h1>
      <div>
        {regions.map((region) => (
          <button
            key={region}
            className={styles.button}
            onClick={() => handleButtonClick(region)}
          >
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </button>
        ))}
        <button className={styles.buttonReset} onClick={resetFilter}>
          Mostrar Todos
        </button>
      </div>

      <div className={styles.cardContainer}>
      {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={styles.skeletonCard}>
              <Skeleton active avatar paragraph={{ rows: 2 }} />
            </div>
          ))
        ) : (
          countries.map((country, index) => (
            <CountryCard
              key={index}
              country={country}
              onClick={() => handleButtonCountry(country)}
            />
          ))
        )}
      </div>

      {selectedCountry && (
        <CountryModal
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}
    </div>
  );
}
