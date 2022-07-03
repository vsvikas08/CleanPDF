import { AppBar, Typography } from "@material-ui/core";
import React from "react";

function Navbar(props) {
    return (
        <>
            <AppBar
                position="static"
                style={{ padding: "15px", display: "flex" }}
            >
                <Typography variant="h4">cleanPDF</Typography>

                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        right: "10px",
                    }}
                >
                    <Typography variant="h6" style={{ paddingRight: "15px" }}>
                        About
                    </Typography>
                    <Typography variant="h6" style={{ paddingRight: "10px" }}>
                        Clean Now
                    </Typography>
                </div>
            </AppBar>
        </>
    );
}

export default Navbar;
