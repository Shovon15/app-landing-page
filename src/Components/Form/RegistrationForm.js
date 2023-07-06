import React, { useEffect, useMemo, useState } from "react";
import { get, getWithParams, post, showError } from "../../Utils/fetchApi";
import AsyncSelect from "react-select/async";
import { Button } from "react-scroll";

function RegistrationForm({}) {
  const rootUrl = "https://dev-pos.supershop.ai/api/v1/";
  const initialState = {
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

  const [formattedStores, setFormattedStores] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const [districts, setDistrict] = useState([]);
  const [thanas, setThanas] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    get(`${rootUrl}district-list`)
      .then((res) => setDistrict(res?.data?.data))
      .catch((error) => console.log(error.message));
  }, []);

  function getThana() {
    get(`${rootUrl}thana-list/${formData.district_id}`)
      .then((res) => setThanas(res?.data?.data))
      .catch((error) => console.log(error.message));
  }
  function handleFormData(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleFormFile(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.files[0],
    });
  }

  function handleShopSelect(selected) {
    let shops = selected?.map((select) => select);
    setFormData({
      ...formData,
      shops: shops,
    });
  }

  const thanaMemo = useMemo(() => {
    if (formData.district_id) getThana();
  }, [formData.district_id]);

  const getStoreList = async (search) => {
    const userId = 1;
    return await getWithParams(`${rootUrl}thana-list/${userId}`, {
      search: search,
    })
      .then((res) => {
        return res.data.data.map((store) => ({
          label: store.name,
          value: store.id,
        }));
        // setFormattedStores(stores);
      })
      .catch((err) => {
        console.log(err);
        // Toast.fire({
        //     icon: 'error',
        //     title: 'Something went wrong!'
        // })
      });
  };

  function handleFormSubmit() {
    let formBody = new FormData();
    formBody.append("name", formData.name);
    formBody.append("business_name", formData.business_name);
    formBody.append("phone_number", formData.phone_number);
    formBody.append("email", formData.email);
    formBody.append("district_id", formData.district_id);
    formBody.append("district_name", formData.district_name);
    formBody.append("thana_id", formData.thana_id);
    formBody.append("thana_name", formData.thana_name);
    formBody.append("address", formData.address);

    // let submitUrl = "/shop-user/store";

    // if (operation === "edit"){
    //     formBody.append('_method', "put");
    //     submitUrl = `/shop-user/update/${id}`;
    //     if (!id) {
    //         swalError("Invalid user id.");
    //         return;
    //     }
    // }
    setIsSubmitting(true);
    post(rootUrl, formBody, "supershop-website-lead")
      .then((res) => {
        console.log(res?.data?.message);
        // Toast.fire({
        //     icon: 'success',
        //     title: res?.data?.message
        // })
        // navigate(`/shop-user`)
      })
      .catch((err) => {
        showError(err);
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.errors
        ) {
          setFormData({
            ...formData,
            errors: err.response.data.errors,
          });
        }
      })
      .finally(() => setIsSubmitting(false));
  }

  return (
    <div className="form-row">
      <div className="col-lg-3 col-md-4 col-sm-12 mb-1">
        <label>
          Name<span className="text-danger">*</span>
        </label>
        <input
          className="form-control form-control-sm text-primary"
          type="text"
          name="name"
          onChange={handleFormData}
          value={formData.name}
        />
        {formData?.errors?.name && (
          <div className="text-danger">{formData?.errors?.name[0]}</div>
        )}
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 mb-1">
        <label>
          Shops<span className="text-danger">*</span>
        </label>
        {/*<Select*/}
        {/*    value={formData.shops}*/}
        {/*    isMulti*/}
        {/*    name="shops"*/}
        {/*    options={formattedStores}*/}
        {/*    className="basic-multi-select "*/}
        {/*    classNamePrefix="select"*/}
        {/*    onChange={handleShopSelect}*/}
        {/*/>*/}
        <AsyncSelect
          isMulti
          cacheOptions
          defaultOptions
          classNamePrefix="Select merchant"
          value={formData.shops}
          loadOptions={getStoreList}
          onChange={handleShopSelect}
        />
        {formData?.errors?.shops && (
          <div className="text-danger">{formData?.errors?.shops[0]}</div>
        )}
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 mb-1">
        <label>
          Phone Number<span className="text-danger">*</span>
        </label>
        <input
          className="form-control form-control-sm text-primary"
          type="text"
          maxLength="100"
          name="phone"
          onChange={handleFormData}
          value={formData.phone}
        />
        {formData?.errors?.phone && (
          <div className="text-danger">{formData?.errors?.phone[0]}</div>
        )}
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 mb-1">
        <label>Email Address</label>
        <input
          className="form-control form-control-sm text-primary"
          type="email"
          name="email"
          onChange={handleFormData}
          value={formData.email}
        />
        {formData?.errors?.email && (
          <div className="text-danger">{formData?.errors?.email[0]}</div>
        )}
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 mb-1">
        <label>
          Password<span className="text-danger">*</span>
        </label>
        <input
          className="form-control form-control-sm text-primary"
          type="password"
          minLength="6"
          maxLength="12"
          name="password"
          onChange={handleFormData}
          value={formData.password}
        />
        {formData?.errors?.password && (
          <div className="text-danger">{formData?.errors?.password[0]}</div>
        )}
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 mb-1">
        <label>
          Confirm Password<span className="text-danger">*</span>
        </label>
        <input
          className="form-control form-control-sm text-primary"
          type="password"
          minLength="6"
          maxLength="12"
          name="password_confirmation"
          onChange={handleFormData}
          value={formData.password_confirmation}
        />
        {formData?.errors?.password_confirmation && (
          <div className="text-danger">
            {formData?.errors?.password_confirmation[0]}
          </div>
        )}
      </div>
      <div className="flex flex-col text-start px-10">
        <label>District</label>
        <select
          className="h-10 rounded-md px-2"
          name="district_id"
          onChange={handleFormData}
          value={formData.district_id}
        >
          <option>Select District</option>
          {districts &&
            districts?.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
        </select>
        {formData?.errors?.district_id && (
          <div className="text-red-500">{formData?.errors?.district_id[0]}</div>
        )}
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 mb-1">
        <label>Thana</label>
        <select
          className="form-control form-control-sm text-primary"
          name="thana_id"
          onChange={handleFormData}
          value={formData.thana_id}
        >
          <option>Select Thana</option>
          {thanas &&
            thanas?.map((thana) => (
              <option key={thana.id} value={thana.id}>
                {thana.name}
              </option>
            ))}
        </select>
        {formData?.errors?.thana_id && (
          <div className="text-danger">{formData?.errors?.thana_id[0]}</div>
        )}
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 mb-1">
        <label>Postcode</label>
        <input
          className="form-control form-control-sm text-primary"
          type="number"
          min={0}
          name="post_code"
          onChange={handleFormData}
          value={formData.post_code}
        />
        {formData?.errors?.post_code && (
          <div className="text-danger">{formData?.errors?.post_code[0]}</div>
        )}
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 mb-1">
        <label>Address</label>
        <textarea
          className="form-control form-control-sm text-primary"
          name="address"
          onChange={handleFormData}
          value={formData.address}
        />
        {formData?.errors?.address && (
          <div className="text-danger">{formData?.errors?.address[0]}</div>
        )}
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 mb-1">
        <label>Nid number</label>
        <input
          className="form-control form-control-sm text-primary"
          type="number"
          min={0}
          name="nid"
          onChange={handleFormData}
          value={formData.nid}
        />
        {formData?.errors?.nid && (
          <div className="text-danger">{formData?.errors?.nid[0]}</div>
        )}
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 mb-1">
        <label>Nid Front Image</label>
        <input
          className="form-control-file form-control-sm text-primary"
          type="file"
          name="nid_front_image"
          onChange={handleFormFile}
        />
        {formData?.errors?.nid_front_image && (
          <div className="text-danger">
            {formData?.errors?.nid_front_image[0]}
          </div>
        )}
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 mb-1">
        <label>Nid Back Image</label>
        <input
          className="form-control-file form-control-sm text-primary"
          type="file"
          name="nid_back_image"
          onChange={handleFormFile}
        />
        {formData?.errors?.nid_back_image && (
          <div className="text-danger">
            {formData?.errors?.nid_back_image[0]}
          </div>
        )}
      </div>
      <div className="col-12 text-right">
        <Button
          onClick={handleFormSubmit}
          className="btn btn-primary"
          //   disabled={isSubmitting}
        >
          submit
          {/* {isSubmitting ? <i className="fa fa-spinner fa-spin mr-1"></i> : ""} */}
          {/* {operation === "edit" ? "Update User" : "Add User"} */}
        </Button>
      </div>
    </div>
  );
}

export default RegistrationForm;
