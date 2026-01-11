import { Button, View,Text, Image } from "react-native";

import formatDate from '../utils/formatDate'


export default function ProductDetails({
    product,
    onClose
}) {

    let {
        name,
        brand,
        imageUrl,
        category,
        skinType,
        openedAt,
        expiresAfterMonths,
        notes,
    } = product;

    skinType = skinType.join(', ')

 return (
        <View style={styles.flexCont}>
            <View style={styles.wrapper}> 
                <View>
                    <Image style={{borderRadius: 5}}
                        source={{
                            uri: imageUrl,
                            width:75,
                            height:120,

                        }}
                    />
                </View>
                
                <View style={styles.content}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.brand}>Brand: {brand}</Text>
                    <Text style={styles.category}>Category: {category}</Text>
                    <Text style={styles.skinType}>For: {skinType} skin</Text>
                    <Text style={styles.openedAt}>Opened at: {formatDate(openedAt)} </Text>
                    <Text style={styles.expired}>Expires in: {expiresAfterMonths} months </Text>
                    <Text style={styles.notes}>Notes: {notes}</Text>
                </View>
             </View>
            
            <Button style={{marginBottom:10}} title="Go back" onPress={onClose} />
        </View>
    );
};

const styles = {
    flexCont: {
        alignItems: 'center', 
        gap: 4, 
        borderColor: 'black', 
        borderWidth: 2, 
        borderRadius: 10,
        padding: 5,
        borderColor: '#cea5d9cc'
    },
    wrapper: {
        flexDirection: 'row',
        gap: 10,
        alignItems:'center', 
        paddingTop: 12,
    }, 
    content : {
        
    },
    name: {
        fontSize: 16, 
        fontWeight: 'bold', 
        marginBottom: 10,
    },
    brand: {
        fontSize: 14,
        marginBottom: 3,
        fontStyle: 'italic'

    },
    category: {
        fontSize: 14, 
        marginBottom: 3,
        fontStyle: 'italic'
    },
    skinType: {
        fontSize: 14, 
        marginBottom: 3,
        fontStyle: 'italic'
    },
    openedAt: {
        fontSize: 14, 
        marginBottom: 3,
        fontStyle: 'italic'
    },
    expired: {
        fontSize: 14, 
        marginBottom: 3,
        fontStyle: 'italic'
    },
    notes: {
        fontSize: 14, 
        marginBottom: 10,
        fontStyle: 'italic',
        width: 200,
    }

}