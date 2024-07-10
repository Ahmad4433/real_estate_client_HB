import React from "react";
import "./pricingArea.css";
import Input from "../../ui/Input";
import Box from "../common/Box";
import Lable from "../common/Lable";
import SectionTitle from "../common/SectionTitle";
import Select from "../../ui/Select";
import FormPair from "../common/FormPair";
import MultiPair from "../common/MultiPair";
const PricingArea = ({ onPriceChange, onAreaChange, onUnitChange }) => {
  const areasUnitOptions = [
    { title: "Marla" },
    { title: "Sq.Ft" },
    { title: "Kanal" },
  ];

  return (
    <div className="pricing_area_main">
      <Box padding="1.6rem" radius="12px" bg="white">
        <div>
          <SectionTitle bottom="1rem" title="Pricing" />
          <MultiPair>
            <div>
              <FormPair>
                <Lable>Price</Lable>
                <Input
                  onChange={onPriceChange}
                  type="text"
                  placeholder="Enter Price"
                />
              </FormPair>
            </div>
            <div className="pricing_area_area">
              <div className="pricing_area_item">
                <FormPair>
                  <Lable>Area Size</Lable>
                  <Input
                    onChange={onAreaChange}
                    type="text"
                    placeholder="Enter Size"
                  />
                </FormPair>
              </div>
              <div className="pricing_area_item">
                <FormPair>
                  <Lable>Unit</Lable>
                  <Select onChange={onUnitChange} options={areasUnitOptions} />
                </FormPair>
              </div>
            </div>
          </MultiPair>
        </div>
      </Box>
    </div>
  );
};

export default PricingArea;
