import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid2 } from '@mui/material';

// Datos de ejemplo
const projectData = [
    {
        title: 'ISIBI',
        description: 'Integrador de sistemas de información Bibliográfica',
        image: 'img/ISIBI/HomeISIBI.png',
    },
    {
        title: 'Hikari Tienda de ropa',
        description: 'Página web de una tienda de ropa',
        image: 'img/Hikari/Home.png',
    },
];

export const ProyectList = () => {
    return (
        <Box sx={{ padding: '2rem' }}>
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
                                sx={{ height: 250 }} 
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
