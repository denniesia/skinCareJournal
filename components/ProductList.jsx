import { Text, View, ScrollView, Button } from 'react-native';
import ProductCard from './ProductCard';


export default function ProductList({
    products,
    productPressHandler,
    onDelete
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Products List</Text>
            <Button title='Add Product' style={styles.addBtn}></Button>
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