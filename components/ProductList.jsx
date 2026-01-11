import { Text, View } from 'react-native';
import ProductCard from './ProductCard';


export default function ProductList({
    products
}) {
    return (
        <View style={styles.body}>
            <Text style={styles.heading}>Products List</Text>
            <View>
                {products.map(product => 
                    <ProductCard 
                    name={product.name}
                    />
                )}
            </View>
        </View>
        

        );
};


const styles = {
    body: {

    },
    heading: {
        fontSize: 20,
        fontWeight: 'medium'
    }
}