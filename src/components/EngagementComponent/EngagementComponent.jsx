import React from 'react'
import { IconButton, Stack, Typography } from "@mui/material"
import { FiSettings } from "react-icons/fi"
import russianFlag from "../../assets/russia.png"

const data = [
    {
        text: "united states",
        width: 50,
        maxWidth: 80,
    },
    {
        text: "russia",
        width: 75,
        maxWidth: 90,
    },
    {
        text: "ukraine",
        width: 30,
        maxWidth: 60,
    },
    {
        text: "india",
        width: 20,
        maxWidth: 55,
    },
    {
        text: "china",
        width: 60,
        maxWidth: 75,
    },
];

const EngagementComponent = () => {

    const colors = ["#54a0ff", "#80e5ca", "#ffdbdb",]

    return (
        <>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ minHeight: "50px" }}>
                <Stack>
                    <Typography
                        variant="span"
                        component="span"
                    >
                        Engagement by countries
                    </Typography>
                    <Stack direction="row" alignItems="center">
                        <img src={russianFlag} alt="russia" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
                        <Typography
                            variant="span"
                            component="span"
                            sx={{
                                color: "#a5a6f6",
                                fontSize: "12px",
                                marginLeft: "10px"
                            }}
                        >
                            Top countries
                        </Typography>
                    </Stack>
                </Stack>
                <IconButton size="small">
                    <FiSettings />
                </IconButton>
            </Stack>
            <div className='myVerticalChart'>
                {data.map((item) =>
                    <div className='verticalBarMain' style={{ width: `${item.maxWidth}%` }}>
                        <div className='verticalBar' style={{ width: `${item.width}%` }}>{item.text}</div>
                    </div>
                )}
            </div>
            <Stack justifyContent="center" sx={{ flexWrap: "wrap" }} spacing={2} direction="row">
                {colors?.map((item, index) =>
                    <Stack alignItems="center" sx={{ padding: "10px" }}>
                        <div style={{
                            backgroundColor: item,
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                        }} />
                        <p style={{ fontSize: "14px", }}>Color {index + 1}</p>
                    </Stack>
                )}
            </Stack>
        </>
    )
}

export default EngagementComponent
