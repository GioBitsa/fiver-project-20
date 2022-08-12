import React from 'react'
import { Stack, Typography } from "@mui/material"

const data = [
    {
        top: 10,
        left: 10,
        content: "25%",
    },
    {
        top: 50,
        left: 50,
        content: "125%",
    },
    {
        top: 70,
        left: 70,
        content: "75%",
    },
];

const colors = ["#54a0ff", "#80e5ca", "#ffdbdb",]

const BubbleChart = () => {

    const getRandomColor = (list) => {
        return list[Math.floor((Math.random() * list.length))]
    }

    const getRandomSize = () => {
        return Math.floor(Math.random() * 51 + 30);
    }

    return (
        <>
            <Typography
                variant="span"
                component="div"
                sx={{
                    minHeight: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start"
                }}
            >
                Sentiment analysis: Bubble chart
            </Typography>
            <div className='myBubblesChart'>
                {data.map((item, index) => {
                    const size = getRandomSize()
                    return <div
                        style={{
                            position: "absolute",
                            top: `${item.top}%`,
                            left: `${item.left}%`,
                            backgroundColor: getRandomColor(colors),
                            borderRadius: "50%",
                            width: size,
                            height: size,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "14px",
                            zIndex: index,
                        }}>
                        {item.content}
                    </div>
                }
                )}
            </div>
            <Stack justifyContent="center" sx={{ flexWrap: "wrap" }} spacing={2} direction="row">
                {colors.map((item, index) =>
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

export default BubbleChart