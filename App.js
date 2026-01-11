import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';

import data from './data.json'
import ProductList from './components/ProductList';


export default function App() {
    return (
        <View style={styles.body}>
            <Text style={styles.heading}>Skin Care Journal</Text>
            <StatusBar style="auto" />

            <ScrollView>
                <ProductList products={data.products} />
            </ScrollView>
            
                
        </View>
    );
}

const styles = {
    body: {
        
        backgroundColor: 'rgb(235, 223, 240)'
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    }
}