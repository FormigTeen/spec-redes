import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    Deck,
    DefaultTemplate,
    Slide,
    FlexBox,
    Heading,
    SpectacleLogo,
    Image,
    Text,
    UnorderedList,
    ListItem
} from 'spectacle'
import geral from "./assets/images/geral.png"
import amarela from "./assets/images/amarela.png"
import vermelha from "./assets/images/vermelha.png"
import azul from "./assets/images/azul.png"
import celularParaLaptopAmarela from "./assets/images/celular_para_laptop_em_amarela.png";
import laptopParaCelularAmarela from "./assets/images/laptop_para_celular_em_amarela.png";
import notebookParaTabletVermelha from "./assets/images/notebook_para_tablet_em_vermelha.png";
import tabletParaNotebookVermelha from "./assets/images/tablet_para_notebook_em_vermelha.png";
import {Gallery} from "./components/Gallery";

const Presentation = () => (
    <Deck template={() => <DefaultTemplate />}>
        <Slide>
            <FlexBox height="100%">
                <Heading>Redes - Modelo WAN ( Packat Tracer )</Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%">
                <Heading fontSize="h2">Made with</Heading>
                <SpectacleLogo size={300} />
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                height="100%"
                padding="2em"
            >
                <Heading fontSize="48px" color="primary">
                    Visão Geral do Modelo
                </Heading>
                <Image
                    src={geral}
                    alt="Visão Geral do Modelo"
                    width="60%"
                    margin="2em 0"
                />
                <Text fontSize="24px" color="secondary">
                    Rede composto por 1 WAN e 2 LANs, com roteadores e switches conectados.
                </Text>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                height="100%"
                padding="2em"
            >
                {/* Header centralizado no topo */}
                <Heading fontSize="48px" color="primary" textAlign="center">
                    Rede Amarela
                </Heading>
                <FlexBox
                    width="100%"
                    flex="1"
                    justifyContent="space-between"
                    alignItems="center"
                    marginTop="2em"
                >
                    <FlexBox
                        flex="1"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image
                            src={amarela}
                            alt="Rede Amarela"
                            width="80%"
                        />
                    </FlexBox>
                    <FlexBox
                        flex="1"
                        justifyContent="flex-start"
                        alignItems="center"
                        padding="0 2em"
                    >
                        <UnorderedList fontSize="24px" color="secondary">
                            <ListItem>Roteador central gerenciando tráfego ( Estrela )</ListItem>
                            <ListItem>3 Hosts conectados ao roteador</ListItem>
                            <ListItem>1 Host com IP Estático ( HTTP Local )</ListItem>
                            <ListItem>2 Hosts com configuração DHCP ativa</ListItem>
                        </UnorderedList>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </Slide>

        <Slide>
            <FlexBox
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                height="100%"
                padding="2em"
            >
                {/* Header centralizado no topo */}
                <Heading fontSize="48px" color="primary" textAlign="center">
                    Rede Vermelha
                </Heading>
                <FlexBox
                    width="100%"
                    flex="1"
                    justifyContent="space-between"
                    alignItems="center"
                    marginTop="2em"
                >
                    <FlexBox
                        flex="1"
                        justifyContent="flex-start"
                        alignItems="center"
                        padding="0 2em"
                    >
                        <UnorderedList fontSize="24px" color="secondary">
                            <ListItem>Roteador central gerenciando tráfego ( Estrela )</ListItem>
                            <ListItem>2 Hosts com configuração DHCP ativa</ListItem>
                        </UnorderedList>
                    </FlexBox>
                    <FlexBox
                        flex="1"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image
                            src={vermelha}
                            alt="Rede Vermelha"
                            width="80%"
                        />
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </Slide>

        <Slide>
            <FlexBox
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                height="100%"
                padding="2em"
            >
                <Heading fontSize="48px" color="primary" textAlign="center">
                    Rede Azul
                </Heading>
                <FlexBox
                    width="100%"
                    flex="1"
                    justifyContent="space-between"
                    alignItems="center"
                    marginTop="2em"
                >
                    <FlexBox flex="1" justifyContent="center" alignItems="center">
                        <Image
                            src={azul}
                            alt="Rede Azul"
                            width="80%"
                        />
                    </FlexBox>
                    <FlexBox flex="1" justifyContent="flex-start" alignItems="center" padding="0 2em">
                        <UnorderedList fontSize="24px" color="secondary">
                            <ListItem>2 switches em topologia barramento</ListItem>
                            <ListItem>Servidor DHCP (gateway default)</ListItem>
                            <ListItem>Servidor DNS</ListItem>
                            <ListItem>Servidor SMTP</ListItem>
                            <ListItem>Servidor HTTP</ListItem>
                            <ListItem>Todos os servidores com IP estático</ListItem>
                        </UnorderedList>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                height="100%"
                padding="2em"
            >
                <Heading fontSize="48px" color="primary" textAlign="center">
                    Teste de Ping ( ICMP ) - Interconexão LAN's
                </Heading>
                <Gallery
                    images={[
                        {
                            src: celularParaLaptopAmarela,
                            alt: "Celular → Laptop (Rede Amarela)",
                            label: "Ping Celular → Laptop (Rede Amarela)",
                        },
                        {
                            src: laptopParaCelularAmarela,
                            alt: "Laptop → Celular (Rede Amarela)",
                            label: "Ping Laptop → Celular (Rede Amarela)",
                        },
                        {
                            src: notebookParaTabletVermelha,
                            alt: "Notebook → Tablet (Rede Vermelha)",
                            label: "Ping Notebook → Tablet (Rede Vermelha)",
                        },
                        {
                            src: tabletParaNotebookVermelha,
                            alt: "Tablet → Notebook (Rede Vermelha)",
                            label: "Ping Tablet → Notebook (Rede Vermelha)",
                        },
                    ]}
                    labelPosition="bottom"
                    width="80%"
                    height="70%"
                    loop
                />
            </FlexBox>
        </Slide>

    </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);