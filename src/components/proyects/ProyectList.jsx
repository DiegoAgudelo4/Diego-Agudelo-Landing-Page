import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Datos de ejemplo
const projectData = [
    {
        id: 'isibi',
        title: 'ISIBI',
        description: 'Integrador de sistemas de información Bibliográfica',
        image: 'img/ISIBI/HomeISIBI.png',
    },
    {
        id: 'hikari',
        title: 'Hikari Tienda de ropa',
        description: 'Página web de una tienda de ropa',
        image: 'img/Hikari/Home.png',
    },
];

export const ProyectList = () => {
    const navigate  = useNavigate()
    return (
        <Box sx={{ padding: '2rem', minHeight: '100vh' }}>
            <Typography variant="h4" gutterBottom>
                Lista de Proyectos
            </Typography>
            <Grid2 container spacing={3}>
                {projectData.map((project, index) => (
                    <Grid2 item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                image={project.image}
                                alt={project.title}
                                sx={{ height: 250, cursor: 'pointer' }} 
                                onClick={() => navigate(`/my-projects/${project.id}`)}
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
