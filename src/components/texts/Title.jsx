import { Box, Typography } from "@mui/material";

const Title = ({ text, variant='h4' }) =>
    (
        <Box
            sx={{
                textAlign: 'center',
                paddingTop: '20px'
    
            }}>
            <Typography
                variant={variant}
                sx={{
                    borderBottom: "2px solid #FF4655",
                    display: "inline-block",
                }}
            >
                {text}
            </Typography>
        </Box>
    
    )
    export default Title