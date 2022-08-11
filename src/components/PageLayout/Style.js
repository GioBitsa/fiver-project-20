import { MenuList } from "@mui/material";
import { styled } from "@mui/system";


export const MyMenuList = styled(MenuList)({
    marginTop: "20px",
    
    '& .MuiMenuItem-root': {
        padding: "20px 20px"
    },
    '& .MuiListItemText-root': {
        whiteSpace: "normal",
        overflow: "hidden"
    },
    '& .Mui-selected, .Mui-selected svg': {
        color: "#a5a6f6",
        backgroundColor: "transparent !important"
    }
})