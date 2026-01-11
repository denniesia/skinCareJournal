import { Text, View, ScrollView } from 'react-native';
import ProductCard from './ProductCard';


export default function ProductList({
    products
}) {
    return (
        <View style={styles.body}>
            <Text style={styles.heading}>Products List</Text>
            <View style={{flexWrap: 'wrap'}}>
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
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
       
    },
    heading: {
        fontSize: 20,
        fontWeight: 'medium',
        textAlign: 'center',
        marginBottom: 20,
    },
    productCont: {
  
    },
}