import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';

import data from './data.json'
import ProductList from './components/ProductList';
import { useState } from 'react';
import ProductDetails from './components/ProductDetails';


export default function App() {
    const [selectedProduct, setSelectedProduct] = useState(null); 


    const productPressHandler = (productId) => {
        const product = data.products.find(product => product.id === productId )
        setSelectedProduct(product)
    }

    const closeDetailsHandler = () => {
        setSelectedProduct(null);
    }

    return (
        <View style={styles.body}>
            <Text style={styles.heading}>Skin Care Journal</Text>

            <View style={styles.container}>
                {
                    selectedProduct 
                        ? 
                    <ProductDetails product={selectedProduct} onClose={closeDetailsHandler} />       
                        :
                    <ProductList 
                        products={data.products}
                        productPressHandler={productPressHandler}
                    />
                }

                
            </View>
                 
        </View>
    );
}

const styles = {
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(235, 223, 240)',
        marginBottom: 100,
    },
    heading: {
        paddingTop: 45,
        marginBottom: 20,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    container: {
       margin: 15,
    }
}