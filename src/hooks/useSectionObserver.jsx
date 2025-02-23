import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useSectionObserver = (prefix = "hm", visibilityThreshold = 0.6) => {
    const [sectionObserved, setSectionObserved] = useState("");
    const location= useLocation();

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "";

            // Seleccionar solo elementos con id que empiezan con el prefijo dado
            const elements = Array.from(document.querySelectorAll("[id]")).filter((el) =>
                el.id.startsWith(prefix)
            );

            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const elementHeight = rect.height;

                // Calcular la parte visible del elemento
                const visibleHeight =
                    Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);

                // Si al menos el porcentaje definido del elemento es visible, lo marcamos como la sección actual
                if (visibleHeight / elementHeight >= visibilityThreshold) {
                    currentSection = element.id;
                }
            });

            setSectionObserved(currentSection);
        };
        //ejecuta una vez cuando cambia algún estado
        handleScroll()
        //ejecuta cada vez que se realiza scroll
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prefix, visibilityThreshold, location]);

    return sectionObserved;
};

export default useSectionObserver;
