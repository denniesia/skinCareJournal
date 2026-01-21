import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import data from './data.json'
import ProductList from './components/ProductList';
import { useState } from 'react';
import ProductDetails from './components/ProductDetails';


export default function App() {
    const [products, setProducts] = useState(data.products);
    const [selectedProduct, setSelectedProduct] = useState(null); 



    const productPressHandler = (productId) => {
        const product = data.products.find(product => product.id === productId )
        setSelectedProduct(product)
    }

    const closeDetailsHandler = () => {
        setSelectedProduct(null);
    }

    const deleteHandler = (productId) => {
        setProducts(products => products.filter(product => product.id !== productId));
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.body}>
                    <Text style={styles.heading}>Skin Care Journal</Text>
                    <View style={styles.container}>
                        {
                            selectedProduct 
                                ? 
                            <ProductDetails product={selectedProduct} onClose={closeDetailsHandler} />       
                                :
                            <ProductList 
                                products={products}
                                productPressHandler={productPressHandler}
                                onDelete={deleteHandler}
                            />
                        }
                      

                    </View>
                        
                </View>
            </SafeAreaView>         
        </SafeAreaProvider>
    );
}

const styles = {
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(235, 223, 240)',
        marginBottom: 80,
    },
    heading: {
        paddingTop: 10,
        marginBottom: 10,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    container: {
       margin: 5,
    }
}