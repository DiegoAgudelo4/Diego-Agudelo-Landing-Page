import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
const TextListComponent = ({ textList }) => {
    return (
        <Box sx={{ padding: 2, textAlign: 'justify', margin:'10px 0px' }}>
            {textList?.map((item, index) => (
                <Box key={index} sx={{ marginBottom: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {item.textTitle}
                    </Typography>
                    <Box sx={{ paddingLeft: 4 }}>
                        {item.list.map((point, i) => (
                            <Typography key={i} variant="body1">
                                ● {point}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

// TextListComponent.propTypes = {
//     textList: PropTypes.arrayOf(
//         PropTypes.shape({
//             textTitle: PropTypes.string.isRequired,
//             list: PropTypes.arrayOf(PropTypes.string).isRequired,
//         })
//     ).isRequired,
// };


const BodySection = ({ title, image, text, float = "right", textList = null }) => (
    <Box
        sx={{
            position: 'relative',
            maxWidth: '1200px',
            margin: '0 auto',
            marginTop: '20px',
            "&::after": {  // Clearfix para evitar que otros elementos suban
                content: '""',
                display: 'table',
                clear: 'both'
            }
        }}
    >
        {/* Imagen flotante */}
        {image &&
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
        }
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

        <TextListComponent textList={textList} />
    </Box>
);

export default BodySection;