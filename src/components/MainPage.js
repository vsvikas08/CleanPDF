import {
    Box,
    Button,
    Divider,
    makeStyles,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));
const MainPage = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    function getSteps() {
        return [
            "Upload Your PDF",
            "Your PDF Underprocess",
            "Download Your Clean PDF",
        ];
    }
    function getStepContent(step) {
        switch (step) {
            case 0:
                return `In first step you have to upload document file from your local device. And file should be in pdf format only.`;
            case 1:
                return "Your file is undergoing through magical algorithm that will remove handwritten scratches from your document and convert it back into pdf";
            case 2:
                return `Woohoo!!!! Your file is clean and ready to download.`;
            default:
                return "Unknown step";
        }
    }
    const steps = getSteps();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <div style={{ margin: "20px", width: "40%" }}>
                <Typography variant="h4">Steps</Typography>

                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>
                                <Typography variant="h5">{label}</Typography>
                            </StepLabel>
                            <StepContent>
                                <div style={{ display: "flex" }}>
                                    {index == 0 && (
                                        <CloudUploadIcon
                                            style={{
                                                fontSize: "100px",
                                                color: "#3f51b5",
                                                marginRight: "25px",
                                            }}
                                        />
                                    )}
                                    {index == 1 && (
                                        <ImageSearchIcon
                                            style={{
                                                fontSize: "100px",
                                                color: "#3f51b5",
                                                marginRight: "25px",
                                            }}
                                        />
                                    )}
                                    {index == 2 && (
                                        <CloudDownloadIcon
                                            style={{
                                                fontSize: "100px",
                                                color: "#3f51b5",
                                                marginRight: "25px",
                                            }}
                                        />
                                    )}
                                    <Typography
                                        variant="body"
                                        style={{
                                            fontSize: "18px",
                                            color: "gray",
                                        }}
                                    >
                                        {getStepContent(index)}
                                    </Typography>
                                </div>
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1
                                                ? "Finish"
                                                : "Next"}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </div>
            <div style={{ display: "block", margin: "auto" }}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        paddingLeft: "40px",
                        paddingRight: "40px",
                        background: "#00cc00",
                    }}
                >
                    <Typography
                        variant="subtitle2"
                        style={{ fontSize: "18px", fontWeight: "600" }}
                    >
                        Clean PDF Now
                    </Typography>
                </Button>
            </div>
        </>
    );
};

export default MainPage;
