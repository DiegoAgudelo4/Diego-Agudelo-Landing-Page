import { Box, Typography } from "@mui/material";

const BodySection = ({ title, image, text, float = "right" }) => (
    <Box
        sx={{
            position: 'relative',
            maxWidth: '1200px',
            margin: '0 auto',
            "&::after": {  // Clearfix para evitar que otros elementos suban
                content: '""',
                display: 'table',
                clear: 'both'
            }
        }}
    >
        {/* Imagen flotante */}
        <Box
            component="img"
            src={`${import.meta.env.BASE_URL}${image}`}
            alt={title}
            sx={{
                width: { xs: '100%', md: '40%' },
                height: 'auto',
                borderRadius: 2,
                objectFit: 'cover',
                boxShadow: 3,
                float: float,
                margin: { xs: '0 auto 16px', md: '0 16px 16px 16px' },
            }}
        />

        {/* Texto alrededor de la imagen */}
        <Typography
            variant="body1"
            sx={{
                textAlign: 'justify',
                lineHeight: 1.6,
                fontSize: { xs: '14px', md: '16px' },

            }}
        >
            {text}
        </Typography>
    </Box>
);

export default BodySection;