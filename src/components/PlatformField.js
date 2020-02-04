import React from "react";

const PlatformField = ({ source, record = {} }) => <span>{record[source]}</span>;

export default PlatformField;
