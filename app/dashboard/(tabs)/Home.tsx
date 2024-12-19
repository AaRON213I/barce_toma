import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, Switch, ScrollView} from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter
import {Ionicons,} from 'react-native-vector-icons';
import { useCart } from './CartContext'; // Correct import of the hook

const Home = () => {
  const { addToCart, cart } = useCart();
  const router = useRouter();
  const products = [
    { id: '1', name: 'Tanduay Rhum Dark', price: 145.0, discount: 4, category:'Alcohol', image: 'https://shots.ph/cdn/shop/products/Shots_5years_350x.png?v=1613034933' },
    { id: '2', name: 'Tanduay Select', price: 140.0, discount: 17, category:'Alcohol', image: 'https://shots.ph/cdn/shop/products/Shots_Select_350x.png?v=1613034991' },
    { id: '3', name: 'Tanduay Light', price: 125.0, discount: 43, category:'Alcohol', image: 'https://shots.ph/cdn/shop/products/TanduayLight750mLwhitebg-shots_1_500x.jpg?v=1648014469' },
    { id: '4', name: 'Jack Daniels Tennessee Whiskey', price: 1249.0, discount: 43, category:'Whiskey', image: 'https://images.tcdn.com.br/img/img_prod/774261/whisky_jack_daniels_1000ml_773_1_10237127e2f5dda92c4774902197c2ba.jpg' },
    { id: '5', name: 'Johnnie Walker Black Label 1L', price: 1399.0, discount: 43, category:'Whiskey', image: 'https://justshop.ph/wp-content/uploads/2022/02/J10298-Johnnie-Walker-Black-Label-1-liter.png' },
    { id: '6', name: 'Johnnie Walker Double Black Label 1L', price: 125.0, discount: 43, category:'Whiskey', image: 'https://shopmetro.ph/mandaluyong-supermarket/wp-content/uploads/2021/03/SM10244780-2.jpg' },
    { id: '7', name: 'Johnnie Walker Red Label 1L', price: 125.0, discount: 43, category:'Whiskey', image: 'https://manila-wine.com/media/catalog/product/cache/ab779e9c28832bdb1d1b6d48074ac569/p/r/product795.jpg' },
    { id: '8', name: 'Smirnoff Mule 330ml', price: 65.0, discount: 43, category:'RTD', image: 'https://cdn.shopify.com/s/files/1/2141/9909/products/SmirnoffMuleBottle_600x.png?v=1600767267' },
    { id: '9', name: 'Heineken 330ml', price: 85.0, discount: 43, category:'RTD', image: 'https://asiabrewery.com/cdn/shop/products/Heineken-Silver-330mL-Bottle.jpg?v=1663724769' },
    { id: '10', name: 'Jack Daniels & Coke Can 330ml', price: 105.0, discount: 43, category:'RTD', image: 'https://res.cloudinary.com/hjqklbxsu/image/upload/f_auto,fl_lossy,q_auto/v1679087134/product/bottle/d/JC%2CJCZero%20406x550%20transparent%20%281%29.png' },
    { id: '11', name: 'San Miguel Apple Beer Can 330ml', price: 65.0, discount: 43, category:'RTD', image: 'https://boozeshop.ph/pub/media/catalog/product/cache/6f78ceed2ded4343fc044eeb4cc87722/s/a/san_mig_flavored_beer_apple_can_330ml.png' },
    { id: '12', name: 'Red Horse Beer 500 mL Can', price: 89.0, discount: 43, category:'RTD', image: 'https://cdn.shopify.com/s/files/1/2141/9909/files/RHBBEERCAN500ml_1_600x.png?v=1730971657' },
    { id: '13', name: 'Soju', price: 125.0, discount: 43, category:'RTD', image: 'https://i.redd.it/58724npz7g6d1.jpeg' },
    { id: '14', name: 'Lemon-dou 330ml', price: 89.0, discount: 43, category:'RTD', image: 'https://brofarjoyce.wordpress.com/wp-content/uploads/2022/01/lemon-dou-chu-hi-variety-330-ml-pack-of-4-cans-multi.jpg?w=1000' },
    { id: '15', name: 'Tanduay Light', price: 125.0, discount: 43, category:'Alcohol', image: 'https://shots.ph/cdn/shop/products/TanduayLight750mLwhitebg-shots_1_500x.jpg?v=1648014469' },
    { id: '16', name: 'Red Horse', price: 130.0, discount: 43,category:'Beer', image: 'https://www.cebooze.com/app/uploads/2023/07/1l.jpeg' },
    { id: '17', name: 'Disposable Cup', price: 2.0, category:'Items', image: 'https://cdn.shopify.com/s/files/1/0847/9935/7213/files/epackage-disposable-cup.jpg?v=1719411529' },
    { id: '18', name: 'Ice Cubes', price: 3.0, category:'Items', image: 'https://www.shutterstock.com/image-photo/ice-cubes-plastic-bag-bagged-600nw-1105124246.jpg' },
    { id: '19', name: 'Winston Red', price: 10.0, category:'Tobacco', image: 'https://i0.wp.com/marineone.co.za/wp-content/uploads/2022/09/winston-red-324x324-1.jpg?resize=300%2C300&ssl=1' },
    { id: '20', name: 'Marlboro Ice Blast', price: 10.0, category:'Tobacco', image: 'https://pictures.grocerapps.com/original/grocerapp-marlboro-ice-blast-cigarette-5e6ce7374f5c0.png' },
    { id: '21', name: 'Delta', price: 6.0, category:'Tobacco', image: 'https://tpackss.globaltobaccocontrol.org/sites/default/files/styles/500x500/public/pack_images/UKR_LVV_M1_003_1.JPG?itok=OZrbR70A' },
    { id: '22', name: 'Chesterfield', price: 6.0, category:'Tobacco', image: 'https://www.cigstore.co/wp-content/uploads/2020/03/chesterfiled-original.jpg' },
    { id: '23', name: 'Payless Extra Big', price: 25.0, category:'Snacks', image: 'https://down-ph.img.susercontent.com/file/0f0012752cf46dc5bf5aebc78e12a645' },
    { id: '24', name: 'Nissin Cup Noodles', price: 21.0, category:'Snacks', image: 'https://down-ph.img.susercontent.com/file/9df93cf624d3ece43f2016d60f734817' },
    { id: '25', name: 'Pork Sisig', price: 125.0, category:'Snacks', image: 'https://www.samspizza.ph/wp-content/uploads/2022/05/sisig.png' },
    { id: '26', name: 'Mang Juan', price: 25.0, category:'Snacks', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxhPvVR6oWNot3V9FcGX8E3uGIV7ZG-DdCw&s' },
    { id: '27', name: 'Sundang', price: 200.0, category:'Items', image: 'https://i0.wp.com/rmn.ph/wp-content/uploads/2017/09/sundang.jpg?fit=640%2C480&ssl=1' },
    { id: '28', name: 'San Miguel Beer Grande 1L', price: 125.0, category:'Beer', image: 'https://ph-test-11.slatic.net/p/cfb8a7f29dab2bb345882c392e205930.jpg' },
    { id: '29', name: 'Tiger Black Beer 1000mL', price: 115.0, category:'Beer', image: 'https://www.wholesaledito.store/img_2024/thumbnails/tn_tiger-black-beer-1000ml.jpg' },
    { id: '30', name: 'Natures Spring Purified Drinking Water 6.6L', price: 186.0, category:'Grocery', image: 'https://shopsuki.ph/cdn/shop/files/4800049712607_1024x.jpg?v=1709290231' },
    { id: '31', name: 'Coke Regular 1.5L', price: 83.0, category:'Grocery', image: 'https://shopsuki.ph/cdn/shop/files/4801981116072_1024x.jpg?v=1708914897' },
    { id: '32', name: 'Sprite - 1.5L', price: 110.0, category:'Grocery', image: 'https://gringo.ph/cdn/shop/products/Sprite1.5Lcopy_720x.jpg?v=1627978183' },
    { id: '33', name: 'Cobra Energy Drinks', price: 18.0, category:'Grocery', image: 'https://lh5.googleusercontent.com/proxy/o4nY3bo12AofC248cKyZH73Rh3-5nLFrrVGYvaBLeFEDGBd5xk_94UXS4Ipcfe5tR7gRvTdK6eU2mWKeuYCSv0RDqCLjJIckc0RgVwNTb41CfmCmQ_N9bie1OA' },
    { id: '34', name: 'Mountain Dew Pet Bottle 300ml', price: 18.0, category:'Grocery', image: 'https://unlistore.ph/images/thumbs/0025231_mountain-dew-pet-bottle-300-ml-600-ml-125-l-15-l-2-l-mou13_510.jpeg' },
    
  ];

  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Alcohol', 'Whiskey', 'Beer', 'RTD', 'Tobacco', 'Snacks', 'Grocery', 'Items'];

  const renderItem = ({ item }) => {
    // Find the item in the cart and get its quantity (if it's there)
    const cartItem = cart.find(cartItem => cartItem.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
      <View style={styles.productContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>
          ₱{item.price.toFixed(2)} {item.discount && <Text style={styles.discount}>({item.discount}% off)</Text>}
        </Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addToCart(item)} // Add to cart on press
        >
          <Text style={styles.addButtonText}>
            {quantity > 0 ? `Added (${quantity})` : 'Add to Cart'}
          </Text>
          <Ionicons name="cart" size={24} color="white" style={styles.cartIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  const filteredProducts = products.filter(
    (product) => (selectedCategory === 'All' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor='#666'
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Categories */}
      <ScrollView horizontal style={styles.categoryList}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.selectedCategoryButton]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[styles.categoryButtonText, selectedCategory === category && styles.selectedCategoryButtonText]}
            >
              {category}
            </Text>
            {selectedCategory === category && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Vertical Grid Layout with 2 Products per Row */}
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.productListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4', // Soft light color for the background
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#B4182D', // Rich Red
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: 'white', // Light background
  },
  categoryList: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCategoryButton: {},
  categoryButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black', // Default text color
    textAlign: 'center',
  },
  selectedCategoryButtonText: {
    color: 'black', // Light color for selected
  },
  underline: {
    width: '100%',
    height: 2,
    backgroundColor: 'red', // Light underline for selected category
    marginTop: 4,
  },
  productListContainer: {
    flexGrow: 1,
    marginTop: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '48%',
    backgroundColor: 'white', // White background for product cards
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    height: 300, // Fixed height for consistent product card size
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#B4182D', // Red for price
    marginBottom: 10,
  },
  discount: {
    fontSize: 12,
    color: '#888',
  },
  addButton: {
    backgroundColor: '#B4182D',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 'auto', // Push the button to the bottom of the card
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 8, // Space between text and icon
  },
  cartIcon: {
    marginLeft: 8, // Space between icon and text
  },
});

export default Home;