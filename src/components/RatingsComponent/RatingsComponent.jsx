import React from 'react'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { Stack, Typography } from "@mui/material"

const data = [
    {
        uv: 2000,
    },
    {
        uv: 1000,
    },
    {
        uv: 3000,
    },
    {
        uv: 2000,
    },
    {
        uv: 2780,
    },
    {
        uv: 1890,
    },
    {
        uv: 2390,
    },
    {
        uv: 3490,
    },
    {
        uv: 2000,
    },
    {
        uv: 1000,
    },
    {
        uv: 3000,
    },
    {
        uv: 2000,
    },
    {
        uv: 2780,
    },
    {
        uv: 1890,
    },
    {
        uv: 2390,
    },
    {
        uv: 3490,
    },
    {
        uv: 2000,
    },
    {
        uv: 1000,
    },
    {
        uv: 3000,
    },
    {
        uv: 2000,
    },
    {
        uv: 2780,
    },
    {
        uv: 1890,
    },
    {
        uv: 2390,
    },
    {
        uv: 3490,
    },
    {
        uv: 2000,
    },
    {
        uv: 1000,
    },
    {
        uv: 3000,
    },
    {
        uv: 2000,
    },
    {
        uv: 2780,
    },
    {
        uv: 1890,
    },
    {
        uv: 2390,
    },
    {
        uv: 3490,
    },
];

const RatingsComponent = () => {
    return (
        <>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ minHeight: "50px" }}>
                <Typography
                    variant="span"
                    component="span"
                >
                    Ratings change over time
                </Typography>
                <Typography
                    variant="span"
                    component="span"
                    sx={{
                        color: "#a5a6f6",
                    }}
                >
                    4.2
                </Typography>
            </Stack>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width="100%"
                    height="100%"
                    data={data}
                    style={{ width: "100%", height: "250px" }}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 20,
                    }}
                >
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#a5a6f6" fill="#a5a6f6" />
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}

export default RatingsComponent