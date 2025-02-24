import { Box } from "@mui/material";
import Title from "@components/texts/Title";

const Section = ({ secId, title = null, children }) => (
    <Box id={secId}
        className={`nav-top-padding`}
        sx={{
            minHeight: '100vh',
            width: '100%',
            textAlign: 'center',
            maxWidth: 'calc(100% - 60px)',
            margin: '0px 30px'
        }}
    >
        {/* Titulo */}
        {title && <Title text={title} />}

        {/* Contenido */}
        <Box
            sx={{
                padding: '20px 0px'
            }}
        >
            {children}
        </Box>
    </Box>
)

export default Section;