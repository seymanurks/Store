import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#DDDDDD',
        borderColor: '#bdbdbd',
        borderWidth: 1,
        margin: 10,
        flexDirection: 'row'
        
    },
    body_container: {
        flex: 1,
        padding: 5,
        justifyContent: "space-between"
    },
    image: {
        width: 100,
        height: 130,
        resizeMode: "contain",
        backgroundColor: "white"
    },
    title: {
        fontWeight: "bold",
        fontSize: 17
        
    },
    price: {
        textAlign: "right",
        fontSize: 15,

    }
})