import React from "react";
import { PROCEDURES } from "@constants";
import { VerticalUtinities } from "@components";

const data = PROCEDURES;

const Procedures = () => (
    <VerticalUtinities title="Quy trình lên lịch - đặt đơn" utinities={data} />
);

export default Procedures;
