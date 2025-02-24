import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Title from '../texts/Title';

// Datos de ejemplo
const projectData = [
    {
        id: 'isibi',
        title: 'ISIBI',
        description: 'Integrador de sistemas de información Bibliográfica',
        image: 'img/ISIBI/HomeISIBI.png',
    },
    // {
    //     id: 'hikari',
    //     title: 'Hikari Tienda de ropa',
    //     description: 'Página web de una tienda de ropa',
    //     image: 'img/Hikari/Home.png',
    // },
];

export const ProyectList = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ padding: '2rem', minHeight: '100vh', textAlign: 'center' }}>
            <Title text={'Lista de proyectos'} />

            <Grid2
                container
                spacing={6}
                marginTop="30px"
                alignItems="center" // Centra verticalmente
                justifyContent="center" // Centra horizontalmente
            >
                {projectData.map((project, index) => (
                    <Grid2 item xs={12} sm={6} md={4} key={index}>
                        <Card
                            onClick={() => navigate(`/my-projects/${project.id}`)}
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                                transition: "transform 0.2s ease-in-out",
                                '&:hover': {
                                    borderBottom: '2px solid #FF4655',
                                    transform: "scale(1.1)",
                                    transition: "transform 0.2s ease-in-out",
                                }
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={project.image}
                                alt={project.title}
                                sx={{
                                    height: { sx: 150, md: 250 },
                                }}

                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

export default ProyectList;
