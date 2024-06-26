import React from 'react';
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = ({navigation}) => {
   const {loading, data, error} = useFetch(Config.API_URL)

   const handleProduct = (id) => {
    navigation.navigate("DetailPage", {id})
   }

    const renderProduct = ({item}) => <ProductCard product = {item} onSelect={() => handleProduct(item.id)}/>

    if(loading) {
        return <Loading/>
    }

    if(error) {
        return <Error/>
    }
    return (
            <FlatList data={data} renderItem={renderProduct}/>
    )
}

export default Products;
