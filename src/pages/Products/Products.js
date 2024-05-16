import React from 'react';
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

ProductCard

const Products = () => {
   const {loading, data, error} = useFetch(Config.API_URL)

    const renderProduct = ({item}) => <ProductCard product = {item}/>

    if(loading) {
        return <ActivityIndicator size="large"/>
    }

    if(error) {
        return <Text style = {{margin: 10, fontWeight: "bold", color: "#ff3333"}}>{error}</Text>
    }
    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct}/>
        </SafeAreaView>
    )
}

export default Products;