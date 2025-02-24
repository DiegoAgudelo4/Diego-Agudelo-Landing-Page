import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useSectionObserver = (prefix = "hm", visibilityThreshold = 0.6) => {
    const [sectionObserved, setSectionObserved] = useState("");
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            let maxVisibleArea = 0;
            let currentSection = sectionObserved; // Mantiene la sección actual si no hay cambios

            const elements = Array.from(document.querySelectorAll("[id]")).filter((el) =>
                el.id.startsWith(prefix)
            );

            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const elementHeight = rect.height;
                const elementWidth = rect.width;

                // Calcular la parte visible en altura y ancho
                const visibleHeight = Math.max(0, Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top));
                const visibleWidth = Math.max(0, Math.min(window.innerWidth, rect.right) - Math.max(0, rect.left));

                const visibleArea = visibleHeight * visibleWidth;
                const totalArea = elementHeight * elementWidth;

                // Verifica si el área visible cumple con el umbral y si es la mayor
                if (visibleArea / totalArea >= visibilityThreshold && visibleArea > maxVisibleArea) {
                    maxVisibleArea = visibleArea;
                    currentSection = element.id;
                }
            });

            // Solo actualiza si hay un cambio y evita valores vacíos
            setSectionObserved((prev) => (prev !== currentSection ? currentSection : prev));
        };

        handleScroll(); // Ejecutar al inicio
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prefix, visibilityThreshold, location, sectionObserved]);

    return sectionObserved;
};

export default useSectionObserver;
