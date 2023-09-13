import { Box, HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import './Navbar.css';
import CategoryData from '../CategoryData/CategoryData';

const Navbar = ({ myData, menData, womenData }) => {
    // console.log("navbar: ", myData);
    // console.log({ menData });
    // console.log({ womenData });

    const allData = [
        menData,
        womenData
    ]


    return (
        <>
            <HStack className='navbarParent' width={'100vw'} border={'2px solid red'} h={'4rem'}>
                <VStack p={'0 1rem'}>
                    <HStack>
                        <Image h="40px" w={'40px'} src={'https://dev.v2kart.com/dist/assets/logo.jpg'} alt={'logo'} />
                        <HStack ml={'1rem'} className="category-container"> {/* Add a class name to the container */}
                            {myData ? (
                                myData.data.map((item) => (
                                    <div style={{ marginLeft: "1rem" }} className="category-item" key={item.id}>
                                        {item.categoryName.toUpperCase()}
                                        <div className="downbar">
                                            <Box display={'flex'} border={'5px solid orange'} h={'100%'}>
                                                <CategoryData category={item.categoryName} categoryData={allData} />
                                            </Box>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}
                        </HStack>
                    </HStack>
                </VStack>
                <VStack></VStack>
                <VStack></VStack>
            </HStack>
            {/* <Box w={'100vw'} background={'black'} height={'1rem'}></Box> */}
        </>
    );
};

export default Navbar;
