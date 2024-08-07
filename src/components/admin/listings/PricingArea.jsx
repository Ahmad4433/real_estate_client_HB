import React from "react";
import "./pricingArea.css";
import Input from "../../ui/Input";
import Box from "../common/Box";
import Lable from "../common/Lable";
import SectionTitle from "../common/SectionTitle";
import Select from "../../ui/Select";
import FormPair from "../common/FormPair";
import MultiPair from "../common/MultiPair";
import convertPrice from "../../../utils/amountConver";
const PricingArea = ({
  onPriceChange,
  onAreaChange,
  onUnitChange,
  price,
  area,
  beds,
  onBedChange,
  baths,
  onBathChange,
}) => {
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
                  name="price"
                  value={price}
                  onChange={onPriceChange}
                  type="number"
                  placeholder="Enter Price"
                />
              </FormPair>
              <span style={{ color: "seagreen", fontWeight: "500" }}>
                {convertPrice(price)}
              </span>
            </div>
            <div className="pricing_area_area">
              <div className="pricing_area_item">
                <FormPair>
                  <Lable>Area Size</Lable>
                  <Input
                    type="number"
                    name="area"
                    value={area}
                    onChange={onAreaChange}
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
            <div className="listing_add_beds_container">
              <div>
                <FormPair>
                  <Lable>Beds</Lable>
                  <Input
                    name="beds"
                    value={beds}
                    onChange={onBedChange}
                    type="number"
                  />
                </FormPair>
              </div>
              <div>
                <FormPair>
                  <Lable>Baths</Lable>
                  <Input
                    name="baths"
                    onChange={onBathChange}
                    value={baths}
                    type="number"
                  />
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
