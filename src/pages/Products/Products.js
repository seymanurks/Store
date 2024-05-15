import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

ProductCard

const Products = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const {data: productData} = await axios.get(Config.API_URL)
        setData(productData)
        setLoading(false)
    }

    const renderProduct = ({item}) => <ProductCard product = {item}/>

    if(loading) {
        return <ActivityIndicator size="large"/>
    }

    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct}/>
        </SafeAreaView>
    )
}

export default Products;