import React, { useState, useEffect } from "react";
import ApiRequest from "../helpers/request";

export interface PatientProps {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    avatar: string;
    dob: string;
    contactDetails: {
        telephone: string;
        email: string;
    };
    address: {
        street: string;
        postcode: string;
        city: string;
        county: string;
    };
    gp: {
        title: string;
        firstName: string;
        practice: {
            name: string;
            address: {
                street: string;
                postcode: string;
                city: string;
                county: string;
            };
        };
    };
    medication: {
        medication: string;
        endDate: string;
        startDate: string;
    }[];
}