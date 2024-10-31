import React, { useEffect } from "react";
import Tabs from "../data/tabs.json";
import { Typography } from "@material-tailwind/react";

const FormReview = ({ id }) => {
    const [fieldsToReview, setFieldsToReview] = React.useState([]);
    useEffect(() => {
        const reviewData = JSON.parse(localStorage.getItem(`expungement_form-${id}`)) || {};
        console.log(reviewData);
        const currentReviewTab = Tabs.find((tab) => tab.value === id);
        const reviewFields = [];
        currentReviewTab.stepper.forEach((step) => {
            step.fields.forEach((field) => {
                reviewFields.push({
                    "title": field.label,
                    "value": reviewData[field.id]?.value || "",
                })
            });
        })
        setFieldsToReview(reviewFields);
    }, [id]);

    return (
        <>
            {fieldsToReview.map((field, index) => (
                <div key={index}>
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="py-1 font-black font-bold"
                    >
                        {field.title}
                        <span className="antialiased font-sans text-sm leading-normal text-gray-700 py-1 font-black"> {field.value}</span>
                    </Typography>
                </div>
            ))}
        </>
    )
}

export default FormReview;