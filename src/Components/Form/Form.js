import { Button, Card } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { get } from "../../Utils/fetchApi";
import { showErrorToast, showSuccessToast } from "../../Utils/toastAlert";
import Select from "react-select";
import "./form.css";

const Form = () => {
  const rootUrl = "https://dev-pos.supershop.ai/api/v1/";

  const initialValues = {
    name: "",
    business_name: "",
    phone_number: "",
    email: "",
    district_id: "",
    district_name: "",
    thana_id: "",
    thana_name: "",
    address: "",
  };

  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [thanas, setThanas] = useState([]);
  const [isValided, setIsValided] = useState(false);
  const [errors, setErrors] = useState([]);
  const [selectedDiscrict, setSelectedDiscrict] = useState({});
  const [selectedThana, setSelectedThana] = useState({});
  const [isDistrictSelect, setIsDistrictSelect] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${rootUrl}district-list`)
      .then((res) => {
        if (res.status === 200) {
          const distArr = [];
          res?.data?.data?.map((data) =>
            distArr.push({ value: data.id, label: data.name })
          );
          setDistrict(distArr);
        }
      })
      .catch((error) => {
        showErrorToast("Something went wrong!!! Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => values;
  }, []);

  const handleInputChange = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function getThana(id) {
    get(`${rootUrl}thana-list/${id}`)
      .then((res) => {
        const thanaArr = [];
        res?.data?.data?.map((data) =>
          thanaArr.push({ value: data.id, label: data.name })
        );
        setSelectedThana({ value: "", label: "select..." });
        setThanas(thanaArr);
      })
      .catch((error) => {
        showErrorToast("Something went wrong!!! Please try again.");
      });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(`${rootUrl}supershop-website-lead`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        district_name: selectedDiscrict.label,
        district_id: selectedDiscrict.value,
        thana_name:
          selectedThana.label == "select..." ? "" : selectedThana.label,
        thana_id: selectedThana.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setIsValided(true);
          showSuccessToast(data.message);
          setValues({ ...initialValues });
          setSelectedDiscrict({});
          setSelectedThana({});
          setThanas([]);
          setIsDistrictSelect(false);
        } else if (data.code === 400) {
          setErrors(data.errors);
          showErrorToast(data.message);
        }
      })
      .catch((err) => {
        showErrorToast("Something went wrong. Please try again");
      });
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? "#4b0082" : "#4b0082",
      "&:hover": {
        borderColor: state.isFocused ? "#4b0082" : "#4b0082",
      },
      boxShadow: state.isFocused ? "none" : provided.boxShadow,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#4b0082" : provided.backgroundColor,
      color: state.isSelected ? "#ffffff" : "#4b0082",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#ffffff" : provided.color,
    }),
  };

  return (
    <div id="register">
      <Card className="py-5 md:py-10 my-5 md:mx-10 bg-gray-100 shadow-none rounded-none">
        <p className="text-primary  text-start md:text-center text-3xl md:text-5xl font-bold pb-5 pl-5 md:pl-0">
          Registration
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div className="flex flex-col text-start px-10">
              <label className="">
                Name
                <span className="text-danger"></span>
              </label>
              <input
                name="name"
                onChange={handleInputChange}
                type="text"
                className="h-10 rounded-md px-2 border-0-5 "
                placeholder="Name"
                value={values?.name}
              />
              {!isValided && (
                <p className="text-red-500">{errors?.name?.[0]}</p>
              )}
            </div>
            <div className="flex flex-col text-start px-10">
              <label className="required">
                Business Name
                <span className="text-danger"></span>
              </label>
              <input
                name="business_name"
                onChange={handleInputChange}
                type="text"
                className="h-10 rounded-md px-2 border-0-5"
                placeholder="Business Name"
                value={values?.business_name}
              />
              {!isValided && (
                <p className="text-red-500">{errors?.business_name?.[0]}</p>
              )}
            </div>
            <div className="flex flex-col text-start px-10">
              <label className="required">
                Email
                <span className="text-danger"></span>
              </label>
              <input
                name="email"
                onChange={handleInputChange}
                type="email"
                className="h-10 rounded-md px-2 border-0-5"
                placeholder="Email"
                value={values?.email}
              />
              {!isValided && (
                <p className="text-red-500">{errors?.email?.[0]}</p>
              )}
            </div>
            <div className="flex flex-col text-start px-10">
              <label className="required">
                Phone number
                <span className="text-danger"></span>
              </label>
              <input
                name="phone_number"
                onChange={handleInputChange}
                type="text"
                className="h-10 rounded-md px-2 border-0-5"
                placeholder="Phone number"
                value={values?.phone_number}
              />
              {!isValided && (
                <p className="text-red-500">{errors?.phone_number?.[0]}</p>
              )}
            </div>

            {/* -------------------------------district---------------------------------- */}
            <div className="flex flex-col text-start px-10">
              <label>District</label>
              <Select
                value={isDistrictSelect ? selectedDiscrict : "select..."}
                onChange={(value) => {
                  setSelectedDiscrict(value);
                  getThana(value.value);
                  setIsDistrictSelect(true);
                }}
                options={districts}
                styles={customStyles}
              />
              {!isValided && (
                <p className="text-red-500">{errors?.district_id?.[0]}</p>
              )}
            </div>
            {/* ----------------------thana------------------ */}
            <div className="flex flex-col text-start px-10">
              <label>Thana</label>
              <Select
                value={selectedThana?.label ? selectedThana : ""}
                onChange={(value) => {
                  setSelectedThana(value);
                }}
                options={thanas}
                styles={customStyles}
              />
              {!isValided && errors?.thana_id?.[0] && (
                <p className="text-red-500">{errors?.thana_id?.[0]}</p>
              )}
            </div>
            {/* ----------------------------------------- */}

            <div className="flex flex-col text-start px-10">
              <label className="required">
                Address
                <span className="text-danger"></span>
              </label>
              <input
                name="address"
                onChange={handleInputChange}
                type="name"
                className="h-10 rounded-md px-2 border-0-5"
                placeholder="Address"
                value={values?.address}
              />
              {!isValided && (
                <p className="text-red-500">{errors?.address?.[0]}</p>
              )}
            </div>
          </div>
          <Button type="submit" className="bg-buttonColor px-12 mt-5">
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
