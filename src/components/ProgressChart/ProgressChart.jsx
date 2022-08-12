import React from 'react'
import { Stack, Typography, CircularProgress, Box } from "@mui/material"

const ProgressChart = () => {

    const progress = 12.5

    return (
        <>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ minHeight: "50px" }}>
                <Stack>
                    <Typography
                        variant="span"
                        component="span"
                    >
                        Negative sentiment
                    </Typography>
                    <Typography
                        variant="span"
                        component="span"
                        sx={{
                            opacity: "0.7"
                        }}
                    >
                        Positive to negative sentiment
                    </Typography>
                </Stack>
                <Typography
                    variant="span"
                    component="span"
                    sx={{
                        color: "#a5a6f6",
                    }}
                >
                    12.5%
                </Typography>
            </Stack>
            <Box sx={{ position: 'relative', display: 'inline-flex', width: "100%", height: "300px", overflow: "hidden" }}>
                <CircularProgress
                    className='myCircularProgressChart'
                    variant="determinate"
                    value={progress}
                    sx={{
                        width: "100% !important",
                        height: "100% !important",
                        zIndex: 1,
                    }}
                />
                <CircularProgress
                    className='myCircularProgressChart'
                    variant="determinate"
                    value={100}
                    sx={{
                        width: "100% !important",
                        height: "100% !important",
                        position: "absolute",
                        color: "#c5c5c5",
                    }}
                />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Stack alignItems="center">
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                color: "black",
                                fontWeight: "bold"
                            }}
                        >
                            {progress}%
                        </Typography>
                        <Typography
                            variant="caption"
                            component="div"
                            sx={{
                                textTransform: "uppercase",
                                fontWeight: "600"
                            }}
                        >
                            negative
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default ProgressChart