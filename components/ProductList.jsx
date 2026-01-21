import { Text, View, ScrollView, Button } from 'react-native';
import ProductCard from './ProductCard';
import { useState } from 'react';
import AddProductModal from './AddProductModal';


export default function ProductList({
    products,
    productPressHandler,
    onDelete
}) {
        const [showModalAddProduct, setShowModalAddProduct] = useState(false);

        const addProductPressHandler = () => {
            setShowModalAddProduct(true);
        }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Products List</Text>
            <Button 
                title='Add Product' 
                style={styles.addBtn}
                onPress = {addProductPressHandler}
                
            ></Button>

            {
                showModalAddProduct 
                    ?
                <AddProductModal visible={showModalAddProduct} onClose={() => setShowModalAddProduct(false)}/>
                    :
                <ScrollView style={styles.productCard}>
                    {products.map(product => 
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            category={product.category}
                            notes={product.notes}
                            imageUrl={product.imageUrl}
                            onPress={productPressHandler}
                            onDelete={onDelete}
                        />
                    )}
                </ScrollView>
            }

            
        </View>

        );
};


const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 200,
       
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    productCard: {
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    addBtn: {
        
    }
}