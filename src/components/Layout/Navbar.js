import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
    Avatar,
    Button,
    Image,
    Flex,
    Heading,
    HStack,
    Icon,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useDisclosure,
} from "@chakra-ui/react";
// import format from "date-fns/format";
import { useMemo, useRef, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
    const history = useHistory();


    return (
        <>
            <div
                className="fixed px-8 bg-white shadow-md"
                style={{ width: "calc(100vw - 18rem)" }}
            >
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Flex>
                        <Heading as="h4" size="md"></Heading>
                    </Flex>

                    <Flex>


                        <Image

                            w="40px"
                            objectFit="cover"
                            src="/images/logo.png"
                            alt="Segun Adebayo"
                        />
                    </Flex>
                </Flex>
            </div>



        </>
    );
};

export default Navbar;
