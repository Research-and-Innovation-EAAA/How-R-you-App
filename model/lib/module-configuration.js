// use translation IDs for names, propertyDescriptions, propertyMeasurements, questions and answers

Modules = [

    //Medicine module
    {
        name: "medicine",
        wizard: {
            steps: [
                {
                    stepName: "medicine",
                    stepTemplate: "client/components/wizard/medicine/qw-medicine-01.html",
                    validation: (registration) => {
                        return (registration.SixMP !== undefined) && (registration.MTX !== undefined);
                    }
                }
            ]
        },
        frontPage: {
            properties: [
                "SixMP", "MTX"
            ],
            propertyDescription: [
                "medicine.sixmp", "medicine.mtx"
            ],
            propertyMeasurement: [
                "medicine.mgDaily", "medicine.mgWeekly"
            ],
            iconUrl: "/medicintransparent.png",
            barClass: "bar-calm"
        }
    },

    //Bloodsample module
    {
        name: "bloodsamples",
        wizard: {
            steps: [
                {
                    stepName: "bloodsamples",
                    stepTemplate: "client/components/wizard/bloodsample/qw-bloodsample-01.html",
                    validation: (registration) => {
                        var isValid = true;
                        for (var property in registration) {
                            if (property === "_id" ||
                                property === 'timestamp' ||
                                property === 'createdBy' ||
                                property === 'createdAt' ||
                                property === 'moduleName')
                                continue;

                            var bloodsample = registration[property];
                            if (bloodsample != null) {
                                isValid = 0 <= parseFloat(bloodsample);
                                if (!isValid) {
                                    //invalid data
                                    console.log('Data is invalid at property ', property, '. Value is ', bloodsample);
                                    return isValid;
                                }
                            }
                        }
                        return isValid;
                    }
                }
            ]
        },
        frontPage: {
            properties: [
                "Thrombocytter", "Hemoglobin", "Alat"
            ],
            propertyDescription: [
                "bloodsamples.thrombocytes", "bloodsamples.hemoglobin", "bloodsamples.alat"
            ],
            propertyMeasurement: [
                "bloodsamples.thrombocytes_measure", "bloodsamples.hemoglobin_measure", "bloodsamples.alat_measure"
            ],
            iconUrl: "/blodtransparent.png",
            barClass: "bar-assertive"
        }
    },

    //Pain module
    {
        name: "pain",
        wizard: {
            steps: [
                {
                    stepName: "pain.morphine",
                    stepTemplate: "client/components/wizard/pain/qw-pain-01.html",
                    validation: (registration) => {
                        var isValidMorphine = true;
                        if (registration.morphineType != null) {
                            //if there is a selected morphine type
                            // check there is valid dose
                            if (registration.morphineDose == null || registration.morphineDose < 0)
                                isValidMorphine = false;
                        } else {
                            //if there is no selected morphine type
                            // check if there is valid dose
                            // to avoid confusion, if there is valid dose but no valid type
                            // do not validate until type is chosen or dose deleted
                            if (registration.morphineDose != null) {
                                isValidMorphine = false;
                            } else {
                                registration.morphineType = null;
                                registration.morphineDose = null;
                                registration.morphineMeasureUnit = null;
                            }
                        }
                        return isValidMorphine;
                    }
                },
                {
                    stepName: "pain.type",
                    stepTemplate: {
                        url: "client/components/wizard/templates/simple-question.html",
                        config: {
                            propertyName: "painType",
                            question: "pain.whereIsPain",
                            answers: ["pain.stomach", "pain.legs", "pain.arms", "pain.head", "pain.other"]
                        }
                    },
                    validation: (registration) => {
                        return registration.painType !== undefined;
                    }
                },
                {
                    stepName: "pain.intensity",
                    stepTemplate: "client/components/wizard/pain/qw-pain-03.html",
                    validation: (registration) => {
                        var isValid;
                        if (registration.flaccvalue != null) {
                            isValid = registration.flaccvalue[0] != null &&
                                registration.flaccvalue[1] != null &&
                                registration.flaccvalue[2] != null &&
                                registration.flaccvalue[3] != null &&
                                registration.flaccvalue[4] != null;
                        } else {
                            isValid = registration.painScore != null;
                        }
                        return isValid;
                    }
                }
            ]
        },
        frontPage: {
            propertyFunction: (registration, rowNumber) => {
                var message = 'Ingen data';
                if (registration === undefined)
                    return message;

                switch (rowNumber) {
                    case 0:
                        message = registration.painType;
                        break;
                    case 1:
                        message = registration.painScore + "";
                        break;
                    case 2:
                        if (registration.morphineDose !== undefined && registration.morphineDose > 0) {
                            message = registration.morphineDose;
                            if (registration.morphineMeasureUnit !== undefined) {
                                // accessing the Angular $translate service from outside of Angular scope
                                $translate = angular.element(document.body).injector().get('$translate');
                                message += "  " + $translate.instant(registration.morphineMeasureUnit);
                            }
                        }
                        else
                            message = 'Ingen morfin';
                        break;
                }
                return message;
            },
            propertyDescription: [
                "pain.painType", "pain.painIntensity", "pain.morphine"
            ],
            iconUrl: "/smertetransparent.png",
            barClass: "bar-balanced"
        }
    },

    //Mucositis module
    {
        name: "mucositis",
        wizard: {
            steps: [
                {
                    stepName: "mucositis.mouthSores",
                    stepTemplate: "client/components/wizard/mucositis/qw-mucositis-01.html",
                    validation: (registration) => {
                        var isValid = true;
                        for (i = 0; i < 3; i++) {
                            if (registration.diagnosis[i] === undefined) {
                                isValid = false;
                                break;
                            }
                        }
                        return isValid;
                    }
                },
                {
                    stepName: "mucositis.nausea",
                    stepTemplate: "client/components/wizard/mucositis/qw-mucositis-02.html",
                    validation: (registration) => {
                        return (registration.nauseaScore >= 0) && (registration.nauseaScore <= 10);
                    }
                }
            ]
        },
        frontPage: {
            propertyFunction: (registration, rowNumber) => {
                var message = 'Ingen data';
                if (registration === undefined)
                    return message;

                var diagnosis;
                switch (rowNumber) {
                    case 0: // pain row
                        diagnosis = registration.diagnosis[rowNumber];
                        message = "mucositis.pain" + diagnosis;
                        break;
                    case 1: // sores row
                        diagnosis = registration.diagnosis[rowNumber];
                        message = "mucositis.sores" + diagnosis;
                        break;
                    case 2: // food intake row
                        diagnosis = registration.diagnosis[rowNumber];
                        message = "mucositis.foodIntake" + diagnosis;
                        break;
                }
                return message;
            },
            propertyDescription: [
                "mucositis.pain", "mucositis.soresRedness", "mucositis.foodIntake"
            ],
            iconUrl: "/mucositistransparent.png",
            barClass: "bar-energized"
        }
    },

    //Arthritis pain module
    {
        name: "arthritis",
        wizard: {
            steps: [
                {
                    stepName: "arthritis.pain",
                    stepTemplate: {
                        url: "client/components/wizard/templates/pain-scale-slider.html",
                        config: {
                            propertyName: "painScore",
                            minValue: 0,
                            maxValue: 10,
                            step: 0.5
                        }
                    },
                    validation: (registration) => {
                        return registration.painScore !== undefined;
                    }
                }
            ]
        },
        frontPage: {
            properties: [
                "painScore"
            ],
            propertyDescription: [
                "arthritis.intensity"
            ],
            iconUrl: "/smertetransparent.png",
            barClass: "bar-royal"
        }
    }
];