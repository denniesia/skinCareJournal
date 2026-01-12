import { Button, View,Text, Image } from "react-native";

import formatDate from '../utils/formatDate'
import { useState } from "react";
// import data from './data.json'

export default function ProductDetails({
    product,
    onClose
}) {
    let {
        id,
        name,
        brand,
        imageUrl,
        category,
        skinType,
        openedAt,
        expiresAfterMonths,
        notes,
        usageLog,
    } = product;

    const [usedAt, setUsedAt] = useState();

    skinType = skinType.join(', ');

    const markAsUsed = () => {
        // const product = data.products.find(product => product.id === id);
        // console.log(product)
        
    }

 return (
        <>
            <Text style={styles.heading}>Product Details</Text>
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

                <View style={{alignSelf: 'flex-start', paddingLeft: 30}}>
                    <Text style={styles.usageHeading}>
                        Usage Log:
                    </Text>
                    <View style={styles.usageCont}>
                        {usageLog.map((log) => (
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>

                                <Text key={log.id} style={{fontSize: 14}}>
                                    {formatDate(log.usedAt)}
                                </Text>
                                <Button title="Delete"></Button>
                            </View>
                        ))}
                    </View>
                </View>
                
                <View style={styles.btnCont}>
                    <Button style={styles.btn} title="Go back" onPress={onClose} />
                    <Button style={styles.btn} title="Use" onPress={markAsUsed}/>
                </View>
                
            </View>
        </>
    );
};

const styles = {
    heading: {
        paddingTop: 5,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
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
        marginBottom: 5,
        fontStyle: 'italic',
        width: 200,
    },
    usageCont: {
        width: 300
    },
    usageHeading: {
        fontSize: 16,
        textAlign: 'start',
        fontStyle: 'italic',
       

    },
    usageContText: {

    },
    btn: {
        marginBottom: 10,
       
    },
    btnCont: {
        flexDirection: 'row',
        gap: 40,

    }

}