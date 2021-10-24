import React from 'react';
import { Text, View, Image, FlatList, ActivityIndicator } from 'react-native';

const FeedsScreen = (props) => {
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    const getPhotos = async () => {
        try {
        const response = await fetch('https://picsum.photos/v2/list');
        const json = await response.json();
        setData(json);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
      }
    }

    React.useEffect(() => {
    getPhotos();
    }, []);


    return (
        <View style={{ flex: 1, 
            justifyContent: 'center',
            backgroundColor: '#664E88',
            alignItems: 'center' }}>

          {isLoading ? <ActivityIndicator size="large" color="#00ff00" /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <>
                  <Image source={{
                      uri: item.download_url
                  }} style={{
                      width: '90vw',
                      height: '250px',
                      borderRadius: '20px',
                      margin: '20px'
                  }} />
                  <Text tyle={{margin: '0 20px', width: '90vw',}}>{item.author}</Text>
              </>
              )}
            />
          )}
        </View>)
}

export default FeedsScreen