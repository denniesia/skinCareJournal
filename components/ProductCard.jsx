import { View, Text, Image, Button } from "react-native";


export default function ProductCard({
    key,
    id,
    name,
    imageUrl
}) {
    return (
        <View style={styles.container}>
            <View>
                <Image style={{borderRadius: 5}}
                source={{
                    uri: imageUrl,
                    width: 100,
                    height:148,

                }}
                />

                <Text>{name}</Text>
            </View>

           

            <View>
                {/* <Text style={styles.title}>{props.title}</Text> */}
                {/* <Text style={{marginBottom: 10}}>{props.year}</Text> */}
                <View style={{width:100}}>
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
        marginBottom: 20, 
        marginHorizontal: 20, 
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
}
