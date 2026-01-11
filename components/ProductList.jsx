import { Text, View } from 'react-native';
import ProductCard from './ProductCard';
import { ScrollView } from 'react-native';


export default function ProductList({
    products
}) {
    return (
        <View style={styles.body}>
            <Text style={styles.heading}>Products List</Text>
            <ScrollView>
                {products.map(product => 
                    <ProductCard 
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                    />
                )}
            </ScrollView>
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