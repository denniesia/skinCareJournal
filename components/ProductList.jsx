import { Text, View, ScrollView } from 'react-native';
import ProductCard from './ProductCard';


export default function ProductList({
    products
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Products List</Text>
            <View style={styles.productCard}>
                {products.map(product => 
                    <ProductCard 
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        category={product.category}
                        notes={product.notes}
                        imageUrl={product.imageUrl}
                    />
                )}
            </View>
        </View>
        

        );
};


const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
       
    },
    heading: {
        fontSize: 20,
        fontWeight: 'medium',
        textAlign: 'center',
        marginBottom: 20,
    },
    productCard: {
        flexWrap: 'wrap'
    },
}