import { useEffect, useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
// import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import useSectionObserver from "../../hooks/useSectionObserver";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const sectionsDefault = [
    { id: "py-home", label: "Inicio" },
    { id: "py-drescription", label: "Descripcion" },
    { id: "py-tech-used", label: "Tecnologías usadas" },
    { id: "py-arch", label: "Arquitectura usada" },
    { id: "py-test", label: "Pruebas" },
    { id: "py-deploy", label: "Despliegue" },
];

const SideBar = ({ sections = sectionsDefault, anchor = 'right' }) => {
    const navigate = useNavigate()
    const activeSection = useSectionObserver('py', 0.8)

    const handleClick = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Drawer
            variant="permanent"
            anchor={anchor}
            sx={{
                "& .MuiDrawer-paper": {
                    // marginTop: '70px',
                    // marginBottom: '70px',
                    // width: '200px',
                    // inlineSize: "max-content",
                    height: "100%",
                    position: "fixed",
                    // top: 0,
                    // right: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    // alignItems: "center",
                    background: "transparent",
                    zIndex: '9',
                    overflow: 'hidden'
                },
            }}
        >
            <List
                // sx={{
                //     background: 'black'
                // }}
            >
                {sections.map((section) => (
                    <ListItem
                        button
                        key={section.id}
                        onClick={() => handleClick(section.id)}
                        className={activeSection === section.id ? "active" : ""}
                        sx={{
                            color: activeSection === section.id ? '#FFFFFF' : '#A8A2C8',
                            transform: activeSection === section.id ? "scale(1.1)" : "scale(1)", // Efecto zoom
                            transition: "transform 0.2s ease-in-out",
                            '&:hover':{
                                color: '#FFFFFF'
                            }
                        }}
                    >
                        <ListItemText primary={section.label}
                        />
                    </ListItem>
                ))}
                <ListItem
                    button
                    onClick={() => navigate('/my-projects')}
                    sx={{
                        color: '#A8A2C8'
                    }}
                >
                    <ListItemIcon>
                        <ArrowBackIcon sx={{
                            color: '#A8A2C8'
                        }} />
                    </ListItemIcon>
                    <ListItemText primary={"volver"} />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideBar;
