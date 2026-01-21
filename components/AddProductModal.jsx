import { Modal, StyleSheet, Text, View } from "react-native";



export default function AddProductModal({
    visible,
    onClose
}) {
    return (
          
        <Modal
            visible={visible}
            onRequestClose={onClose}
            animationType="slide"
        >
          <View style={styles.modal}>
            <Text>Add New Product</Text>
          </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modal: {
        paddingTop: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
})