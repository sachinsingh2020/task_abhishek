import { Box, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const CategoryData = ({ category, categoryData }) => {
    const [myData, setMyData] = useState(null);

    useEffect(() => {
        for (let i = 0; i < categoryData.length; i++) {
            if (categoryData[i].data.categoryName === category) {
                setMyData(categoryData[i]);
            }
        }
    }, [category, categoryData]);

    // console.log({ myData });

    return (
        <Box>
            <HStack justifyContent={"center"} alignItems={'flex-start'} mt={'2rem'} w={'100vw'}>
                {
                    myData ? (
                        myData.data.subCategory.map((item) => (
                            <Box >
                                <VStack style={{ marginLeft: "1rem" }} className="category-item" key={item.id}>
                                    <Heading as="h6" size="xs" color="red" fontWeight="500" lineHeight="1.5" letterSpacing="wide" >
                                        {item.categoryName.toUpperCase()}
                                    </Heading>
                                    <VStack>
                                        {
                                            myData.data.childCategory.map((childItem) => (
                                                childItem.parentId === item.id && (
                                                    <Text key={childItem.id} fontSize="sm" fontWeight="normal" lineHeight="1.5" letterSpacing="wide">
                                                        {childItem.categoryName.toUpperCase()}
                                                    </Text>
                                                )
                                            )
                                            )
                                        }
                                    </VStack>
                                </VStack>
                            </Box>
                        )
                        )
                    ) : (
                        <p>Loading...</p>
                    )
                }
            </HStack>
        </Box>
    )
}

export default CategoryData
