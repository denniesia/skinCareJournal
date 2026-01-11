import { View, Text, Image, Button } from "react-native";



export default function ProductCard({
    key,
    id,
    name,
    category,
    notes,
    imageUrl
}) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image style={{borderRadius: 5}}
                    source={{
                        uri: imageUrl,
                        width: 100,
                        height:148,

                    }}
                />
                <View >
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.category}>{category}</Text>
                    <Text style={styles.notes}>Notes: {notes}</Text>
                </View>
            
            </View>

           

            <View>
                {/* <Text style={styles.title}>{props.title}</Text> */}
                {/* <Text style={{marginBottom: 10}}>{props.year}</Text> */}
                <View style={{width:100, paddingRight: 10}}>
                    <Button 
                        title="Details"
                        // onPress={() => props.onPress(props.id)}
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
        marginBottom: 20, 
        marginHorizontal: 20, 
        borderRadius: 10,
        alignItems: 'center',
        gap: 5
    },
    name: {
        fontSize: 18,
        fontWeight: 'normal',
        marginBottom: 4,
    },
    category: {
        fontStyle: 'italic',
        fontSize: 12, 
        color: '#a1a1a1'
    },
    notes: {
        fontSize: 14, 
        color: '#4b4b4bdd'
    },
    btnDetails: {

    }
}
