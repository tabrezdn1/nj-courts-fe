import React, { useEffect } from "react";
import Tabs from "../data/tabs.json";
import { Typography } from "@material-tailwind/react";

const FormReview = ({ id, activeTab }) => {
    const [fieldsToReview, setFieldsToReview] = React.useState([]);
    
    useEffect(() => {
        setReviewData();
    }, [id]);

    useEffect(() => {
        if (activeTab === "information-review") {
            setReviewData();
        }
    }, [activeTab]);

    const setReviewData = () => {
        const reviewData = JSON.parse(localStorage.getItem(`expungement_form-${id}`)) || {};
        const currentReviewTab = Tabs.find((tab) => tab.value === id);
        const reviewFields = [];
        currentReviewTab.stepper.forEach((step) => {
            step.fields.forEach((field) => {
                const value = reviewData[field.id]?.value || "";
                reviewFields.push({
                    "title": field.label,
                    "value": field.type === "radio" && !value ? "N/A" : value
                })
                if (reviewData[field.id]?.value && field.subFields && Object.keys(field.subFields).length > 0 && field.subFields[reviewData[field.id]?.value]) {
                    field.subFields[reviewData[field.id]?.value].forEach((subField) => {
                        const value = reviewData[subField.id]?.value || "";
                        reviewFields.push({
                            "title": subField.label,
                            "value": subField.type === "radio" && !value ? "N/A" : value
                        })
                    })
                }
            });
        })
        setFieldsToReview(reviewFields);
    }

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