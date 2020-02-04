import React from "react";
import styled from "styled-components";
import { useField } from "react-final-form";

const cloudinaryConfig = {
  cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
};

const StyledInput = styled.input`
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  border: none;
  background: aliceblue;
  text-align: center;
  outline: none;
  cursor: pointer;
`;

const Preview = styled.img`
  max-width: 40%;
`;

const CustomImageField = ({ name, label }) => {
  const {
    input: { onChange, value },
    meta: { touched, error }
  } = useField(name);

  return (
    <div>
      <StyledInput
        name={name}
        label={label}
        placeholder="Click here for upload cover"
        readOnly
        onClick={() => {
          window.cloudinary
            .createUploadWidget(cloudinaryConfig, (error, result) => {
              if (!error && result && result.event === "success") {
                onChange({
                  target: {
                    value: result.info.secure_url,
                    name
                  }
                });
              }
            })
            .open();
        }}
        error={!!(touched && error)}
        helperText={touched && error}
      />
      <Preview src={value} alt="" />
    </div>
  );
};

export default CustomImageField;
