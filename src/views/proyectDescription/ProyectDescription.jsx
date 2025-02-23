import { Alert, Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import SideBar from "@components/sideBar/SideBar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Title from "@components/texts/Title";

const sections = [
    { id: "py-home", label: "Inicio" },
    { id: "py-drescription", label: "Descripcion" },
    { id: "py-tech-used", label: "Tecnologías usadas" },
    { id: "py-arch", label: "Arquitectura usada" },
    { id: "py-test", label: "Pruebas" },
    { id: "py-deploy", label: "Despliegue" },
];

const proyectInfoData =
    [{
        id: 'isibi',
        title: 'ISIBI: Integrador de sistemas de información Bibliográfica '
    }, {
        id: 'hikari',
        title: 'Hikari Tienda de ropa'
    }
    ]

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};



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


const ProyectDescription = () => {
    const { id } = useParams();

    const [proyectInfo, setProyectInfo] = useState(null);

    useEffect(() => {
        const foundProject = proyectInfoData.find((project) => project.id === id);

        if (foundProject) {
            setProyectInfo(foundProject);
        }
    }, [id]);

    useEffect(() => {
        scrollToTop()
    }, [])


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Box
                sx={{ display: 'flex', flexDirection: 'column' }}
            >
                {/* Contenido del proyecto */}
                <Box
                    sx={{
                        width: proyectInfo ? 'calc(100vw - 170px)' : '100%'
                    }}
                >
                    {proyectInfo ?
                        <>
                            <Section secId={'py-home'} title={proyectInfo.title}>
                                <Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'justify'
                                        }}
                                    >

                                        Laboris sit id ea nulla pariatur cillum anim aliquip proident deserunt cillum est esse. Dolore cillum cillum excepteur ullamco dolore minim. Quis non enim sunt minim.

                                        Lorem sunt adipisicing fugiat et labore duis velit excepteur amet deserunt irure duis. Consectetur consectetur irure consectetur commodo reprehenderit cupidatat laborum reprehenderit cupidatat culpa nulla Lorem culpa. Consequat in culpa minim nisi anim consectetur. Officia est elit cupidatat enim est ex consectetur duis cupidatat aliquip. Duis consequat nisi occaecat est dolor elit ea id aute id nisi ut laboris aliquip.

                                        Excepteur laboris qui minim tempor veniam Lorem anim voluptate culpa. Aliquip ut laborum dolor et ut qui ullamco laborum amet non. Ipsum eu eu fugiat occaecat consectetur elit ex quis Lorem nulla. Culpa aute eiusmod proident est excepteur fugiat voluptate tempor exercitation laborum cillum exercitation exercitation. Anim duis mollit non excepteur excepteur ex sunt ad consectetur nulla adipisicing. Adipisicing ut ex duis consequat culpa reprehenderit.

                                        Deserunt tempor ullamco mollit id esse eiusmod duis excepteur reprehenderit non magna aliqua proident aute. Eu consequat ex enim do. Deserunt reprehenderit labore in fugiat qui nulla consectetur incididunt aute magna. In tempor consequat ipsum exercitation sit cillum enim irure incididunt. Eu laborum exercitation qui ullamco aliqua sunt culpa pariatur et.

                                        Irure amet qui in nisi anim quis minim ullamco ullamco eiusmod. Veniam proident nulla do proident quis ad ullamco do velit. Sit ipsum sint mollit deserunt eu amet et cillum consequat exercitation dolor. Consectetur id cillum cupidatat tempor pariatur excepteur eiusmod ex veniam esse duis elit. Consectetur non quis est dolor commodo incididunt Lorem incididunt. Magna laboris mollit sint commodo est commodo reprehenderit.

                                        Sint amet et dolor fugiat sint ea minim irure do non tempor veniam. Irure ea ad ea et eu et sit non ipsum dolor. Sunt eiusmod non laborum elit cillum.

                                        Dolor sint labore aute ea elit. Laborum laboris aliquip ea pariatur aute deserunt. Eiusmod eu excepteur voluptate irure quis ullamco labore voluptate aliqua ullamco qui quis. Laboris ut tempor in aliquip pariatur enim incididunt. Reprehenderit pariatur pariatur consectetur est qui dolor velit cupidatat sint minim consectetur incididunt consequat.

                                        Mollit cillum nostrud laboris minim labore adipisicing. Anim aliqua commodo irure nisi eu nulla. Commodo aute eu eu sit irure.

                                        Adipisicing esse id officia pariatur velit occaecat sunt fugiat laboris id non. Culpa ullamco occaecat aute enim ullamco aliquip elit cupidatat incididunt commodo ex voluptate magna. Excepteur aliquip fugiat in et incididunt et aliqua in amet irure tempor do. Ut voluptate nulla enim cupidatat velit fugiat nulla ad. Ad duis incididunt velit laboris nulla. Irure magna velit magna nostrud anim dolore quis eu irure reprehenderit pariatur in.

                                        Laborum officia veniam qui id eiusmod Lorem ex laborum ut quis sit reprehenderit cupidatat laborum. Laboris quis ad ex in occaecat est est ullamco elit duis. Exercitation ea sit Lorem duis ut sit cupidatat in velit. Minim reprehenderit consectetur officia amet Lorem exercitation.
                                    </Typography>

                                </Box>
                            </Section>
                            <Section secId={'py-drescription'} title={"Descripción"}>
                                <Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'justify'
                                        }}
                                    >Incididunt duis velit excepteur adipisicing labore labore dolore ut nulla amet excepteur. Incididunt ipsum enim qui ipsum labore cillum veniam pariatur. Reprehenderit ut pariatur deserunt nulla eiusmod.

                                        Officia excepteur commodo nulla veniam cupidatat qui nulla laboris. Irure sint ullamco culpa esse minim ex ea eiusmod mollit. Qui deserunt ipsum eiusmod sunt consectetur est sit cillum in incididunt. Cillum nostrud dolor laboris irure ullamco duis exercitation irure tempor duis incididunt do amet. Consectetur nostrud id fugiat sunt ea nulla incididunt ipsum ipsum.

                                        Officia officia laboris cupidatat non aute enim exercitation anim voluptate nulla. Esse exercitation laboris cillum fugiat ullamco eu magna adipisicing eiusmod esse nostrud ullamco occaecat. Pariatur commodo tempor enim veniam duis pariatur. Qui ea officia ad voluptate id. Incididunt reprehenderit minim occaecat qui laborum velit voluptate. Enim tempor ea magna nisi nisi nisi sint officia. Sit aliquip ut sit aute occaecat aliqua ad ullamco laboris exercitation fugiat anim.

                                        Dolore dolore laborum ex aute reprehenderit cupidatat veniam eiusmod nisi quis. Amet et sit ea eiusmod fugiat. Ipsum aliquip eiusmod reprehenderit do esse deserunt nisi quis reprehenderit enim laboris aliqua. Est nostrud dolore consectetur sunt. Sit aliquip ipsum aute pariatur anim. Esse irure fugiat Lorem commodo laboris mollit qui est commodo excepteur labore ipsum excepteur.

                                        Culpa proident excepteur aliqua nostrud magna mollit ex veniam nostrud mollit. Occaecat elit adipisicing sint mollit amet irure reprehenderit. Irure Lorem culpa dolore Lorem nulla minim. Pariatur enim minim elit eiusmod duis aliquip ad. Ea duis exercitation eu commodo velit dolor adipisicing esse officia minim esse adipisicing velit.

                                        Officia minim tempor sint aute veniam enim esse esse officia. Ea in dolor laboris aliquip est id do pariatur nulla duis. Officia eiusmod tempor ad in cupidatat nostrud labore esse anim tempor exercitation dolor in est.

                                        Elit ullamco nulla duis consequat reprehenderit tempor sint eiusmod. Ut magna irure in nulla incididunt aliqua nulla sunt irure dolor esse quis dolor aliquip. Adipisicing eiusmod fugiat consectetur tempor eiusmod. Minim reprehenderit in duis eu eiusmod sunt ea nostrud irure sunt duis. Anim id culpa nostrud veniam sit pariatur elit in. Duis cupidatat eiusmod in fugiat minim aliquip nostrud quis officia id.

                                        Nostrud aliqua elit deserunt commodo. Deserunt Lorem dolor occaecat nostrud veniam culpa est sit proident aute est in. Consequat in sint laborum non ea. Non proident dolore consequat aliqua duis ex.

                                        Ut irure Lorem eiusmod id ex deserunt sint. Sunt ex quis id veniam minim. Non pariatur incididunt exercitation minim irure.

                                        Sint duis voluptate magna do proident cupidatat deserunt mollit veniam adipisicing aliqua. In minim nulla incididunt ipsum id veniam laborum esse. Dolore Lorem et ex sunt nostrud pariatur officia. Voluptate id non excepteur elit deserunt. Commodo deserunt esse fugiat adipisicing excepteur et fugiat minim. Elit tempor consequat quis esse occaecat. Do Lorem non minim ullamco adipisicing ullamco consequat minim minim ipsum qui excepteur velit cupidatat.

                                    </Typography>
                                </Box>
                            </Section>
                            <Section secId={'py-tech-used'} title={"Tecnologías usadas"}>
                                <Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'justify'
                                        }}
                                    >Incididunt duis velit excepteur adipisicing labore labore dolore ut nulla amet excepteur. Incididunt ipsum enim qui ipsum labore cillum veniam pariatur. Reprehenderit ut pariatur deserunt nulla eiusmod.

                                        Officia excepteur commodo nulla veniam cupidatat qui nulla laboris. Irure sint ullamco culpa esse minim ex ea eiusmod mollit. Qui deserunt ipsum eiusmod sunt consectetur est sit cillum in incididunt. Cillum nostrud dolor laboris irure ullamco duis exercitation irure tempor duis incididunt do amet. Consectetur nostrud id fugiat sunt ea nulla incididunt ipsum ipsum.

                                        Officia officia laboris cupidatat non aute enim exercitation anim voluptate nulla. Esse exercitation laboris cillum fugiat ullamco eu magna adipisicing eiusmod esse nostrud ullamco occaecat. Pariatur commodo tempor enim veniam duis pariatur. Qui ea officia ad voluptate id. Incididunt reprehenderit minim occaecat qui laborum velit voluptate. Enim tempor ea magna nisi nisi nisi sint officia. Sit aliquip ut sit aute occaecat aliqua ad ullamco laboris exercitation fugiat anim.

                                        Dolore dolore laborum ex aute reprehenderit cupidatat veniam eiusmod nisi quis. Amet et sit ea eiusmod fugiat. Ipsum aliquip eiusmod reprehenderit do esse deserunt nisi quis reprehenderit enim laboris aliqua. Est nostrud dolore consectetur sunt. Sit aliquip ipsum aute pariatur anim. Esse irure fugiat Lorem commodo laboris mollit qui est commodo excepteur labore ipsum excepteur.

                                        Culpa proident excepteur aliqua nostrud magna mollit ex veniam nostrud mollit. Occaecat elit adipisicing sint mollit amet irure reprehenderit. Irure Lorem culpa dolore Lorem nulla minim. Pariatur enim minim elit eiusmod duis aliquip ad. Ea duis exercitation eu commodo velit dolor adipisicing esse officia minim esse adipisicing velit.

                                        Officia minim tempor sint aute veniam enim esse esse officia. Ea in dolor laboris aliquip est id do pariatur nulla duis. Officia eiusmod tempor ad in cupidatat nostrud labore esse anim tempor exercitation dolor in est.

                                        Elit ullamco nulla duis consequat reprehenderit tempor sint eiusmod. Ut magna irure in nulla incididunt aliqua nulla sunt irure dolor esse quis dolor aliquip. Adipisicing eiusmod fugiat consectetur tempor eiusmod. Minim reprehenderit in duis eu eiusmod sunt ea nostrud irure sunt duis. Anim id culpa nostrud veniam sit pariatur elit in. Duis cupidatat eiusmod in fugiat minim aliquip nostrud quis officia id.

                                        Nostrud aliqua elit deserunt commodo. Deserunt Lorem dolor occaecat nostrud veniam culpa est sit proident aute est in. Consequat in sint laborum non ea. Non proident dolore consequat aliqua duis ex.

                                        Ut irure Lorem eiusmod id ex deserunt sint. Sunt ex quis id veniam minim. Non pariatur incididunt exercitation minim irure.

                                        Sint duis voluptate magna do proident cupidatat deserunt mollit veniam adipisicing aliqua. In minim nulla incididunt ipsum id veniam laborum esse. Dolore Lorem et ex sunt nostrud pariatur officia. Voluptate id non excepteur elit deserunt. Commodo deserunt esse fugiat adipisicing excepteur et fugiat minim. Elit tempor consequat quis esse occaecat. Do Lorem non minim ullamco adipisicing ullamco consequat minim minim ipsum qui excepteur velit cupidatat.

                                    </Typography>
                                </Box>

                            </Section>
                            <Section secId={'py-arch'} title={"Arquitectura usada"}>
                                <Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        Incididunt duis velit excepteur adipisicing labore labore dolore ut nulla amet excepteur. Incididunt ipsum enim qui ipsum labore cillum veniam pariatur. Reprehenderit ut pariatur deserunt nulla eiusmod.

                                        Officia excepteur commodo nulla veniam cupidatat qui nulla laboris. Irure sint ullamco culpa esse minim ex ea eiusmod mollit. Qui deserunt ipsum eiusmod sunt consectetur est sit cillum in incididunt. Cillum nostrud dolor laboris irure ullamco duis exercitation irure tempor duis incididunt do amet. Consectetur nostrud id fugiat sunt ea nulla incididunt ipsum ipsum.

                                        Officia officia laboris cupidatat non aute enim exercitation anim voluptate nulla. Esse exercitation laboris cillum fugiat ullamco eu magna adipisicing eiusmod esse nostrud ullamco occaecat. Pariatur commodo tempor enim veniam duis pariatur. Qui ea officia ad voluptate id. Incididunt reprehenderit minim occaecat qui laborum velit voluptate. Enim tempor ea magna nisi nisi nisi sint officia. Sit aliquip ut sit aute occaecat aliqua ad ullamco laboris exercitation fugiat anim.

                                        Dolore dolore laborum ex aute reprehenderit cupidatat veniam eiusmod nisi quis. Amet et sit ea eiusmod fugiat. Ipsum aliquip eiusmod reprehenderit do esse deserunt nisi quis reprehenderit enim laboris aliqua. Est nostrud dolore consectetur sunt. Sit aliquip ipsum aute pariatur anim. Esse irure fugiat Lorem commodo laboris mollit qui est commodo excepteur labore ipsum excepteur.

                                        Culpa proident excepteur aliqua nostrud magna mollit ex veniam nostrud mollit. Occaecat elit adipisicing sint mollit amet irure reprehenderit. Irure Lorem culpa dolore Lorem nulla minim. Pariatur enim minim elit eiusmod duis aliquip ad. Ea duis exercitation eu commodo velit dolor adipisicing esse officia minim esse adipisicing velit.

                                        Officia minim tempor sint aute veniam enim esse esse officia. Ea in dolor laboris aliquip est id do pariatur nulla duis. Officia eiusmod tempor ad in cupidatat nostrud labore esse anim tempor exercitation dolor in est.

                                        Elit ullamco nulla duis consequat reprehenderit tempor sint eiusmod. Ut magna irure in nulla incididunt aliqua nulla sunt irure dolor esse quis dolor aliquip. Adipisicing eiusmod fugiat consectetur tempor eiusmod. Minim reprehenderit in duis eu eiusmod sunt ea nostrud irure sunt duis. Anim id culpa nostrud veniam sit pariatur elit in. Duis cupidatat eiusmod in fugiat minim aliquip nostrud quis officia id.

                                        Nostrud aliqua elit deserunt commodo. Deserunt Lorem dolor occaecat nostrud veniam culpa est sit proident aute est in. Consequat in sint laborum non ea. Non proident dolore consequat aliqua duis ex.

                                        Ut irure Lorem eiusmod id ex deserunt sint. Sunt ex quis id veniam minim. Non pariatur incididunt exercitation minim irure.

                                        Sint duis voluptate magna do proident cupidatat deserunt mollit veniam adipisicing aliqua. In minim nulla incididunt ipsum id veniam laborum esse. Dolore Lorem et ex sunt nostrud pariatur officia. Voluptate id non excepteur elit deserunt. Commodo deserunt esse fugiat adipisicing excepteur et fugiat minim. Elit tempor consequat quis esse occaecat. Do Lorem non minim ullamco adipisicing ullamco consequat minim minim ipsum qui excepteur velit cupidatat.

                                    </Typography>
                                </Box>

                            </Section>
                            <Section secId={'py-test'} title={"Pruebas"}>
                                <Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        Incididunt duis velit excepteur adipisicing labore labore dolore ut nulla amet excepteur. Incididunt ipsum enim qui ipsum labore cillum veniam pariatur. Reprehenderit ut pariatur deserunt nulla eiusmod.

                                        Officia excepteur commodo nulla veniam cupidatat qui nulla laboris. Irure sint ullamco culpa esse minim ex ea eiusmod mollit. Qui deserunt ipsum eiusmod sunt consectetur est sit cillum in incididunt. Cillum nostrud dolor laboris irure ullamco duis exercitation irure tempor duis incididunt do amet. Consectetur nostrud id fugiat sunt ea nulla incididunt ipsum ipsum.

                                        Officia officia laboris cupidatat non aute enim exercitation anim voluptate nulla. Esse exercitation laboris cillum fugiat ullamco eu magna adipisicing eiusmod esse nostrud ullamco occaecat. Pariatur commodo tempor enim veniam duis pariatur. Qui ea officia ad voluptate id. Incididunt reprehenderit minim occaecat qui laborum velit voluptate. Enim tempor ea magna nisi nisi nisi sint officia. Sit aliquip ut sit aute occaecat aliqua ad ullamco laboris exercitation fugiat anim.

                                        Dolore dolore laborum ex aute reprehenderit cupidatat veniam eiusmod nisi quis. Amet et sit ea eiusmod fugiat. Ipsum aliquip eiusmod reprehenderit do esse deserunt nisi quis reprehenderit enim laboris aliqua. Est nostrud dolore consectetur sunt. Sit aliquip ipsum aute pariatur anim. Esse irure fugiat Lorem commodo laboris mollit qui est commodo excepteur labore ipsum excepteur.

                                        Culpa proident excepteur aliqua nostrud magna mollit ex veniam nostrud mollit. Occaecat elit adipisicing sint mollit amet irure reprehenderit. Irure Lorem culpa dolore Lorem nulla minim. Pariatur enim minim elit eiusmod duis aliquip ad. Ea duis exercitation eu commodo velit dolor adipisicing esse officia minim esse adipisicing velit.

                                        Officia minim tempor sint aute veniam enim esse esse officia. Ea in dolor laboris aliquip est id do pariatur nulla duis. Officia eiusmod tempor ad in cupidatat nostrud labore esse anim tempor exercitation dolor in est.

                                        Elit ullamco nulla duis consequat reprehenderit tempor sint eiusmod. Ut magna irure in nulla incididunt aliqua nulla sunt irure dolor esse quis dolor aliquip. Adipisicing eiusmod fugiat consectetur tempor eiusmod. Minim reprehenderit in duis eu eiusmod sunt ea nostrud irure sunt duis. Anim id culpa nostrud veniam sit pariatur elit in. Duis cupidatat eiusmod in fugiat minim aliquip nostrud quis officia id.

                                        Nostrud aliqua elit deserunt commodo. Deserunt Lorem dolor occaecat nostrud veniam culpa est sit proident aute est in. Consequat in sint laborum non ea. Non proident dolore consequat aliqua duis ex.

                                        Ut irure Lorem eiusmod id ex deserunt sint. Sunt ex quis id veniam minim. Non pariatur incididunt exercitation minim irure.

                                        Sint duis voluptate magna do proident cupidatat deserunt mollit veniam adipisicing aliqua. In minim nulla incididunt ipsum id veniam laborum esse. Dolore Lorem et ex sunt nostrud pariatur officia. Voluptate id non excepteur elit deserunt. Commodo deserunt esse fugiat adipisicing excepteur et fugiat minim. Elit tempor consequat quis esse occaecat. Do Lorem non minim ullamco adipisicing ullamco consequat minim minim ipsum qui excepteur velit cupidatat.

                                    </Typography>
                                </Box>
                            </Section>
                            <Section secId={'py-deploy'} title={"Despliegue"}>
                                <Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'justify'
                                        }}
                                    >
                                        Incididunt duis velit excepteur adipisicing labore labore dolore ut nulla amet excepteur. Incididunt ipsum enim qui ipsum labore cillum veniam pariatur. Reprehenderit ut pariatur deserunt nulla eiusmod.

                                        Officia excepteur commodo nulla veniam cupidatat qui nulla laboris. Irure sint ullamco culpa esse minim ex ea eiusmod mollit. Qui deserunt ipsum eiusmod sunt consectetur est sit cillum in incididunt. Cillum nostrud dolor laboris irure ullamco duis exercitation irure tempor duis incididunt do amet. Consectetur nostrud id fugiat sunt ea nulla incididunt ipsum ipsum.

                                        Officia officia laboris cupidatat non aute enim exercitation anim voluptate nulla. Esse exercitation laboris cillum fugiat ullamco eu magna adipisicing eiusmod esse nostrud ullamco occaecat. Pariatur commodo tempor enim veniam duis pariatur. Qui ea officia ad voluptate id. Incididunt reprehenderit minim occaecat qui laborum velit voluptate. Enim tempor ea magna nisi nisi nisi sint officia. Sit aliquip ut sit aute occaecat aliqua ad ullamco laboris exercitation fugiat anim.

                                        Dolore dolore laborum ex aute reprehenderit cupidatat veniam eiusmod nisi quis. Amet et sit ea eiusmod fugiat. Ipsum aliquip eiusmod reprehenderit do esse deserunt nisi quis reprehenderit enim laboris aliqua. Est nostrud dolore consectetur sunt. Sit aliquip ipsum aute pariatur anim. Esse irure fugiat Lorem commodo laboris mollit qui est commodo excepteur labore ipsum excepteur.

                                        Culpa proident excepteur aliqua nostrud magna mollit ex veniam nostrud mollit. Occaecat elit adipisicing sint mollit amet irure reprehenderit. Irure Lorem culpa dolore Lorem nulla minim. Pariatur enim minim elit eiusmod duis aliquip ad. Ea duis exercitation eu commodo velit dolor adipisicing esse officia minim esse adipisicing velit.

                                        Officia minim tempor sint aute veniam enim esse esse officia. Ea in dolor laboris aliquip est id do pariatur nulla duis. Officia eiusmod tempor ad in cupidatat nostrud labore esse anim tempor exercitation dolor in est.

                                        Elit ullamco nulla duis consequat reprehenderit tempor sint eiusmod. Ut magna irure in nulla incididunt aliqua nulla sunt irure dolor esse quis dolor aliquip. Adipisicing eiusmod fugiat consectetur tempor eiusmod. Minim reprehenderit in duis eu eiusmod sunt ea nostrud irure sunt duis. Anim id culpa nostrud veniam sit pariatur elit in. Duis cupidatat eiusmod in fugiat minim aliquip nostrud quis officia id.

                                        Nostrud aliqua elit deserunt commodo. Deserunt Lorem dolor occaecat nostrud veniam culpa est sit proident aute est in. Consequat in sint laborum non ea. Non proident dolore consequat aliqua duis ex.

                                        Ut irure Lorem eiusmod id ex deserunt sint. Sunt ex quis id veniam minim. Non pariatur incididunt exercitation minim irure.

                                        Sint duis voluptate magna do proident cupidatat deserunt mollit veniam adipisicing aliqua. In minim nulla incididunt ipsum id veniam laborum esse. Dolore Lorem et ex sunt nostrud pariatur officia. Voluptate id non excepteur elit deserunt. Commodo deserunt esse fugiat adipisicing excepteur et fugiat minim. Elit tempor consequat quis esse occaecat. Do Lorem non minim ullamco adipisicing ullamco consequat minim minim ipsum qui excepteur velit cupidatat.

                                    </Typography>
                                </Box>
                            </Section>
                            <SideBar sections={sections} />
                        </>
                        :
                        <Box className={`nav-top-padding`} sx={{ textAlign: 'center', margin: '20px 0px', height: '100vh' }}>
                            <Title text={"No hay información sobre el proyecto"} />
                        </Box>
                    }
                </Box>
                {/* Navegacion */}

            </Box>
        </motion.div>
    );
};

export default ProyectDescription;
