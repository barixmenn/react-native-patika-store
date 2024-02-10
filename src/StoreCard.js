import React from "react";
import {View,Text,Image} from 'react-native';
import styles from './StoreCard.style';

const StoreCard = props => {
    return(

        <View style={styles.container}>
        <View style={styles.imageview}>
            <Image style={styles.image_product} source={{uri: props.product.imgURL}} />
        </View>
        <Text style={styles.product_title}>{props.product.title}</Text>
        <Text style={styles.product_price}>{props.product.price}</Text>
        <Text style={styles.product_inStock}>{props.product.product_inStock ? "" :  "Stok Bulunamadı"}</Text>
    </View>
    )
}


export default StoreCard;