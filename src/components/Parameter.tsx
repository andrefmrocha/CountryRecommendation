import React, { useState, useEffect } from "react";
import {
  datasetsMappingByTheme,
  ThemeMapping,
  ThemeMappingItem,
  Categories,
} from "../data/datasets/datasetsMapping";
import Checkbox from "./common/Checkbox";
import InfoIcon from "./common/InfoIcon";

type props = {
  selectedCategory: Categories | undefined;
  includeCategory: boolean;
  calculate: (datasetMappingByTheme: ThemeMappingItem[]) => void;
};

function Parameter({ selectedCategory, includeCategory, calculate }: props) {
  const [parameters, setParameters] = useState<Array<ThemeMappingItem>>();

  useEffect(() => {
    if (!selectedCategory) return;

    const params: Array<ThemeMappingItem> =
      datasetsMappingByTheme[selectedCategory];

    setParameters(params);
  }, [selectedCategory]);

  function onClick() {
    if (parameters) calculate(parameters);
  }

  function getParameters() {
    return parameters?.map((parameter, index) => (
      <div className="parameter">
        <Checkbox
          checked={parameter.isUsed}
          disabled={!includeCategory}
          onClick={() => {
            setParameters([
              ...parameters.map((param) => {
                return {
                  ...param,
                  isUsed:
                    param.name !== parameter.name
                      ? param.isUsed
                      : !param.isUsed,
                };
              }),
            ]);
          }}
          type="small"
        />
        <p>{parameter.name}</p>
        <InfoIcon
          parameter={parameter.name}
          dataset={parameter.dataset}
          fields={parameter.fields}
        />
      </div>
    ));
  }

  return (
    <div className="parameter-panel">
      <label htmlFor="parameters">{selectedCategory} Parameters</label>
      <section className="parameters-selection">{getParameters()}</section>
      <button disabled={!includeCategory} onClick={onClick}>
        Calculate
      </button>
    </div>
  );
}

export default Parameter;
