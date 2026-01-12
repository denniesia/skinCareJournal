import { View, Text, Image, Button } from "react-native";



export default function ProductCard({
    id,
    name,
    category,
    notes,
    imageUrl,
    onPress,
    onDelete
}) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image style={{borderRadius: 5}}
                    source={{
                        uri: imageUrl,
                        width:75,
                        height:120,

                    }}
                />
                <View >
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.category}>{category}</Text>
                    <Text style={styles.notes}>Notes: {notes}</Text>
                </View>
            
            </View>

            <View >
                <View style={{flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    <Button 
                        title="Details"
                        onPress={() => onPress(id)}
                    />
                    <Button 
                        title="Use"
                        
                    />
                    <Button 
                        title="Delete"
                        onPress={() => onDelete(id)}    
                    />
                </View>
            </View>
            
        </View>
    )
}

const styles = {
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff', 
        justifyContent: 'space-between',
        marginBottom: 10, 
        borderRadius: 10,
        alignItems: 'center',
        gap: 5,
        
    },
    name: {
        width: 200,
        fontSize: 16,
        fontWeight: 'normal',
        marginBottom: 5,
        flexWrap: 'wrap'
    },
    category: {
        fontStyle: 'italic',
        fontSize: 12, 
        color: '#a1a1a1'
    },
    notes: {
        fontSize: 12, 
        color: '#4b4b4bdd',
        flexWrap: 'wrap',
        width: 200,
    },
    btnDetails: {

    }
}
