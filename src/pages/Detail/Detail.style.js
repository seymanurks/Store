import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container: {
        flex: 1
    },
    body_container: {
        padding: 10,
        justifyContent: "space-between"
    },
    image_container: {
        backgroundColor: "white",
        paddingTop: 20,
        paddingBottom: 20
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 2.5,
        resizeMode: "contain",
        backgroundColor: "white"
    },
    title: {
        fontWeight: "bold",
        fontSize: 23
    },
    description: {
        fontStyle: "italic",
        fontSize: 16,
        marginVertical: 7
    },
    price: {
        fontWeight: "bold",
        fontSize: 21,
        textAlign: "right",
    },

})
