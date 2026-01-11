import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';

import data from './data.json'
import ProductList from './components/ProductList';


export default function App() {
    return (
        <View style={styles.body}>
            <Text style={styles.heading}>Skin Care Journal</Text>

            <ScrollView style={styles.container}>
                <ProductList products={data.products} />
            </ScrollView>
            
                
        </View>
    );
}

const styles = {
    body: {
        width: '100%',
        backgroundColor: 'rgb(235, 223, 240)'
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