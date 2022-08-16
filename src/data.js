import chartImage1 from "./assets/chart1.jpg"
import chartImage2 from "./assets/chart2.jpg"
import chartImage3 from "./assets/chart3.jpg"
import chartImage4 from "./assets/chart4.jpg"

export const usersArray = [
    {
        id: 0,
        name: "A2B restaurant",
        username: "a2brestaurant",
        password: "a2brestaurant123",
        content: {
            charts: [
                {
                    id: 0,
                    src: chartImage1
                },
                {
                    id: 1,
                    src: chartImage2
                },
                {
                    id: 2,
                    src: chartImage3
                },
                {
                    id: 3,
                    src: chartImage4
                },
            ]
        }
    },
    {
        id: 1,
        name: "DruidGarden Restaurant",
        username: "druidgarden",
        password: "druidgarden123",
    },
    {
        id: 2,
        name: "Subway Restaurant",
        username: "subway",
        password: "subway123",
    },
]